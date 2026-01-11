import clientPromise from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { nid, name, email, contact, password } = await req.json();

  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (!regex.test(password)) {
    return NextResponse.json({ message: "Weak password" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("care_xyz");

  const exists = await db.collection("users").findOne({ email });
  if (exists) {
    return NextResponse.json({ message: "User exists" }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.collection("users").insertOne({
    nid,
    name,
    email,
    contact,
    password: hashed,
    provider: "credentials",
    role: "user",
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}
