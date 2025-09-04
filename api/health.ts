import { getDb } from './_db';

export default async function handler(req: any, res: any) {
  try {
    // Test database connection
    const db = await getDb();
    await db.admin().ping();
    
    res.status(200).json({ 
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Health check failed:', error);
    res.status(500).json({ 
      status: "error",
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}


