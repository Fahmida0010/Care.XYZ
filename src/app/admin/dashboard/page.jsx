"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex bg-gray-100">
    </div>
  );
}
