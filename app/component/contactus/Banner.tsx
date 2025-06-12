"use client";


export default function Banner() {
 
  return (
    <div className="relative w-full max-w-full h-50 overflow-hidden bg-yellow-200">
    <div
      className={`absolute w-full h-full transition-opacity duration-700`}
    >
      <div className="flex-col absolute inset-0 flex items-center justify-center">
        <h2 className="text-black text-4xl font-bold  px-4 py-2">
          Contact Us
        </h2>
      </div>
    </div>
    </div>
  );
}
