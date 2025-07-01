"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "./NavMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
  src="/logo.svg"
  alt="Logo"
  width={100} // hoặc kích thước mong muốn
  height={40}
  priority // nếu là logo hay ảnh đầu trang
/>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <NavMenu className="hidden sm:flex text-xl" />
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`sm:hidden fixed inset-0 bg-white/30 backdrop-blur-xl shadow-xl transform transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 relative flex flex-col justify-center items-center h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <NavMenu
            onClick={() => setIsOpen(false)}
            className="flex-col text-5xl sm:text-6xl"
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
