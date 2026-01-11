// "use client";

// import { useEffect, useState } from "react";

// export default function TotalCalculator({ serviceId, duration, onTotalChange }) {
//   const [pricePerDay, setpricePerDay] = useState(0);

//   // Fetch pricePerDay from service collection
//   useEffect(() => {
//     if (!serviceId) return;

//     const fetchpricePerDay = async () => {
//       try {
//         const res = await fetch(`/api/services/${serviceId}`);
//         const data = await res.json();

//         // assuming API returns { title, rate }
//         setpricePerDay(data.pricePerDay || 0);
//       } catch (err) {
//         console.error("Failed to fetch rate:", err);
//       }
//     };

//     fetchpricePerDay();
//   }, [serviceId]);

//   // Calculate total
//   useEffect(() => {
//     onTotalChange(duration * pricePerDay);
//   }, [duration, pricePerDay]);

//   return (
//     <p className="mt-4 font-semibold">
//       Total Cost: ৳{pricePerDay ? duration * pricePerDay : 0}
//     </p>
//   );
// }

"use client";

import { useEffect } from "react";

export default function TotalCalculator({ pricePerDay = 0, duration, onTotalChange }) {

  const total = duration * pricePerDay;

  useEffect(() => {
    onTotalChange(total);
  }, [duration, pricePerDay, onTotalChange]);

  return (
    <p className="mt-4 font-semibold">
      Total Cost: ৳{total}
    </p>
  );
}
