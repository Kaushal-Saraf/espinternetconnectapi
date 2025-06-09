import { connectDb } from "@/helper/db";
import { data } from "@/models/data";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();

    const newespdata = await req.json();

    if (!newespdata.id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Find the document with the given id
    const currData = await data.findOne({ id: newespdata.id });

    if (!currData) {
      return NextResponse.json({ message: 'ID not found' }, { status: 404 });
    }

    // Update userData with espData (if provided)
    if (newespdata.data) {
      currData.espData = newespdata.data;
      await currData.save();
    }

    // Respond with current userData
    if (currData.userData) {
      return NextResponse.json({ userData: currData.userData }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No Data Sent from the User.' }, { status: 200 });
    }

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
