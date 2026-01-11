// "use client";

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";

// export default function PaymentSuccess() {
//   const params = useSearchParams();
//   const bookingId = params.get("bookingId");

//   useEffect(() => {
//     if (bookingId) {
//       fetch("/api/bookings/confirm", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ bookingId }),
//       }) 
//       .then((res) => res.json())
//   .then(data=> {
// console.log(data)
// })
      
//     }
//   }, [bookingId]);

//   return (
//     <div className="text-center py-20">
//       <h1 className="text-4xl font-bold
//        text-green-600">
//         Payment Successful 🎉
//       </h1>
//       <p>Your booking has been successfully confirmed.<br/>
// An invoice has been sent to your email.
//       </p>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const bookingId = params.get("bookingId");

  useEffect(() => {
    if (!bookingId) return;

    const confirmAndSave = async () => {
      try {
        // 1️⃣ Confirm booking
        const confirmRes = await fetch("/api/bookings/confirm", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId }),
        });

        const confirmData = await confirmRes.json();
        console.log("Confirm:", confirmData);

        if (!confirmRes.ok) return;

        const booking = confirmData.result?.value || confirmData.result;

        // 2️⃣ Save payment history
        await fetch("/api/payments/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bookingId: booking._id,
            userEmail: booking.email,
            amount: booking.total,
            transactionId: "TXN-" + Date.now(),
            paymentMethod: "Stripe",
          }),
        });

      } catch (error) {
        console.error("Payment Success Error:", error);
      }
    };

    confirmAndSave();
  }, [bookingId]);

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-4 text-lg">
        Your booking has been successfully confirmed.
        <br />
        An invoice has been sent to your email.
      </p>
    </div>
  );
}
