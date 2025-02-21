"use client";
import { useState, useEffect } from "react";

const CombinedNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // Beehiiv configuration
  const BEEHIIV_API_KEY = "X0V45kSNpNG635jKubweRmJOTmzHpweJy69pCBW6jLSnZsAZ4WVlTn2k6tVdAKxB";
  const PUBLICATION_ID = "5eba1156-dca8-4e51-a0ca-4bab4bfd7938";

  // Fetch newsletter posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/newsletter");
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching newsletter posts:", error);
      }
    };
  
    fetchPosts();
  }, []);

  // Handle newsletter signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    const BEEHIIV_API_URL = `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`;

    try {
      const response = await fetch(BEEHIIV_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("✅ Successfully subscribed!");
        setEmail("");
      } else {
        const errorData = await response.json();
        setMessage(`❌ Error: ${errorData.message || "Subscription failed."}`);
      }
    } catch (error) {
      setMessage("❌ Network error. Please try later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Newsletter Signup Section */}
      <div className="mb-12">
        <div className="flex flex-col items-center p-8 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-3">📬 Stay Updated</h2>
          <p className="text-gray-300 mb-6 text-center max-w-lg">
            Join our newsletter for the latest SaaS, AI, & automation insights.
          </p>

          <form onSubmit={handleSubmit} className="form-control w-full max-w-md">
            <div className="flex gap-3 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered flex-1 text-black placeholder-gray-500"
              />
              <button 
                type="submit" 
                className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>

          {message && (
            <p className="mt-4 text-sm animate-fade-in">{message}</p>
          )}
        </div>
      </div>

      {/* Newsletter Carousel Section */}
      {posts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">Latest from DigitalLab</h2>
          <div className="carousel w-full rounded-lg overflow-hidden">
            {posts.map((post, index) => (
              <div 
                key={index} 
                id={`slide${index}`} 
                className="carousel-item relative w-full"
              >
                <div className="p-8 bg-white shadow-lg rounded-lg w-full">
                  <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                  >
                    Read More
                  </a>
                </div>

                {/* Carousel Navigation */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a 
                    href={`#slide${index === 0 ? posts.length - 1 : index - 1}`}
                    className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
                  >❮</a>
                  <a 
                    href={`#slide${index === posts.length - 1 ? 0 : index + 1}`}
                    className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
                  >❯</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedNewsletter;