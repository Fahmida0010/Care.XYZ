"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUserCheck, FaClock, FaLock, FaHeadset } from "react-icons/fa";

export default function WhyChooseUs() {
  const stats = [
    { value: 5000, label: "Happy Families", icon: <FaUserCheck size={36} /> },
    { value: 98, label: "Satisfaction Rate", suffix: "%", icon: <FaClock size={36} /> },
    { value: 100, label: "Secure Sessions", suffix: "%", icon: <FaLock size={36} /> },
    { value: 24, label: "Support Hours", suffix: "/7", icon: <FaHeadset size={36} /> },
  ];

  const features = [
    {
      title: "Verified Caretakers",
      desc: "Every caretaker passes professional verification, training, and background checks for complete peace of mind.",
    },
    {
      title: "Flexible Booking",
      desc: "Choose any date and time that works for you — with easy modifications and instant confirmations.",
    },
    {
      title: "Secure Payments",
      desc: "All transactions are protected with Stripe encryption — safe, fast, and reliable every time.",
    },
    {
      title: "24/7 Support",
      desc: "Our friendly team is available around the clock via chat, phone, or email whenever you need help.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-6 py-2 bg-purple-100/80 text-purple-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-5">
            Why Thousands Trust Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Choose Our Care Platform
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable care starts with trust — discover what sets us apart for families everywhere.
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Stats Row - Animated Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 text-center"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-purple-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  delay={idx * 0.3}
                  suffix={stat.suffix || "+"}
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Features List - Clean Stacked with Hover */}
        <div className="space-y-10 md:space-y-14 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl border border-purple-100/50 hover:border-purple-300 transition-all duration-300 flex items-start gap-6 md:gap-8"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-inner group-hover:shadow-md transition-shadow">
                  {feature.title.includes("Verified") ? <FaUserCheck size={28} className="text-purple-600" /> :
                   feature.title.includes("Flexible") ? <FaClock size={28} className="text-purple-600" /> :
                   feature.title.includes("Secure") ? <FaLock size={28} className="text-purple-600" /> :
                   <FaHeadset size={28} className="text-purple-600" />}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}