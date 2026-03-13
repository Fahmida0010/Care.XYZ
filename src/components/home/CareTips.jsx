"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CareTipsTimeline() {
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);

  useEffect(() => {
    fetch("/api/tips")
      .then((res) => res.json())
      .then(setTips)
      .catch(console.error);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-rose-50 via-pink-50/50 to-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium mb-4">
            Beauty & Self-Care Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Helpful Care Tips
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
           Small tips to make your daily routine even better.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-rose-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 transform md:-translate-x-1/2"></div>

          {tips.map((tip, index) => (
            <motion.div
              key={tip._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-16 md:mb-20 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end md:flex-row-reverse"
              }`}
            >
              {/* Circle number / dot */}
              <div className="flex-shrink-0 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border-4 border-pink-300 flex items-center justify-center text-xl md:text-2xl font-bold text-pink-700">
                {index + 1}
              </div>

              {/* Content box */}
              <div
                onClick={() => setSelectedTip(tip)}
                className={`flex-1 cursor-pointer bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-md hover:shadow-2xl border border-pink-100 hover:border-pink-300 transition-all duration-300 group max-w-xl ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-pink-700 transition-colors mb-3 line-clamp-2">
                  {tip.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-4 md:line-clamp-3 text-[15px] md:text-base">
                  {tip.content}
                </p>

                <div className="mt-4 opacity-70 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all inline-flex items-center text-pink-600 font-medium text-sm">
                  Read more <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - same as before but refreshed */}
      <AnimatePresence>
        {selectedTip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTip(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTip(null)}
                className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-700 hover:text-pink-900 transition text-2xl shadow-sm"
              >
                ✕
              </button>

              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-10">
                  {selectedTip.title}
                </h3>

                <div className="prose prose-pink prose-headings:text-gray-800 max-w-none text-gray-700 leading-relaxed text-base">
                  {selectedTip.content.split("\n").map((line, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}