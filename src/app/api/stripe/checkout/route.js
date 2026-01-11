// import stripe from "@/lib/stripe";

// export async function POST(req) {
//   const { bookingId, total } = await req.json();

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     mode: "payment",
//     line_items: [
//       {
//         price_data: {
//           currency: "bdt",
//           product_data: { name: "Service Booking" },
//           unit_amount: total * 100,
//         },
//         quantity: 1,
//       },
//     ],
//     success_url: `${process.env.NEXTAUTH_URL}/payment-success`,
//     cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
//     metadata: { bookingId },
//   });

//   return Response.json({ url: session.url });
// }

import Stripe from "stripe";
import clientPromise from "@/lib/dbConnect";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { bookingId, total } = await req.json();

    const client = await clientPromise;
    const db = client.db("care_xyz");

    const booking = await db
      .collection("bookings")
      .findOne({ _id: new (require("mongodb").ObjectId)(bookingId) });

    if (!booking) {
      return Response.json({ error: "Booking not found" }, { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: booking.serviceTitle,
            },
            unit_amount: total * 100,
          },
          quantity: 1,
          metadata :{
            email:"fahmidaakter0010@gmail.com"
          }

        },


      ],
      success_url: `${process.env.NEXTAUTH_URL}/payment-success?bookingId=${bookingId}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/payment-cancel`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("STRIPE ERROR:", error);
    return Response.json(
      { error: "Stripe failed" },
      { status: 500 }
    );
  }
}
