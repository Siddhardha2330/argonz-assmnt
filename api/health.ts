export default async function handler(req: any, res: any) {
  try {
    // Basic health check without database
    res.status(200).json({ 
      status: "ok",
      message: "Health check successful",
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


