import clientPromise from "@/lib/dbConnect";

export async function POST(req) {
  const data = await req.json();
  const client = await clientPromise;
  const db = client.db("care_xyz");

  await db.collection("payments").insertOne({
    ...data,
    createdAt: new Date(),
    status: "Paid"
  });

  return Response.json({ success: true });
}
