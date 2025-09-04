module.exports = async function handler(req, res) {
  res.status(200).json({ 
    status: "ok",
    message: "Basic health check working",
    timestamp: new Date().toISOString()
  });
}
