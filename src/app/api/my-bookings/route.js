import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("care_xyz");

    const bookings = await db
      .collection("bookings")
      .find({ email: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json(bookings);
  } catch (error) {
    console.error("MY BOOKINGS ERROR:", error);
    return Response.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}
