"use client";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left - Logo */}
        <Link href="/" className="text-2xl font-semibold text-white ${montserrat.className}">
          Deep Muscle
        </Link>

        {/* Center - Nav Items */}
        <div className="hidden md:flex gap-8 text-white font-medium text-[16px] font-serif">
          <Link href="/shop" className="transition-colors">Shop</Link>
          <Link href="/about" className="transition-colors">About</Link>
          <Link href="/contact" className="transition-colors">Contact</Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-6">
          <Link href="/profile">
            <User className="w-5 h-5 cursor-pointer text-white transition-colors" />
          </Link>
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5x cursor-pointer text-white transition-colors" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
