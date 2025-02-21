// components/GPTSearch.js
"use client";
import { useState } from "react";
import axios from "axios";

const GPTSearch = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("/api/gpt-search", {
        query,
      });

      setResponse(res.data.text);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
      setResponse("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4">🔍 Ask DigitalLab AI</h2>

    <div className="flex items-start space-x-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="form-control w-full max-w-md">
        <input
          type="text"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          className="input input-bordered flex-1 text-black placeholder-gray-500 mb-4 w-full p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300 w-full"
        >
          {loading ? "Thinking..." : "Submit"}
        </button>
      </form>

      {/* Prompts Section */}
      <ul className="text-gray-300 space-y-2">
        <li>💡 Need a micro SaaS idea?</li>
        <li>💡 Looking for AI automation ideas?</li>
        <li>💡 Curious about the latest tech trends?</li>
        <li>🎯 Ask DigitalLab&apos;s AI Search!</li>
      </ul>
    </div>

    {response && (
      <div className="mt-6 bg-gray-700 p-4 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-2">Response:</h3>
        <p>{response}</p>
      </div>
    )}
  </div>
</div>

  );
};

export default GPTSearch;
