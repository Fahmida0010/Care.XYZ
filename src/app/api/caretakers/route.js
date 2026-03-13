import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("care_xyz");

    const caretakers = await db
      .collection("caretakers")
      .find({})
      .toArray();

    return Response.json(caretakers);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to fetch caretakers" }, { status: 500 });
  }
}