import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getDb } from './_db';
import { ObjectId } from 'mongodb';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const db = await getDb();
    if (req.method === 'GET') {
      const { q, category } = req.query as { q?: string; category?: string };
      const filter: any = {};
      if (category) filter.category = category;
      if (q) filter.$or = [
        { title: { $regex: String(q), $options: 'i' } },
        { description: { $regex: String(q), $options: 'i' } }
      ];
      const tasks = await db.collection('tasks').find(filter).sort({ updated_at: -1 }).toArray();
      return res.status(200).json(tasks);
    }
    if (req.method === 'POST') {
      const { title, description, category, priority, deadline, tags } = req.body || {};
      if (!title || !description) return res.status(400).json({ error: 'Missing title/description' });
      const now = new Date();
      const doc = {
        title: String(title),
        description: String(description),
        category: category || '',
        status: 'in_progress',
        priority: priority || 'medium',
        progress: 0,
        deadline: deadline ? new Date(deadline) : null,
        estimated_time: { hours: 0, minutes: 0 },
        actual_time_spent: { hours: 0, minutes: 0 },
        assigned_to: [],
        assigned_by: null,
        mentor_id: null,
        mentor_assigned_at: null,
        mentor_completion_date: null,
        mentor_rating: null,
        mentor_review: null,
        tags: Array.isArray(tags) ? tags : [],
        attachments: [],
        comments: [],
        created_at: now,
        updated_at: now
      };
      const result = await db.collection('tasks').insertOne(doc);
      return res.status(200).json({ ok: true, _id: String(result.insertedId) });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}


