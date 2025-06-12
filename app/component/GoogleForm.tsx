"use client"
import Link from "next/link";
export default function GoogleForm() {
  return (
    <section className="bg-[#14532D] px-4 py-16 flex flex-col items-center">
    {/* Title */}
    <h2 className="text-3xl font-bold text-white mb-10 text-center">
      Apply for Our Programs
      </h2>
      <div className="hover:cursor-pointer flex justify-center bg-white rounded-lg shadow-md p-8 w-auto max-w-2xl">
        {/* Link to Google Form */}
      <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdayYJinzMbRMp4MEvkC8izyDNuNfAKgI-QoYFNOQZgggI0FQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
        >
          <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 hover:cursor-pointer">
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
          <path  clipRule="evenodd"
      fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"/>
          </svg>
          Use Google Form
          </button>
          </Link>
        </div>
      </section>
  );
}