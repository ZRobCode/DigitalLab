"use client";

import Image from "next/image";
import config from "@/config";
import { useState } from "react";
import { Zap, Rocket, Bot } from "lucide-react";
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
        <div className="flex flex-col items-center max-w-3xl p-8 md:p-0">
          <h2 className="font-bold text-4xl md:text-6xl tracking-tight mb-6 md:mb-10">
            Transform Your App Ideas & Business Automations Into Reality
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-12">
            Skip the technical headaches—we build and launch your micro SaaS apps, MVPs, AI Agents, and automations <strong>in days, not months.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full mb-8 md:mb-12">
            <div className="flex items-start space-x-3">
              <Rocket className="w-6 h-6 mt-1 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">MVP Development</h3>
                <p className="text-sm opacity-90">Validate your ideas quickly with feature-rich MVP applications</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 mt-1 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Micro SaaS Apps</h3>
                <p className="text-sm opacity-90">Custom-built SaaS solutions designed for profitability</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Bot className="w-6 h-6 mt-1 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">AI Automation</h3>
                <p className="text-sm opacity-90">Streamline operations with intelligent AI-powered workflows</p>
              </div>
            </div>
          </div>

          <ul className="text-left text-md md:text-lg list-none space-y-3 opacity-90 mb-8 md:mb-12">
            <li className="flex items-center">
              <span className="text-cyan-400 mr-2">✓</span> 
              AI-enhanced development for faster delivery
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-2">✓</span> 
              Expert implementation and deployment
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-2">✓</span> 
              Authentification, Payments, Database, and more
            </li>
            <li className="flex items-center">
              <span className="text-cyan-400 mr-2">✓</span> 
              Ongoing support and optimization
            </li>
          </ul>

          <button
            className="btn bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-center justify-center items-center flex w-full md:w-auto text-lg md:text-xl shadow-lg transition duration-300 rounded-lg"
            onClick={handleOpenForm}
          >
            Get Started!
          </button>
          <p className="text-sm opacity-70 mt-4">
            Let&apos;s build something extraordinary together.
          </p>
        </div>
      </div>

      {isFormOpen && <WebForm onClose={handleCloseForm} />}
    </section>
  );
};

export default CTA;