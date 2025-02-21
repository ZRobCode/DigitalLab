"use client";
import { useEffect, useState } from "react";

const NewsletterCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/newsletter"); // Fetch from Beehiiv API
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Error fetching newsletter posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Latest from DigitalLab</h2>
      <div className="carousel w-full">
        {posts.map((post, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <a href={post.link} target="_blank" className="btn btn-primary mt-2">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="https://your-beehiiv-signup-link" className="btn btn-secondary">
          Subscribe to DigitalLab Newsletter
        </a>
      </div>
    </div>
  );
};

export default NewsletterCarousel;
