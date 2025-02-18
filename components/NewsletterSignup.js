"use client";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Replace with your actual Beehiiv API Key & Publication ID
  const BEEHIIV_API_KEY = "X0V45kSNpNG635jKubweRmJOTmzHpweJy69pCBW6jLSnZsAZ4WVlTn2k6tVdAKxB"; // Add your Beehiiv API Key here
  const PUBLICATION_ID = "5eba1156-dca8-4e51-a0ca-4bab4bfd7938"; // Add your Beehiiv Publication ID here

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BEEHIIV_API_URL = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`;

    try {
      const response = await fetch(BEEHIIV_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`, // Secure API Key
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("✅ Successfully subscribed!");
        setEmail(""); // Clear input field after successful signup
      } else {
        const errorData = await response.json();
        setMessage(`❌ Error: ${errorData.message || "Subscription failed."}`);
      }
    } catch (error) {
      setMessage("❌ Network error. Please try later.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">📬 Stay Updated</h2>
      <p className="text-gray-300 mb-4 text-center">
        Join our newsletter for the latest SaaS, AI, & automation insights.
      </p>

      <form onSubmit={handleSubmit} className="form-control w-full max-w-sm">
        <div className="flex gap-2 w-full">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full text-black placeholder-gray-500"
          />
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Subscribe
          </button>
        </div>
      </form>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

export default NewsletterSignup;

