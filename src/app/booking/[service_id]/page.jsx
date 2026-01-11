"use client";

import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import DurationSelector from "@/components/booking/DurationSelector";
import LocationSelector from "@/components/booking/LocationSelector";
import TotalCalculator from "@/components/booking/TotalCalculator";

export default function BookingPage() {
  const { data: session, status } = useSession();
  const { service_id } = useParams();

  const [service, setService] = useState(null);
  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  /* 🔹 Fetch service by ID */
  useEffect(() => {
    if (!service_id) return;

    const loadService = async () => {
      try {
        const res = await fetch(`/api/services/${service_id}`);
        const data = await res.json();
        setService(data);
      } catch (err) {
        console.error("Service load failed", err);
      }
    };

    loadService();
  }, [service_id]);

  if (status === "loading") return <p className="text-center">Loading...</p>;
  if (!session) redirect("/login");

  /* 🔹 Confirm Booking */
  const handleConfirm = async () => {
    if (!service) return alert("Service loading...");
    if (Object.keys(location).length === 0)
      return alert("Please select location");

    setLoading(true);

    try {
      const bookingRes = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: service_id,
          serviceTitle: service.title,
          pricePerDay: service.pricePerDay,
          duration,
          location,
          total,
          email: session.user.email,
        }),
      });

      const bookingData = await bookingRes.json();

      const stripeRes = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: bookingData.insertedId,
          total,
        }),
      });

      const stripeData = await stripeRes.json();
      window.location.href = stripeData.url;
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white rounded-xl shadow-lg">

      {/* 🔹 Service Info (like Service Details page) */}
      {service && (
        <div className="mb-6 text-center space-y-2">
          <h1 className="text-2xl font-bold text-pink-700">
        Book: {service.title}
          </h1>

          <p className="text-lg text-green-600 font-semibold">
            ৳ {service.pricePerDay} / day
          </p>
        </div>
      )}

      {/* 🔹 Duration */}
      <DurationSelector value={duration} onChange={setDuration} />

      {/* 🔹 Location */}
      <LocationSelector onChange={setLocation} />

      {/* 🔹 Total */}
     <TotalCalculator
  pricePerDay={service?.pricePerDay}
  duration={duration}
  onTotalChange={setTotal}
/>


      {/* 🔹 Confirm */}
      <button
        onClick={handleConfirm}
        disabled={loading}
        className="w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl"
      >
        {loading ? "Processing..." : "Confirm Booking & Pay"}
      </button>
    </div>
  );
}

