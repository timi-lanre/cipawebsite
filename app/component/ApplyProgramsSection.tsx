"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
export default function ApplyProgramsSection() {
  return (
    <section className="bg-[#14532D] px-4 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Apply for Our Programs
      </h2>

      {/* White Card */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <form className="flex flex-col gap-4">
          {/* volunteer role */}
          <div>
          <button id="dropdownRadioBgHoverButton" data-dropdown-toggle="dropdownRadioBgHover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown radio <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            {/*  Dropdown menu */}
            <div id="dropdownRadioBgHover" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                  <li>
                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="default-radio-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Default radio</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input checked id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="default-radio-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Checked state</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                        <label htmlFor="default-radio-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Default radio</label>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
          {/* Full Name */}
          <div>
            <Label htmlFor="full-name">Full Name</Label>
            <TextInput id="full-name" type="text" required />
          </div>

          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <TextInput id="email" type="email" required />
          </div>

          {/* Program of Interest */}
          <div>
              <Label htmlFor="Interest">Interest</Label>
            <TextInput id="Interest" type="text" required />
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} />
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300"
      >
        Submit Application
      </Button>
    </section>
  );
}
