"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
export function NavBarComponent() {
  return (
    <Navbar fluid className="bg-[#2B3A8C] text-white font-[var(--font-lora)]">
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between w-full">
        {/* Logo and Brand Name on the left */}
        <NavbarBrand
          href="/"
          className="flex items-center"
        >
          <Image
            src="/images/CIPA_transparentbg.png"
            alt="CIPA Logo"
            width={36}
            height={36}
            className="my-2 ml-5 h-9"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            &nbsp;CIPA
          </span>
        </NavbarBrand>

        {/* Hamburger Toggle for mobile */}
        <NavbarToggle className="mb-3" />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse className="bg-[#2B3A8C] md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:gap-8">
        <NavbarLink
          href="/"
          className="text-yellow-400 md:text-white font-[var(--font-lora)] hover:text-yellow-300 md:hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="/aboutus"
          className="text-yellow-400 md:text-white font-[var(--font-lora)] hover:text-yellow-300 md:hover:text-yellow-300 transition-colors duration-300"
        >
          About Us
        </NavbarLink>
        <NavbarLink
          href="#"
          className="text-yellow-400 md:text-white font-[var(--font-lora)] hover:text-yellow-300 md:hover:text-yellow-300 transition-colors duration-300"
        >
          Programs
        </NavbarLink>
        {/* <NavbarLink
          href="#"
          className="text-yellow-400 md:text-white font-[var(--font-lora)] hover:text-yellow-300 md:hover:text-yellow-300 transition-colors duration-300"
        >
          Coaching
        </NavbarLink> */}
        <NavbarLink
          href="/contactus"
          className="text-yellow-400 md:text-white font-[var(--font-lora)] hover:text-yellow-300 md:hover:text-yellow-300 transition-colors duration-300"
        >
          Contact Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
