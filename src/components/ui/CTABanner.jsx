import Link from "next/link";
import { CalendarDays } from "lucide-react";

// Shared dark green appointment banner used at the bottom of inner pages.
export default function CTABanner({ title, label = "Book An Appointment", className = "" }) {
  return (
    <section className={`px-4 sm:px-8 lg:px-10 py-14 sm:py-20 bg-gradient-to-b from-white to-brdc-offwhite ${className}`}>
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white shadow-[0_20px_50px_-20px_rgba(15,77,58,0.6)]">
        <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brdc-gold/10 blur-2xl"></div>
        <div className="relative px-6 sm:px-12 lg:px-16 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-brdc-gold to-[#F8E3A8]">
            {title}
          </h3>
          <Link
            href="/book-your-appointment"
            className="group shrink-0 inline-flex items-center gap-3 bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark px-8 py-4 rounded-lg font-bold uppercase tracking-wide text-sm hover:from-brdc-gold-dark hover:to-brdc-gold hover:-translate-y-0.5 transition-all"
          >
            <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.75} />
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
