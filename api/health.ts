export default async function handler(req: any, res: any) {
  res.status(200).json({ 
    status: "ok",
    message: "Basic health check working",
    timestamp: new Date().toISOString()
  });
}


