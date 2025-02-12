"use client";
import Link from "next/link";
import ButtonAccount from "./ButtonAccount";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
          Digital Lab 💻
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <button className="hover:text-cyan-400 transition" onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </button>
          <button className="hover:text-cyan-400 transition" onClick={() => scrollToSection("newsletter")}>
            Newsletter
          </button>
          <button className="hover:text-cyan-400 transition" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
          <ButtonAccount />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
