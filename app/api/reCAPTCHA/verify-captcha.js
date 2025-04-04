// pages/api/verify-captcha.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { token } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // store this safely in .env.local
  
    try {
      const response = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${secretKey}&response=${token}`,
        }
      );
  
      const data = await response.json();
  
      if (data.success && data.score >= 0.5) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({
          success: false,
          message: "Failed CAPTCHA verification",
          score: data.score,
        });
      }
    } catch (err) {
      return res.status(500).json({ error: "Server error", details: err.message });
    }
  }
  