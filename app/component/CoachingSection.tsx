"use client";

import { Button } from "flowbite-react";

export default function CoachingSection() {
  return (
    <section className="bg-[#6B0000] px-4 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Coaching Services
      </h2>

      {/* White Box */}
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full text-center mb-8">
        <p className="text-gray-700 mb-4">
          Professional development coaching to help you reach your career goals.
        </p>
        <p className="text-gray-700">
          Our coaches provide personalized guidance and support.
        </p>
      </div>

      {/* Yellow Button */}
      <Button
        href="#"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300"
      >
        Schedule a Session
      </Button>
    </section>
  );
}
