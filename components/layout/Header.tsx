'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Machine & Design', href: '/what-we-do#machine-design', icon: '⚙️' },
  { name: 'Repair & Fabrication', href: '/what-we-do#repair-fabrication', icon: '🔧' },
  { name: 'Custom Duct Work', href: '/what-we-do#duct-work', icon: '🏭' },
  { name: 'Powder Coating', href: '/what-we-do#powder-coating', icon: '🎨' },
  { name: 'Laser Engraving', href: '/what-we-do#laser-engraving', icon: '✨' },
  { name: 'Purchase Metal', href: '/what-we-do#purchase-metal', icon: '🏗️' },
  { name: 'Tank Exchange', href: '/what-we-do#tank-exchange', icon: '⛽' },
  { name: 'Supplies & Accessories', href: '/what-we-do#supplies', icon: '🛠️' },
  { name: 'Sand Blasting', href: '/what-we-do#sand-blasting', icon: '💨' },
  { name: 'Portable Welding', href: '/what-we-do#portable-welding', icon: '🔥' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg p-1.5 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <img
                src="/images/williams-logo.jpg"
                alt="Williams Machine Shop Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-white">
              <span className="text-gradient-accent">Williams</span> <span className="hidden sm:inline">Machine Shop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Home
            </Link>

            {/* What We Do Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium flex items-center gap-1">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
                  <div className="p-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 group/item"
                      >
                        <span className="text-2xl group-hover/item:scale-110 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/our-work"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
            >
              Contact
            </Link>
            <Link
              href="/apply"
              className="ml-1 px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-accent to-secondary"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 glass-dark rounded-2xl p-4 space-y-1 animate-fade-in-up">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/our-work"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/apply"
              className="block px-4 py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-accent to-secondary shadow-lg mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
