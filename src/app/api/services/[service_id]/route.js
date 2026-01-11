// import clientPromise from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";

// export async function GET(req, { params }) {
//   const client = await clientPromise;
//   const db = client.db();

//   const service = await db
//     .collection("services")
//     .findOne({ _id: new ObjectId(params.id) });

//   return Response.json(service);
// }

import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    // ✅ params MUST be awaited
    const { service_id } = await context.params;

    if (!ObjectId.isValid(service_id)) {
      return NextResponse.json(
        { error: "Invalid service id" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("care_xyz");

    const service = await db
      .collection("services")
      .findOne({ _id: new ObjectId(service_id) });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(service);
  } catch (error) {
    console.error("Service API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
