import Link from "next/link";
import Head from "next/head";
import ButtonPortfolio from "@/components/ButtonPortfolio";
import NewsletterSignup from "@/components/NewsletterSignup";
import Navbar from "@/components/Navbar";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar at the top */}

      <Head>
        <title>DigitalLab.dev - Custom Micro SaaS & One-Page Websites</title>
        <meta
          name="description"
          content="We build profitable micro SaaS apps, one-page websites, and automation workflows for solopreneurs and businesses."
        />
        <meta
          name="keywords"
          content="micro saas, one-page websites, automation workflows, digital lab, digital lab dev, digital lab development"
        />
      </Head>

      <header className="p-4 flex flex-auto justify-end max-w-7xl mx-auto">
        <ButtonPortfolio text="Login" />
      </header>

      <main>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24">
          <h1 className="text-3xl font-extrabold">Digital Lab 💻</h1>
          <p className="text-lg opacity-80">
            🚀 Skip the Dev Work. We Build Micro SaaS Apps, Websites &
            Automations—Fast... What do you need built?
          </p>

        {/* Portfolio Carousel Section */}
        <PortfolioCarousel />
        </section>

        {/* CTA Section */}
        <section id="CTA" className="py-20">
          <CTA />
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

         {/* FAQ Section */}
         <section id="Footer" className="py-20">
          <Footer />
        </section>

      </main>
    </>
  );
}

