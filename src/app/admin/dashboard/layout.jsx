"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdPayment } from "react-icons/md";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const menu = [
    {
      name: "Payment History",
      path: "/admin/dashboard/payments",
      icon: <MdPayment className="text-xl" />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold text-green-500">Dashboard</h1>

        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg text-pink-400 ${
              pathname === item.path
                ? "bg-gray-600 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}