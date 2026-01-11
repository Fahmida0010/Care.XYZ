import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("care_xyz");

    const payments = await db
      .collection("payments")
      .find({})
      .sort({ createdAt: -1 }) 
      .toArray();

    return Response.json(payments);
  } catch (error) {
    console.error("ADMIN PAYMENTS ERROR:", error);
    return Response.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}
