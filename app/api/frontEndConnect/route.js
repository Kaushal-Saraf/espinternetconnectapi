import { connectDb } from "@/helper/db";
import { data } from "@/models/data";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();

    const newuserdata = await req.json();

    if (!newuserdata.id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Find the document with the given id
    const currData = await data.findOne({ id: newuserdata.id });

    if (!currData) {
      return NextResponse.json({ message: 'ID not found enter correct id.' }, { status: 404 });
    }

    // Update userData with espData (if provided)
    if (newuserdata.data) {
      currData.userData = newuserdata.data;
      await currData.save();
    }

    // Respond with current userData
    if (currData.espData) {
      return NextResponse.json({ espData: currData.espData }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'No Data Sent from the Esp.' }, { status: 200 });
    }

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
