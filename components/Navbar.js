"use client";
import { useState } from "react";
import Link from "next/link";
import ButtonAccount from "./ButtonAccount";
import { Menu, X } from "lucide-react"; // Import icons for the mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("hero")}>
          Digital Lab 💻
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
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

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-900 text-white space-y-4 py-4 px-6">
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
      )}
    </nav>
  );
};

export default Navbar;
