import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
  const newId = uuidv4();
  return Response.json(newId);
}
