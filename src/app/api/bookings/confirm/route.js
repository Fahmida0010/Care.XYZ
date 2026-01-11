import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { sendEmail } from "@/lib/sendEmail";

export async function PATCH(req) {
  try {
    const { bookingId } = await req.json();
    console.log(bookingId)

    const client = await clientPromise;
    const db = client.db("care_xyz");

    //  Update booking
    const result = await db.collection("bookings").findOneAndUpdate(
      { _id: new ObjectId(bookingId) },
      { $set: { status: "Confirmed" } },
      { returnDocument: "after" }
    );

    console.log(result)

    if (!result) {
      return Response.json({ error: "Booking not found" }, 
        { status: 404 });
    }

  
    await sendEmail(result .email, result);

    return Response.json({ success: true,
       result });
  } catch (error) {
    console.error("CONFIRM ERROR:", error);
    return Response.json({ error: "Email send failed" }, { status: 500 });
  }
}
