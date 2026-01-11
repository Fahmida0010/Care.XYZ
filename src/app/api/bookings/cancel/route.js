import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function PATCH(req) {
  try {
    const { bookingId } = await req.json();

    if (!bookingId) {
      return Response.json({ error: "Booking ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("care_xyz");
    const result = await db.collection("bookings").findOneAndUpdate(
      { _id: new ObjectId(bookingId) },
      { $set: { status: "Cancelled" } },
      { returnDocument: "after" }
    );
     console.log("result", result)

    return Response.json({ success: true, booking: result.value });
  } catch (error) {
    console.error("CANCEL BOOKING ERROR:", error);
    return Response.json({ error: "Failed to cancel booking" }, { status: 500 });
  }
}
