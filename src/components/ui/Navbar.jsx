"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Doctors', href: '/our-doctors' },
    { name: 'Our Tests', href: '/our-tests' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo} 
                alt="BRDC Logo" 
                width={80} 
                height={80} 
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-green-600 transition"
              >
                {link.name}
              </Link>
            ))}
           
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/book-your-appointment">
              <button suppressHydrationWarning className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition shadow-lg whitespace-nowrap">
                Book An Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/book-your-appointment"
              className="block px-3 py-3 text-base font-bold text-green-600 hover:bg-green-600 hover:text-white rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}