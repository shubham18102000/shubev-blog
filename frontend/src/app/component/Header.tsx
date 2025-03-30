"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../../public/assets/1.jpg";

export const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Luxury Cars"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-1" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6 text-white">
        <h1 className="text-3xl font-bold">Shub EV</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          {["Home", "Blog", "About", "Services", "Contact", "Login"].map(
            (item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center text-white">
        <h2 className="text-5xl font-bold mb-4">Welcome to Shub EV</h2>
        <p className="text-xl mb-8">Latest EV news, trends, and insights.</p>

        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold">
          Explore Now
        </button>
      </div>
    </div>
  );
};
