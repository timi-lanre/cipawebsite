"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
// Counter Component
function Counter({ end, suffix = "", duration = 2000, startCounting }: { end: number; suffix?: string; duration?: number; startCounting: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; // Only start if allowed

    let start = 0;
    const randomEnd = end + Math.floor(Math.random() * 4); // random between [end, end+3]
    const increment = randomEnd / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= randomEnd) {
        start = randomEnd;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [startCounting, end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Main Section
export default function ImpactPartnersSection() {
  const { ref, inView } = useInView({ triggerOnce: true }); // only trigger once

  return (
    <section ref={ref} className="px-4 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Impact & Partners
      </h2>

      {/* Circles */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* First Circle */}
        <div className="w-40 h-40 bg-[#1D4ED8] rounded-full flex flex-col items-center justify-center text-white text-center
          hover:scale-110 hover:-translate-y-2 hover:bg-blue-700 hover:shadow-2xl shadow-md transition-all duration-300 cursor-pointer">
          <span className="text-2xl font-bold">
            <Counter end={1000} suffix="+" startCounting={inView} />
          </span>
          <span className="text-sm mt-2">People Served</span>
        </div>

        {/* Second Circle */}
        <div className="w-40 h-40 bg-[#1D4ED8] rounded-full flex flex-col items-center justify-center text-white text-center
          hover:scale-110 hover:-translate-y-2 hover:bg-blue-700 hover:shadow-2xl shadow-md transition-all duration-300 cursor-pointer">
          <span className="text-2xl font-bold">
            <Counter end={20} suffix="+" startCounting={inView} />
          </span>
          <span className="text-sm mt-2">Communities</span>
        </div>

        {/* Third Circle with Logo */}
        <div className="w-40 h-40 bg-[#1D4ED8] rounded-full flex items-center justify-center overflow-hidden
          hover:scale-110 hover:-translate-y-2 hover:bg-blue-700 hover:shadow-2xl shadow-md transition-all duration-300 cursor-pointer">
          <img
            src="./images/YES_Logo.png"
            alt="YES Logo"
            className="object-contain w-28 h-28"
          />
        </div>
      </div>
    </section>
  );
}
