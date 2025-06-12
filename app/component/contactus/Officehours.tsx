"use client"

export default function Officehours() {
  return (
    <section className="w-full bg-blue-800 py-10 px-4">
  <h2 className="text-center text-3xl font-bold text-white mb-8">Office Hours</h2>

  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row bg-amber-50 rounded-lg overflow-hidden shadow-md border border-amber-200">
      {/* Weekdays */}
      <div className="flex-1 p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Weekdays</h3>
        <p className="text-gray-700">Monday - Friday</p>
        <p className="text-gray-700">9:00 AM - 5:00 PM</p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px bg-amber-400"></div>

      {/* Weekends */}
      <div className="flex-1 p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Weekends</h3>
        <p className="text-gray-700">Saturday</p>
        <p className="text-gray-700">10:00 AM - 2:00 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  </div>
</section>
  );
}