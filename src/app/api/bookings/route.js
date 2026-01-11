import clientPromise from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const booking = await req.json();

    const client = await clientPromise;     
    const db = client.db("care_xyz");
    const bookings = db.collection("bookings");

    const result = await bookings.insertOne({
      serviceId: booking.serviceId,
      serviceTitle: booking.serviceTitle,
      duration: booking.duration,
      location: booking.location,
      total: Number(booking.total),
      email: booking.email,
      status: "Pending",
      createdAt: new Date(),
    });

    return Response.json({
      insertedId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("BOOKING API ERROR:", error);
    return Response.json(
      { error: "Booking failed" },
      { status: 500 }
    );
  }
}
