"use client";

import { Card } from "flowbite-react";
import { Quote } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-5">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>

      {/* Mission Box */}
      <Card className="w-full max-w-3xl border-2 rounded-lg p-8">
        <blockquote className="text-left text-lg italic">
        <Quote className="inline-block w-4 h-4 text-gray-500 mr-1 mb-4" /><span>To empower immigrant professionals by providing personalized coaching,
          advocacy, access to resources, and strategic partnerships — all through a centralized, digital,
          and people-driven model. CIPA’s mission is to eliminate systemic obstacles and create opportunities for immigrant professionals from all fields
            — whether academic, technical, vocational, creative, entrepreneurial, or licensed — to achieve career alignment, social integration, and long-term success in Canada.</span>
            <Quote className="inline-block w-4 h-4 text-gray-500 ml-1 mb-4" />
        </blockquote>
      </Card>
    </section>
  );
}
