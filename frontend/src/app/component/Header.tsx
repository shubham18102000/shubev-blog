"use client";
import { useState } from "react";
import Image from "next/image";
import backgroundImage  from "../../../public/assets/1.jpg";

// Landing Page Component
export const HeroSection = () => (
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
     
      <div className="hidden md:flex gap-8">
        {['Home', 'Blog','About', 'Services','Contact' ,'Login'].map((item) => (
          <a key={item} href="#" className="hover:text-gray-300">{item}</a>
        ))}
      </div>
    </nav>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center text-white">
      <h2 className="text-5xl font-bold mb-4">Welcome to Shub EV</h2>
      <p className="text-xl mb-8">Coming soon</p>
      {/* <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold">
        Explore Now
      </button> */}
    </div>
  </div>
);

// Search Page Component
export const SearchInterface = () => {
  const [filters, setFilters] = useState({
    status: '',
    make: '',
    model: '',
    price: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shub EV</h1>
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'Explore', 'Listings', 'Blog', 'Shop', 'Pages'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
            ))}
            <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              + Add Listing
            </button>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Next Match</h2>
          <p className="text-gray-600">Find the right price, dealer and advice.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select 
              className="p-3 border rounded-lg"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option>All Status</option>
              <option>Used Cars</option>
              <option>New Cars</option>
            </select>

            <select 
              className="p-3 border rounded-lg"
              value={filters.make}
              onChange={(e) => setFilters({...filters, make: e.target.value})}
            >
              <option>Select Makes</option>
              {/* Add actual car makes here */}
            </select>

            <select 
              className="p-3 border rounded-lg"
              value={filters.model}
              onChange={(e) => setFilters({...filters, model: e.target.value})}
            >
              <option>Select Models</option>
              {/* Add actual car models here */}
            </select>

            <select 
              className="p-3 border rounded-lg"
              value={filters.price}
              onChange={(e) => setFilters({...filters, price: e.target.value})}
            >
              <option>All Price</option>
              {/* Add price ranges here */}
            </select>
          </div>

          <button className="mt-6 w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

  