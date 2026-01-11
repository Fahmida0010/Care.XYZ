"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function MyBookingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Private Route
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch bookings
  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/my-bookings")
        .then(res => res.json())
        .then(data => {
          setBookings(data);
          setLoading(false);
        });
    }
  }, [status]);

  const handleCancel = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This booking will be cancelled!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, cancel it!",
    cancelButtonText: "No"
  });

  if (!result.isConfirmed) return;

  const res = await fetch("/api/bookings/cancel", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookingId: id })
  });

   console.log("res", res)
  if (res.ok) {
    setBookings(prev =>
      prev.map(b =>
        b._id === id ? { ...b, status: "Cancelled" } : b
      )
    );

    Swal.fire({
      icon: "success",
      title: "Cancelled!",
      text: "Your booking has been cancelled.",
      timer: 2000,
      showConfirmButton: false
    });
  }
};


  if (loading) {
    return <p className="text-center mt-10 text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">
          No bookings found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="rounded-xl p-6 shadow-md
               bg-purple-200 "
            >
              <h2 className="text-2xl 
              font-bold text-pink-600
               mb-2">
               {booking.serviceTitle}
              </h2>

              <p className="mt-2"><b>Duration:</b> 
              {booking.duration} days</p>

              <p className="mt-2">
                <b>Location:</b>{" "}
                {booking.location?.area}, {booking.location?.city},{" "}
                {booking.location?.district}, {booking.location?.division}
              </p>

              <p className="mt-2">
                <b>Total Cost:</b> ৳{booking.total}
              </p>

              <p className="mt-2">
                <b>Status:</b>{" "}
                <span
                  className={`font-semibold  ${
                    booking.status === "Pending"
                      ? "text-yellow-600"
                      : booking.status === "Confirmed"
                      ? "text-green-600"
                      : booking.status === "Cancelled"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {booking.status}
                </span>
              </p>

              <div className="flex gap-4 mt-5">
                <button
                  onClick={() =>
    router.push(`/my-bookings/${booking._id}`)
                  }
                  className="p-4 mt-2 bg-blue-500
                  hover:bg-blue-700
                   text-white rounded-lg"
                >
                  View Details
                </button>

                {booking.status === "Pending" && (
                  <button
                    onClick={() => handleCancel(booking._id)}
                    className="p-4 mt-2 bg-red-500
                    hover:bg-red-700
                   text-white rounded-lg"       >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

