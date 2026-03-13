"use client";
import { FaSearch, FaCalendarAlt, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Services",
      desc: "Find the perfect care for your loved ones.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Schedule Date",
      desc: "Pick a date and time that fits your life.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
    {
      icon: <FaCreditCard />,      title: "Secure Booking",
      desc: "Pay the booking fee via Stripe securely.",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      icon: <FaCheckCircle />,
      title: "Relax & Monitor",
      desc: "Track everything from your dashboard.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="py-24 bg-[#fdfeff]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-2">Process</span>
          <h2 className="text-4xl font-black text-gray-900 text-center">How It Works</h2>
          <div className="h-1 w-20 bg-indigo-600 mt-4 rounded-full"></div>
        </div>

        <div className="relative flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between items-start">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center md:w-1/4 group"
            >
              {/* Step Number Circle */}
              <div className={`w-24 h-24 rounded-full flex items-center justify-center border-8 border-white shadow-xl transition-all duration-300 group-hover:scale-110 ${step.bgColor} ${step.color} mb-6`}>
                <span className="text-3xl">{step.icon}</span>
              </div>

              {/* Step Content */}
              <div className="px-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                   {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Marker for Line (Desktop) */}
              <div className="hidden md:block absolute top-[44px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 shadow-sm"></div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
}