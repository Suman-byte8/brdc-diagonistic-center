import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CalendarDays, Clock, MapPin, ArrowDown, BadgeCheck } from "lucide-react";

export default function DoctorProfileHero({ doctor }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white">
      <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brdc-gold/10 blur-3xl"></div>
      <div aria-hidden="true" className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 pb-14 sm:pt-12 sm:pb-20">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brdc-gold">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} /></li>
            <li><Link href="/our-doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} /></li>
            <li aria-current="page" className="text-white/80">{doctor.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-8 lg:gap-14 items-center">
          {/* Portrait */}
          <div className="relative mx-auto md:mx-0 w-56 sm:w-64 md:w-full">
            <div aria-hidden="true" className="absolute inset-0 rounded-xl border-2 border-brdc-gold/60 translate-x-3 translate-y-3"></div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brdc-soft shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
              <Image
                src={doctor.avatar}
                alt={doctor.name}
                fill
                priority
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 256px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Details */}
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold mb-3">{doctor.specialty}</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight inline-flex flex-wrap items-center justify-center md:justify-start gap-3">
              {doctor.displayName}
              <BadgeCheck className="w-7 h-7 text-brdc-gold shrink-0" strokeWidth={1.75} aria-label="Medical Registration Verified" />
            </h1>
            <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mt-5 mb-6 mx-auto md:mx-0"></div>

            {/* Credentials */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {doctor.credentials.map((c, idx) => (
                <span
                  key={idx}
                  className={
                    c.type === "highlight"
                      ? "px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark"
                      : "px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white"
                  }
                >
                  {c.name}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-8 text-sm text-white/85">
              {doctor.metaItems.map((m, idx) => (
                <span key={idx} className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-brdc-gold text-xl leading-none">{m.icon}</span>
                  {m.text}
                </span>
              ))}
            </div>

            {/* Quick appointment info */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8 text-left">
              <div className="rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-3">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brdc-gold mb-1">
                  <CalendarDays className="w-3.5 h-3.5" strokeWidth={2} /> Date
                </p>
                <p className="text-sm font-semibold">{doctor.appointment.displayDate}</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-3">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brdc-gold mb-1">
                  <Clock className="w-3.5 h-3.5" strokeWidth={2} /> Timing
                </p>
                <p className="text-sm font-semibold">{doctor.appointment.time}</p>
              </div>
              <div className="rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-3">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-brdc-gold mb-1">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2} /> {doctor.hospital}
                </p>
                <p className="text-sm font-semibold">{doctor.location.city}</p>
              </div>
            </div>

            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark px-7 py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm hover:from-brdc-gold-dark hover:to-brdc-gold hover:-translate-y-0.5 transition-all shadow-[0_10px_24px_-10px_rgba(230,180,69,0.9)]"
            >
              Book An Appointment
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" strokeWidth={2.25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
