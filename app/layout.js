"use client";

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        {/* Loader Screen */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
            <h1 className="text-4xl font-bold text-black tracking-wide">
              Deep Muscle
            </h1>
          </div>
        )}

        {/* Main Website */}
        <div
          className={`transition-opacity duration-700 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
