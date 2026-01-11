"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const menu = [
    { name: "Payment History", path: "/admin/dashboard/payments" },
  ];

  return (
    <div className="min-h-screen flex
     bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-200
       text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold
        text-green-500">Dashboard</h1>

        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block p-3 rounded-lg ${
              pathname === item.path
                ? "bg-purple-600"
                : "hover:bg-purple-900"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
