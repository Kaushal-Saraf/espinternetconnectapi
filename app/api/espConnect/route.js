import { connectDb } from "@/helper/db";
import { data, data } from "@/models/data";

export async function POST(req) {

    await connectDb();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const espData = await data.findOne({ id: id });

    if (!espData) {
      return Response.json({ message: 'ID not found' }, { status: 404 });
    }

    if (espData.userData) {
      return Response.json({ userData: espData.userData }, { status: 200 });
    } else {
      return Response.json({ message: 'no data' }, { status: 200 });
    }
}
