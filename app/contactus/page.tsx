"use client";
import Banner from "../component/contactus/Banner";
import Breadcrumb from "../component/contactus/Breadcrumb";
import Contactform from "../component/contactus/Contactform";
import FindUs from "../component/contactus/FindUs";
import Officehours from "../component/contactus/Officehours";
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
      {/* get in touch */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold p-5 text-3xl">Get In Touch</h2>
        <h4 className="p-5">
          We would love to hear from you. Please fill out the form below or reach
          out directly.
        </h4>
      </div>
      {/* Contact form */}
      <Contactform />
      {/* Find us */}
      <CIPAtripe />
      <FindUs />
      <CIPAtripe />
      <Officehours />
      <CIPAtripe />
    </main>
  );
}
