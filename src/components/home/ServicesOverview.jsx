"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServicesOverview() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const babyCare = services.filter((s) => s.category === "Baby Care");
  const elderlyCare = services.filter((s) => s.category === "Elderly Care");
  const sickCare = services.filter(
    (s) => s.category === "Special Care" || s.category === "Sick Care"
  );

  return (
    <section className="max-w-7xl mx-auto p-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-12
       text-pink-800">
        Our Care Services
      </h2>
      <ServiceGroup title="👶 Baby Care
      " theme="blue " services={babyCare} />
      <ServiceGroup title="🧓 Elderly Care" theme="green" services={elderlyCare} />
      <ServiceGroup
        title="🏥 Sick People Care"
        theme="red"
        services={sickCare}
      />
    </section>
  );
}

function ServiceGroup({ title,services, theme = "blue" }) {
  const themes = {
    blue: {
      sectionBg: "bg-blue-50",
      cardBg: "bg-white",
      border: "border-blue-300",
      hoverBorder: "hover:border-blue-500",
      title: "text-blue-800",
      price: "text-blue-700",
      link: "text-blue-600 hover:text-blue-800",
      shadow: "hover:shadow-blue-200",
    },
    green: {
      sectionBg: "bg-green-50",
      cardBg: "bg-white",
      border: "border-green-300",
      hoverBorder: "hover:border-green-500",
      title: "text-green-800",
      price: "text-green-700",
      link: "text-green-600 hover:text-green-800",
      shadow: "hover:shadow-green-200",
    },
    red: {
      sectionBg: "bg-red-50",
      cardBg: "bg-white",
      border: "border-red-300",
      hoverBorder: "hover:border-red-500",
      title: "text-red-800",
      price: "text-red-700",
      link: "text-red-600 hover:text-red-800",
      shadow: "hover:shadow-red-200",
    },
  };

  const style = themes[theme] || themes.blue;

  return (
    <div className={`mb-16 rounded-2xl p-8 ${style.sectionBg}`}>
      <h3 className={`text-3xl font-bold mb-8 ${style.title}`}>{title}</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {services.length > 0 ? (
          services.slice(0, 3).map((service) => (
            <div
              key={service._id}
              className={`rounded-2xl overflow-hidden border-2 ${style.border} ${style.cardBg} shadow-lg ${style.hoverBorder} transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description.slice(0, 100)}...
                </p>

                <p className={`text-2xl font-bold mb-4 ${style.price}`}>
                  ৳{service.pricePerDay} <span className="text-sm font-normal">/ day</span>
                </p>

                <Link
  href={`/services/${service.id || service._id}`}
                  className={`inline-block font-semibold btn ${style.link} transition hover:underline`}
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10 text-lg">
            এই ক্যাটাগরিতে এখনো কোনো সার্ভিস যোগ করা হয়নি।
          </p>
        )}
      </div>
    </div>
  );
}