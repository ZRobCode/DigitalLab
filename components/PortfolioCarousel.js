"use client";

import { useEffect, useRef } from "react";

const PortfolioCarousel = () => {
  const projects = [
    {
      name: "FeatureLenz",
      image: "/images/featurelenz.png", 
      link: "https://featurelenz.com",
    },
    {
      name: "RevOps Crew",
      image: "/images/revopscrew.png",
      link: "https://revopscrew.com",
    },
    {
      name: "One-Page Site",
      image: "/images/onepage-site.png",
      link: "https://onepagesite.com",
    },
  ];

  const carouselRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });

        // Reset to the start when reaching the end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
      {/* Static Header Section */}
      <h2 className="text-3xl font-bold text-center mb-2">Our Work</h2>
      <p className="text-gray-400 text-center mb-6">
        Explore some of the micro SaaS apps, one-page apps, and automations we&apos;re building.
      </p>

      {/* Scrolling Portfolio Items */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-80"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg shadow-md w-80 h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-cyan-400 text-center mt-2">{project.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;

