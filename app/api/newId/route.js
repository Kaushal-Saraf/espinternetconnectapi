import { connectDb } from "@/helper/db";
import { data } from "@/models/data";
import { v4 as uuidv4 } from "uuid";
export async function GET(request) {
  const newId = uuidv4();
  await connectDb();
  await data.create({ id: newId });
  return Response.json({ id: newId });
}
