"use client";
import Image from "next/image";

export default function JoinBanner() {
  return (
    <div className="w-full px-4">
      <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-md">
        {/* Background image */}
        <Image
          src="/images/banner.jpg"
          alt="Join Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-12">
          <p className="text-white font-bold text-lg sm:text-2xl max-w-md leading-snug">
            Join your hand with us for a<br />
            better life and beautiful future.
          </p>
        </div>
      </div>
    </div>
  );
}
