"use client";

import Image from "next/image";
import config from "@/config";
import { useState } from "react";
import WebForm from "@/components/webform";  // Import WebForm component

const CTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-black bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-2xl p-8 md:p-0">
          <h2 className="font-bold text-4xl md:text-6xl tracking-tight mb-6 md:mb-10">
            Turn Ideas into Profitable SaaS Apps
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-12">
            Skip the technical headaches—we build and launch your micro SaaS apps, niche web apps, and automations <strong>in days, not months.</strong>
          </p>

          <ul className="text-left text-md md:text-lg list-disc list-inside opacity-90 mb-8 md:mb-12">
            <li>Custom-built SaaS apps tailored to your business needs</li>
            <li>Lightning-fast delivery with expert development</li>
            <li>Ongoing support to help you scale and grow</li>
          </ul>

          <button
            className="btn bg-cyan-600 text-white px-4 py-2 text-center justify-center items-center flex w-full md:w-auto text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300"
            onClick={handleOpenForm}
          >
            Work with {config.appName}
          </button>
          <p className="text-sm opacity-70 mt-4">Let&apos;s bring your idea to life.</p>
        </div>
      </div>

      {/* Render WebForm as popup when isFormOpen is true */}
      {isFormOpen && <WebForm onClose={handleCloseForm} />}
    </section>
  );
};

export default CTA;