import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo/logo.png";
import socialBuzzLogo from "@/app/assets/logo/socialBuzzMedia.png";
import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/app/data/contactData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white/75 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.9fr_1.5fr_1.3fr] gap-12">
        <div>
          <Image 
            src={logo} 
            alt="BRDC Logo" 
            width={120} 
            height={120} 
            className="h-20 w-auto mb-6 object-contain bg-white rounded-lg p-2"
          />
          <p className="text-sm leading-relaxed text-white/70 pr-4">
            Welcome to BRDC Diagnostic Center, where precision meets care to provide you with the most accurate and comprehensive medical diagnostics available.
          </p>
          <div className="flex gap-3 mt-6">
            {contactInfo.socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-brdc-gold hover:text-brdc-dark hover:border-brdc-gold transition-colors">
                {social.type === "facebook" ? (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link href="/" className="hover:text-brdc-gold hover:underline transition-all">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-brdc-gold hover:underline transition-all">About Us</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Our Services</Link></li>
            <li><Link href="/our-doctors" className="hover:text-brdc-gold hover:underline transition-all">Our Doctors</Link></li>
            <li><Link href="/our-tests" className="hover:text-brdc-gold hover:underline transition-all">Our Tests</Link></li>
            <li><Link href="/contact-us" className="hover:text-brdc-gold hover:underline transition-all">Contact Us</Link></li>
            <li><Link href="/book-your-appointment" className="text-brdc-gold font-bold hover:underline transition-all">Book An Appointment</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brdc-gold hover:underline transition-all">Privacy Policy</Link></li>
            <li><a href="https://www.google.com/maps/place/Bisweswari+Roy+Diagnostic+%26+Polyclinic+Centre+(B.R.D.C.)/@24.9989966,88.1335925,17z/data=!4m8!3m7!1s0x39fafdc783945f57:0x9041d50993f3d14e!8m2!3d24.9989966!4d88.1361674!9m1!1b1!16s%2Fg%2F11c30_zmyw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-brdc-gold hover:underline transition-all">Feedback</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Departments</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium">
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Gynecologists</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">General Surgeons</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">General Physicians</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">ENT Surgeons</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Urologists</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Rheumatologists</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Gastroenterologists</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Oncologists</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Pediatricians</Link></li>
            <li><Link href="/services" className="hover:text-brdc-gold hover:underline transition-all">Orthopedic Surgeons</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Get In Touch</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex gap-4 items-center">
              <div className="bg-white/10 p-2 rounded-full text-brdc-gold shrink-0"><MapPin size={18} /></div> 
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-white/10 p-2 rounded-full text-brdc-gold shrink-0"><Phone size={18} /></div> 
              <div className="flex flex-col gap-1 font-semibold text-white">
                {contactInfo.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-brdc-gold hover:text-brdc-gold transition-colors">{phone}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-4 items-center">
              <div className="bg-white/10 p-2 rounded-full text-brdc-gold shrink-0"><Mail size={18} /></div> 
              <a href="mailto:brdc.pc@gmail.com" className="font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-brdc-gold hover:text-brdc-gold transition-colors">brdc.pc@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-white/70">
        <p>© All Rights Reserved BRDC</p>
        <div className="flex items-center gap-3 leading-none">
          <span>Powered by</span>
          <a href="https://socialbuzzmedia.in" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src={socialBuzzLogo} 
              alt="Social Buzz Media" 
              width={100} 
              height={40} 
              className="block h-5 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}