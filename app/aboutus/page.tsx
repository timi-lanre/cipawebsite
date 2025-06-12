"use client";
import Banner from "../component/aboutus/Banner";
import Breadcrumb from "../component/aboutus/Breadcrumb";
import Ourstory from "../component/aboutus/Ourstory";
import Jointeam from "../component/aboutus/Jointeam";
import TeamCarousel from "../component/aboutus/TeamCarousel";
import CIPAtripe from "../component/cipatripes";
export default function ContactUs() {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <div>
          <CIPAtripe />
          <Banner />
          <CIPAtripe />
        </div>
      </div>
      <Breadcrumb />
      {/* story */}
      <Ourstory />
      <CIPAtripe />
      {/* team members */}
      <TeamCarousel />
      <CIPAtripe />
      <Jointeam />
    </main>
  );
}
