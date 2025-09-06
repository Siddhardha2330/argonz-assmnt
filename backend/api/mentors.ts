import { getDb } from './_db';
import { ObjectId } from 'mongodb';

export default async function handler(req: any, res: any) {
  try {
    const db = await getDb();
    if (req.method === 'GET') {
      const { q, profession } = req.query as { q?: string; profession?: string };
      const filter: any = {};
      if (profession) filter.profession = profession;
      if (q) filter.$or = [
        { profession: { $regex: String(q), $options: 'i' } },
        { specialization: { $regex: String(q), $options: 'i' } },
        { bio: { $regex: String(q), $options: 'i' } }
      ];
      const mentors = await db.collection('mentorProfiles').find(filter).sort({ average_rating: -1, total_followers: -1 }).toArray();
      return res.status(200).json(mentors);
    }
    if (req.method === 'POST') {
      const { profession, specialization, bio, company, position, location, hourly_rate, currency, availability_status } = req.body || {};
      if (!profession) return res.status(400).json({ error: 'Missing profession' });
      const now = new Date();
      const doc = {
        user_id: null,
        profession: profession || '',
        specialization: specialization || '',
        bio: bio || '',
        company: company || '',
        position: position || '',
        location: location || '',
        hourly_rate: Number(hourly_rate) || 0,
        currency: currency || 'USD',
        availability_status: availability_status || 'available',
        total_tasks_completed: 0,
        total_reviews: 0,
        average_rating: 0,
        total_followers: 0,
        is_featured: false,
        is_verified: false,
        created_at: now,
        updated_at: now
      };
      const result = await db.collection('mentorProfiles').insertOne(doc);
      return res.status(200).json({ ok: true, _id: String(result.insertedId) });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


