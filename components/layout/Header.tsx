'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Machine & Design', href: '/what-we-do#machine-design' },
  { name: 'Repair & Fabrication', href: '/what-we-do#repair-fabrication' },
  { name: 'Custom Duct Work', href: '/what-we-do#duct-work' },
  { name: 'Powder Coating', href: '/what-we-do#powder-coating' },
  { name: 'Laser Engraving', href: '/what-we-do#laser-engraving' },
  { name: 'Purchase Metal', href: '/what-we-do#purchase-metal' },
  { name: 'Tank Exchange', href: '/what-we-do#tank-exchange' },
  { name: 'Supplies & Accessories', href: '/what-we-do#supplies' },
  { name: 'Sand Blasting', href: '/what-we-do#sand-blasting' },
  { name: 'Portable Welding', href: '/what-we-do#portable-welding' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-accent">Williams</span> Machine Shop
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <Link href="/" className="hover:text-accent transition">
              Home
            </Link>

            {/* What We Do Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="hover:text-accent transition flex items-center">
                What We Do
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" className="hover:text-accent transition">
              Products
            </Link>
            <Link href="/our-work" className="hover:text-accent transition">
              Our Work
            </Link>
            <Link href="/contact" className="hover:text-accent transition">
              Contact Us
            </Link>
            <Link href="/apply" className="hover:text-accent transition bg-accent text-white px-4 py-2 rounded">
              Apply With Us
            </Link>
            <Link href="/about" className="hover:text-accent transition">
              About Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
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
          <nav className="lg:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-accent transition">
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left py-2 hover:text-accent transition flex items-center justify-between"
              >
                What We Do
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm hover:text-accent transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/products" className="block py-2 hover:text-accent transition">
              Products
            </Link>
            <Link href="/our-work" className="block py-2 hover:text-accent transition">
              Our Work
            </Link>
            <Link href="/contact" className="block py-2 hover:text-accent transition">
              Contact Us
            </Link>
            <Link href="/apply" className="block py-2 hover:text-accent transition">
              Apply With Us
            </Link>
            <Link href="/about" className="block py-2 hover:text-accent transition">
              About Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
