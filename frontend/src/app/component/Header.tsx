"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronRight, Battery, Zap, Car } from "lucide-react"
import background from "../../../public/assets/1.jpg"

export const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src= {background}
          alt="Electric Vehicle"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-1" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-green-500" />
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Shub<span className="text-green-500">EV</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {["Home", "News", "Reviews", "Charging", "About", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors font-medium"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors font-medium"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/95 z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {["Home", "News", "Reviews", "Charging", "About", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-green-400 py-4 text-xl border-b border-gray-800 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <ChevronRight className="h-5 w-5 text-green-500" />
            </Link>
          ))}
          <Link
            href="/login"
            className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition-colors font-medium text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-screen text-center text-white">
        <div className="max-w-3xl">
          <div className="flex justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
              <Battery className="h-4 w-4" /> Future of Mobility
            </span>
            <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
              <Car className="h-4 w-4" /> EV Insights
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Electrify Your Journey With <span className="text-green-500">Shub</span>
            <span className="text-blue-500">EV</span>
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Stay charged with the latest electric vehicle news, reviews, and sustainable mobility trends from around the
            world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/latest-news"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105"
            >
              Explore Latest News
            </Link>
            <Link
              href="/ev-reviews"
              className="bg-transparent border-2 border-white hover:border-green-500 hover:text-green-500 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              EV Reviews
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/30 backdrop-blur-md rounded-xl p-4 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "EV Models Reviewed" },
                { value: "10K+", label: "Charging Stations" },
                { value: "24/7", label: "Latest Updates" },
                { value: "50K+", label: "Community Members" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-2">
                  <div className="text-xl md:text-2xl font-bold text-green-500">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


