import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("care_xyz");

    const tips = await db
      .collection("tips")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    return Response.json(tips);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch tips" }, { status: 500 });
  }
}