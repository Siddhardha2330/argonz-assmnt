import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://22pa1a1275:Thor2330111@cluster.tjefsrm.mongodb.net/task_management_db?retryWrites=true&w=majority";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  try {
    if (cachedDb && cachedClient) {
      return cachedDb;
    }
    
    const client = new MongoClient(uri);
    await client.connect();
    cachedClient = client;
    cachedDb = client.db('task_management_db');
    return cachedDb;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}


