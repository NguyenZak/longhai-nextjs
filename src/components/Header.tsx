"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "./NavMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-md dark:bg-black/80 dark:shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          scroll={false}
          onClick={handleLogoClick}
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-gray-100" />
          )}
        </button>

        {/* Desktop Navigation */}
        <NavMenu className="hidden sm:flex text-xl text-gray-900 dark:text-gray-100" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`sm:hidden fixed inset-0 bg-white/30 dark:bg-black/50 backdrop-blur-xl shadow-xl transform transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 relative flex flex-col justify-center items-center h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <NavMenu
            onClick={() => setIsOpen(false)}
            className="flex-col text-5xl sm:text-6xl text-gray-900 dark:text-white"
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
