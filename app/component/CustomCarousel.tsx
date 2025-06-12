"use client";

import { Button } from "flowbite-react";

export default function CustomCarousel() {
  return (
    <div className="relative w-full max-w-full h-97 overflow-hidden">
      <div className="max-w-full h-97 bg-[url('/images/mapyellow.png')] bg-cover bg-no-repeat bg-top animate-bgMove">
      <div className="absolute inset-0 bg-blue-500/15"></div>
      <div className="absolute w-full h-full transition-opacity duration-700">
        <div className="flex flex-col absolute inset-0 items-center justify-center text-center z-10 p-6">
          <div className="bg-black backdrop-blur-2xl rounded-2xl opacity-80 p-2">
          <h1 className="text-4xl font-bold md:text-6xl px-4 py-2 text-white">
            Empowering Communities
          </h1>
          </div>
          <div className="bg-black my-2 rounded-2xl opacity-80 p-2">
          <h4 className="text-white font-bold text-xl md:text-xl px-4 ">
            Building a stronger future through unity and action
          </h4>
            </div>
          {/* Buttons area */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#E8B923] text-black border border-red-500 hover:bg-red-50">
              Learn More
            </Button>
            <Button className="bg-[#C72E2E] text-white border border-blue-500">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
