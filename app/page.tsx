"use client";
import CustomCarousel from "./component/CustomCarousel";
import MissionSection from "./component/MissionSection";
import ProgramsSection from "./component/ProgramsSection";
import CoachingSection from "./component/CoachingSection";
import ImpactPartnersSection from "./component/ImpactPartnersSection";
import CIPAtripe from "./component/cipatripes";
import GoogleForm from "./component/GoogleForm";
export default function Home() {
  return (
    <main>
      {/* main banner */}
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div>
          <CIPAtripe />
          <CustomCarousel />
          <CIPAtripe />
        </div>
      </div>

      {/* Mission area */}
      <MissionSection />

      {/* program area */}
      <ProgramsSection />
      <CIPAtripe />

      {/* coaching area */}
      <CoachingSection />
      <CIPAtripe />

      {/* partners area */}
      <ImpactPartnersSection />
      <CIPAtripe />

      {/* apply area  */}
      {/* <ApplyProgramsSection /> */}
      <GoogleForm />
      <CIPAtripe />
    </main>
  );
}
