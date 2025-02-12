"use client";

import { useRef, useState } from "react";

const faqList = [
  {
    question: "What types of micro SaaS apps do you build?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-300">
        We specialize in lightweight, scalable apps tailored for solopreneurs and small businesses, focusing on automation, productivity, and niche solutions.
      </div>
    ),
  },
  {
    question: "How long does it take to deliver a project?",
    answer: (
      <p className="text-gray-300">
        Depending on the complexity, micro SaaS apps take 1-4 weeks, while one-page websites and automation workflows can be delivered in as little as 48 hours.
      </p>
    ),
  },
  {
    question: "Do I need to know how to code to use your tools?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-300">
        No coding experience is needed! All our solutions are designed for easy, no-code implementation.
      </div>
    ),
  },
  {
    question: "Is there post-launch support?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-300">
        Yes! We offer optional support packages to ensure your app or website runs smoothly after launch.
      </div>
    ),
  },
  {
    question: "How much does a project cost?",
    answer: (
      <div className="space-y-2 leading-relaxed text-gray-300">
        Our pricing varies based on the project scope. We do offer bundles. We will be transparent with all costs upon understanding what you need. Please contact us.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-gray-600"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        {/* Adjusted question text color */}
        <span className={`flex-1 ${isOpen ? "text-cyan-400" : "text-white"}`}>
          {item?.question}
        </span>

        {/* Updated icon color for better visibility */}
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform duration-300 ${
            isOpen ? "rotate-45 text-cyan-400" : "text-white"
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
        </svg>
      </button>

      {/* Updated answer text color */}
      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight }
            : { maxHeight: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200 text-gray-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col text-left basis-1/2">
          {/* Updated the FAQ label color */}
          <p className="inline-block font-semibold text-cyan-400 mb-4">FAQ</p>

          {/* Adjusted heading text color */}
          <p className="sm:text-4xl text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;

