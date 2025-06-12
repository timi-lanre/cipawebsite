"use client";

import { Card, Button } from "flowbite-react";

export default function CipaHeroCard() {
  return (
    <div className="max-w-2xl mx-auto ">
      <Card className="rounded-2xl bg-yellow-300 shadow-md text-center min-h-[300px] sm:min-h-[350px] md:min-h-[370px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-800 uppercase">
          Welcome to CIPA (Canadian Immigrant Professional Association)
        </h1>
        <br></br>
        <p className="text-lg font-semibold text-green-700 mt-4 italic">
          “Breakthrough barriers & Thrive without limits”
        </p>
        <br></br>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="bg-white text-red-600 border border-red-500 hover:bg-red-50"
            pill
          >
            Watch Video
          </Button>
          <Button
            className="bg-white text-blue-600 border border-blue-500 hover:bg-blue-50"
            pill
          >
            Donate Now
          </Button>
        </div>
      </Card>
    </div>
  );
}
