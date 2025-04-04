"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "your_site_key_here"; // ⬅️ Replace with your actual reCAPTCHA site key

const WebForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!token) {
      alert("Please verify you're a human.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, token }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative max-w-xl w-full p-6 bg-white rounded-xl shadow-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>We&apos;ll be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Type of App/Automation</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="text-black mt-1 p-2 w-full border rounded-md"
              >
                <option value="">Select...</option>
                <option value="Micro SaaS">Micro SaaS App</option>
                <option value="Niche MVP">Niche Minimial Viable Product (MVP)</option>
                <option value="AI Agent">AI Agent</option>
                <option value="Business Automation Workflow">Business Automation Workflow</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="text-black mt-1 p-2 w-full border rounded-md"
              >
                <option value="">Select...</option>
                <option value="$500-$1,000">$850 - $2,500</option>
                <option value="$1,000-$2,500">$2,500 - $5,000</option>
                <option value="$2,500-$5,000">$5,000 - $8,500</option>
                <option value="$5,000+">$8,500+</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="text-black mt-1 p-2 w-full border rounded-md"
              >
                <option value="">Select...</option>
                <option value="ASAP">ASAP</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="3-6 weeks">3-6 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => {
                  if (e.target.value.length <= 400) {
                    handleChange(e);
                  }
                }}
                rows="4"
                required
                className="mt-1 p-2 w-full border rounded-md text-black placeholder-gray-400"
                placeholder="Tell us about your project (Max 400 characters)..."
              />
              <p className="text-gray-500 text-sm mt-1">
                {formData.description.length}/400 characters
              </p>
            </div>

            {/* reCAPTCHA (invisible) */}
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-cyan-600 text-white px-4 py-2 text-center justify-center items-center flex w-full md:w-auto text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WebForm;
