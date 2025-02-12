"use client";

import { useState } from "react";  // Import useState for state management
import Link from "next/link";
import config from "@/config";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import WebForm from "@/components/webform";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";



export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);  // State to control form visibility

  const handleOpenForm = () => setIsFormOpen(true);    // Function to open form
  const handleCloseForm = () => setIsFormOpen(false);  // Function to close form

  return (
    <>
      <Navbar />

      <Head>
        <title>DigitalLab.dev - Custom Micro SaaS, One-Page Apps (OPA) & Niche Apps</title>
        <meta
          name="description"
          content="We build profitable micro SaaS apps, One-Page Apps (OPA), Niche Apps, and automation workflows for solopreneurs and businesses."
        />
        <meta property="og:title" content="DigitalLab.dev - Custom Micro SaaS, One-Page Apps (OPA) & Niche Apps" />
        <meta property="og:description" content="We build profitable micro SaaS apps, One-Page Apps (OPA), Niche Apps and automation workflows." />
        <meta property="og:image" content="/path-to-social-preview.jpg" />
        <meta
          name="keywords"
          content="micro saas, one-page apps, niche Apps, automation workflows, digital lab, digital lab dev, digital lab development"
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center gap-20 px-40 py-24 bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-white">
          <p className="text-2xl font-bold"> 🚀 Skip the Dev Work. </p>
          <h1 className="text-4xl font-extrabold">
            We Build Micro SaaS Apps, One-Page Apps (OPA), Niche Apps &
            Automations — Fast
          </h1>
          
          {/* Button to trigger form popup */}
          <button
            className="btn bg-cyan-600 text-white px-4 py-2 text-center justify-center items-center flex w-full md:w-auto text-lg md:text-xl shadow-lg hover:bg-purple-700 transition duration-300"
            onClick={handleOpenForm}
          >
            What do you need built?
          </button>
          
          {/* Render the WebForm as a popup if isFormOpen is true */}
          {isFormOpen && <WebForm onClose={handleCloseForm} />}
        </section>

        {/* Portfolio Carousel Section */}
        <section id="portfolio" className="text-3xl font-extrabold text-center mb-8">
        <PortfolioCarousel />
        </section>

        {/* CTA Section */}
        <section id="CTA" className="py-20">
          <CTA />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <Pricing />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <FAQ />
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4">
        <NewsletterSignup />
        </div>
        </section>

         {/* Footer Section */}
         <section id="Footer" className="py-20">
          <Footer />
        </section>

      </main>
    </>
  );
}

