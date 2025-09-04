import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const db = await getDb();
    const categories = await db.collection('categories').find({}).toArray();
    res.status(200).json(categories);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


