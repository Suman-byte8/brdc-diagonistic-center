"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo/logo.png';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/app/data/contactData';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const rawPathname = usePathname();
  // trailingSlash is enabled, so normalise before comparing with nav hrefs
  const pathname = rawPathname.length > 1 ? rawPathname.replace(/\/$/, '') : rawPathname;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Our Services', href: '/services' },
    { name: 'Our Doctors', href: '/our-doctors' },
    { name: 'Our Tests', href: '/our-tests' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
    <div className="hidden md:block bg-gradient-to-r from-brdc-dark via-brdc-forest to-brdc-secondary text-white text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-10 gap-6">
        <div className="flex items-center gap-6 min-w-0">
          <a href={`tel:${contactInfo.phones[0].replace(/[^\d+]/g, '')}`} className="flex items-center gap-2 hover:text-brdc-gold transition-colors whitespace-nowrap">
            <Phone size={13} /> {contactInfo.phones[0]}
          </a>
          <a href="mailto:brdc.pc@gmail.com" className="flex items-center gap-2 hover:text-brdc-gold transition-colors whitespace-nowrap">
            <Mail size={13} /> brdc.pc@gmail.com
          </a>
          <span className="hidden lg:flex items-center gap-2 truncate">
            <MapPin size={13} className="shrink-0" /> <span className="truncate">{contactInfo.address}</span>
          </span>
        </div>
        <Link href="/book-your-appointment" className="self-stretch flex items-center px-5 bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark font-bold uppercase tracking-wide hover:from-brdc-gold-dark hover:to-brdc-gold transition-colors whitespace-nowrap">
          Book An Appointment
        </Link>
      </div>
    </div>
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brdc-border/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <Image 
                src={logo} 
                alt="BRDC Logo" 
                width={90} 
                height={90} 
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 lg:gap-6 text-[13px] font-semibold uppercase tracking-wide text-brdc-text">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-2 lg:px-1 py-2 transition-colors duration-300 after:absolute after:left-1 after:-bottom-0.5 after:h-0.5 after:bg-brdc-primary after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-brdc-primary after:w-6'
                      : 'hover:text-brdc-primary after:w-0 hover:after:w-6'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brdc-text hover:text-brdc-primary focus:outline-none p-2 bg-brdc-soft rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-brdc-border/50 animate-in slide-in-from-top-2 duration-300 shadow-xl absolute w-full">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-4 text-base font-semibold rounded-2xl transition-colors ${
                    isActive
                      ? 'bg-brdc-pale text-brdc-primary'
                      : 'text-brdc-text hover:text-brdc-primary hover:bg-brdc-soft'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/book-your-appointment"
              className="block mt-6 px-4 py-4 text-center text-base font-bold bg-brdc-primary text-white rounded-2xl hover:bg-brdc-forest transition-colors shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}