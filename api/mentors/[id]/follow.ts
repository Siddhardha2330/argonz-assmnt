import { getDb } from '../../_db';
import { ObjectId } from 'mongodb';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const db = await getDb();
    const { id } = req.query as { id: string };
    await db.collection('mentorProfiles').updateOne(
      { _id: new ObjectId(id) },
      { $inc: { total_followers: 1 } }
    );
    res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


