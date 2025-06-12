"use client";

import { useState, useEffect } from "react";
import { User, CircleUser, UserRound, SquareUser,CircleChevronLeft ,CircleChevronRight    } from "lucide-react";

const iconComponents: Record<string, React.ElementType> = {
  User,
  CircleUser,
  UserRound,
  SquareUser,
};

const teamMembers = [
  { name: "Team member 1", color: "bg-yellow-300", icon: "User" },
  { name: "Team member 2", color: "bg-blue-300", icon: "UserRound" },
  { name: "Team member 3", color: "bg-gray-300", icon: "SquareUser" },
  { name: "Team member 4", color: "bg-yellow-300", icon: "User" },
  { name: "Team member 5", color: "bg-purple-300", icon: "UserRound" },
  { name: "Team member 6", color: "bg-orange-300", icon: "SquareUser" },
];

export default function TeamCarousel() {
  const [current, setCurrent] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % teamMembers.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDisplayMembers = () => {
    if (isLargeScreen) {
      // Large screen - show 3 members
      const prevIndex = (current - 1 + teamMembers.length) % teamMembers.length;
      const nextIndex = (current + 1) % teamMembers.length;
      return [teamMembers[prevIndex], teamMembers[current], teamMembers[nextIndex]];
    } else {
      // medium ans small screen - only show 1 member
      return [teamMembers[current]];
    }
  };

  const displayedMembers = getDisplayMembers();

  return (
    <section className="w-full py-10 bg-blend-lighten">
      <h2 className="text-center text-3xl font-bold text-red-600 mb-8">
        Our Team
      </h2>

      <div className="relative flex items-center justify-center gap-6">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2  hover:bg-yellow-400 p-6 rounded-full z-10 mb-5"
        >
         <CircleChevronLeft  className="w-14 h-14" />
        </button>

        {/* Members */}
        <div className="flex gap-6 items-center">
          {displayedMembers.map((member, index) => {
            const IconComponent = iconComponents[member.icon];
            return (
              <div
                key={index}
                className={`flex flex-col items-center transition-transform duration-300 ${
                  index === 1 && isLargeScreen ? "scale-110" : "scale-70"
                }`}
              >
                {/* Circle with dynamic background */}
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full ${member.color}`}
                >
                  {IconComponent && (
                    <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-gray-700" />
                  )}
                </div>

                {/* Yellow Label */}
                <div
                  className={`${member.color} mt-4 px-4 py-2 transform -skew-x-6`}
                >
                  <span className="block transform skew-x-6 font-semibold text-sm">
                    {member.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 hover:bg-yellow-400 p-6 rounded-full z-10 mb-5"
        >
         <CircleChevronRight  className="w-14 h-14" />
        </button>
      </div>
    </section>
  );
}
