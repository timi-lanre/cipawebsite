"use client"
import { Card } from "flowbite-react";
import { Telescope } from 'lucide-react';

export default function Ourstory() {
  return(
    <section className="w-full  py-10 px-4">
      <div className="w-full flex flex-row items-center justify-center mb-8">
        <Telescope />&nbsp;
        <span className="text-center text-3xl font-bold text-gray-900">Our Story</span>
      </div>
      
      {/* story */}
      <Card className="max-w-6xl mx-auto  border-2 rounded-lg p-6 space-y-3 border-amber-400 ">
        <p className="text-left text-lg italic">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Canadian Immigrant Professional Alliance (CIPA) is a national
        nonprofit created to close systemic gaps faced by immigrant
        professionals. While many newcomer services exist, CIPA addresses the
        critical issue of career-aligned employment, equitable access to
        regulated professions, and a holistic support model grounded in lived
        experience.
        </p>
        <p className="text-left text-lg italic">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CIPA is a celebration of journeys of talent crossing borders, of cultures
        intersecting, of professionals redefining their futures on Canadian soil.
        Its identity is rooted in the lived experiences of immigrant professionals
        from around the world each bringing a piece of the world into Canada’s
        evolving story.
        </p>
      </Card>
</section>

  );
}