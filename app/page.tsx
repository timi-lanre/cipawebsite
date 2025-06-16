"use client";

import React from "react";
import CustomCarousel from "./components/CustomCarousel";
import MissionSection from "./components/MissionSection";

export default function Home() {
  return (
    <main>
      {/* Main banner */}
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div>
          <CustomCarousel />
        </div>
      </div>

      {/* Mission area */}
      <MissionSection />
    </main>
  );
}