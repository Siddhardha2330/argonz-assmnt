import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from '../../_db';
import { ObjectId } from 'mongodb';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'PATCH') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const db = await getDb();
    const { id } = req.query as { id: string };
    const { progress } = req.body || {};
    await db.collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      { $set: { progress: Number(progress), updated_at: new Date() } }
    );
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


