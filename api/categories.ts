import { getDb } from './_db';

export default async function handler(req: any, res: any) {
  try {
    const db = await getDb();
    const categories = await db.collection('categories').find({}).toArray();
    res.status(200).json(categories);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


