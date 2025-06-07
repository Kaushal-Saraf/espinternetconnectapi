import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const newId = uuidv4();
    res.status(200).json({ id: newId });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
