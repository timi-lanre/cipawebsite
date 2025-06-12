"use client";

import Image from "next/image";

const programs = [
  { title: "Advocacy", color: "bg-[#6B0000]", border: "border-[#6B0000]", path: "/images/advocacy.png" },
  { title: "Training", color: "bg-[#F59E0B]", border: "border-[#F59E0B]", path: "/images/mentor.png" },
  { title: "Community & Resources", color: "bg-[#1D4ED8]", border: "border-[#1D4ED8]", path: "/images/community.png" },
  { title: "Education", color: "bg-[#DC2626]", border: "border-[#DC2626]", path: "/images/education.png" },
  { title: "Scholarship", color: "bg-[#000000]", border: "border-[#000000]", path: "/images/scholarship.png" },
];

export default function ProgramsSection() {
  return (
    <section className="px-4 py-9">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`border-2 ${program.border} bg-[#FAF9F6] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            {/* Full width colored header */}
            <div className={`${program.color} w-full text-white text-center py-3`}>
              <h3 className="text-2xl font-semibold">{program.title}</h3>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center py-8">
              <Image
                src={program.path}
                alt={program.title}
                width={128} 
                height={80}
                className="object-contain mb-6"
              />

              {/* Learn More */}
              <a
                href="#"
                className="text-gray-700 font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
