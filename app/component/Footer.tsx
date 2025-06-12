"use client";
import Image from "next/image";
import Link from "next/link";

export default function CipaFooter() {
  return (
    <footer className="bg-[#1c1c1c] text-white px-2 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section - Logo & Text */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/CIPA_transparentbg.png"
              alt="CIPA Logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-bold">CIPA</span>
          </div>
          <p className="text-sm leading-relaxed">
            Welcome to CIPA! We are thrilled to have you join our volunteer
            team. As a volunteer with the Canadian Immigrant Professional
            Alliance, you are supporting a powerful vision.
          </p>
        </div>

        {/* Middle Section - Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe Now</h3>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-xl">
          <Link
              href="https://www.linkedin.com/in/juanitadesouzahuletey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
        <i className="fab fa-linkedin-in"></i>
      </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 CIPA Inc. All rights reserved.
      </div>
    </footer>
  );
}
