"use client";

import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await fetch("/api/admin/payments");
        if (!res.ok) throw new Error("Failed to fetch payments");
        const data = await res.json();
        setPayments(data || []);
      } catch (error) {
        console.error(error);
        setPayments([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-purple-600 font-semibold">
          Loading payments...
        </p>
      </div>
    );
  }

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6
       text-purple-700">
        💳 Payment History
      </h1>

      {payments.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No payments found.
        </p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block bg-white 
          shadow-lg rounded-lg items-center align-left">
            <table className="w-full text-sm">
              <thead className="bg-purple-600 text-yellow-500">
                <tr>
                  <th className="p-4 text-left">User</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Method</th>
                  <th className="p-4">Transaction</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(p => (
                  <tr
                    key={p._id}
                    className=" hover:bg-gray-50
                     transition-colors"
                  >
                    <td className="p-4">{p.userEmail}</td>
                    <td className="p-4 font-bold text-green-600">
                      ৳ {p.amount}
                    </td>
                    <td className="p-4">{p.paymentMethod}</td>
                    <td className="p-4 text-xs break-words">
                        {p.transactionId}</td>
                    <td className="p-4 text-amber-400">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {payments.map(p => (
              <div
                key={p._id}
                className="bg-white shadow-md rounded-xl p-4 border-l-4 border-purple-600"
              >
                <p className="font-semibold text-purple-700">{p.userEmail}</p>
                <p className="text-green-600 font-bold text-lg">৳ {p.amount}</p>
                <p className="text-sm text-gray-800">Method: {p.paymentMethod}</p>
                <p className="text-xs break-words text-gray-800">
                  TransactionId: {p.transactionId}
                </p>
                <p className="text-xs text-right text-yellow-700 mt-2">
                  {new Date(p.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
