import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("care_xyz");
    const services = await db.collection("services").find({}).toArray();
    const plainServices = services.map(service => ({
      ...service,
      _id: service._id.toString(),
      id: service._id.toString(), 
    }));

    return Response.json(plainServices);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}