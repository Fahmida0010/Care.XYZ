"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExpertCaretaker() {
  const [caretakers, setCaretakers] = useState([]);

  useEffect(() => {
    fetch("/api/caretakers")
      .then((res) => res.json())
      .then((data) => setCaretakers(data))
      .catch((err) => console.error("Error fetching caretakers:", err));
  }, []);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-5 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Expert Caretakers
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals ready to provide compassionate and reliable care for your loved ones.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Caretakers Grid */}
        {caretakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {caretakers.map((caretaker) => (
              <div
                key={caretaker._id}
                className="group relative bg-white/70 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100/60 hover:border-purple-300 flex flex-col h-full transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative pt-8 px-8">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={caretaker.image || "/default-avatar.png"}
                      alt={caretaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors mb-2">
                    {caretaker.name}
                  </h3>

                  <p className="text-purple-600 font-medium mb-3 text-sm md:text-base">
                    {caretaker.expertise}
                  </p>

                  <div className="flex items-center justify-center mb-5">
                    <span className="text-yellow-500 text-xl font-bold">
                      ★ {caretaker.rating || "5.0"}
                    </span>
                    <span className="ml-2 text-gray-500 text-sm">
                      ({Math.floor(Math.random() * 200) + 50}+ reviews)
                    </span>
                  </div>

                  <div className="mt-auto space-y-2 text-sm text-gray-600">
                    <p className="flex items-center justify-center">
                      <span className="mr-2">📧</span> {caretaker.email}
                    </p>
                    <p className="flex items-center justify-center">
                      <span className="mr-2">📍</span> {caretaker.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="animate-pulse text-purple-600 text-2xl mb-4">
              Loading expert caretakers...
            </div>
           
          </div>
        )}
      </div>
    </section>
  );
}