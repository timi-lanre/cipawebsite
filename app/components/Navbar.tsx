"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2B3A8C] text-white font-[var(--font-lora)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/CIPA_transparentbg.png"
              alt="CIPA Logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="ml-2 text-xl font-semibold">CIPA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                Programs
              </Link>
              <Link
                href="/contactus"
                className="text-white hover:text-yellow-300 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block text-yellow-400 hover:text-yellow-300 px-3 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="block text-yellow-400 hover:text-yellow-300 px-3 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="block text-yellow-400 hover:text-yellow-300 px-3 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/contactus"
                className="block text-yellow-400 hover:text-yellow-300 px-3 py-2 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}