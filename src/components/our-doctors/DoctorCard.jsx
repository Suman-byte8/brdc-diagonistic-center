import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

function initials(name) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function DoctorCard({ name, info, timing, date, href, avatar }) {
  return (
    <article className="group relative h-full flex flex-col rounded-xl border border-brdc-border bg-white overflow-hidden shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 hover:border-brdc-primary/30 hover:shadow-[0_18px_40px_-18px_rgba(15,77,58,0.35)] transition-all duration-300">
      {/* Header band with avatar */}
      <div className="relative h-20 bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary">
        <div aria-hidden="true" className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brdc-gold/15 blur-2xl"></div>
      </div>
      <div className="relative -mt-10 px-6">
        <div className="w-20 h-20 rounded-full ring-4 ring-white shadow-[0_8px_20px_-8px_rgba(15,77,58,0.5)] overflow-hidden bg-gradient-to-br from-brdc-soft to-brdc-mint flex items-center justify-center">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={80}
              height={80}
              sizes="80px"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <span aria-hidden="true" className="font-serif text-2xl font-bold text-brdc-primary">
              {initials(name)}
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-4 pb-6">
        <h4 className="font-serif text-lg font-semibold leading-snug text-brdc-forest mb-1.5">
          {name}
        </h4>
        <p className="text-sm leading-6 text-brdc-text-secondary">{info}</p>

        {(date || timing) && (
          <div className="mt-4 space-y-2 rounded-lg bg-brdc-pale border border-brdc-border/70 px-3.5 py-3">
            {date && (
              <p className="flex items-start gap-2 text-[13px] font-semibold text-brdc-primary">
                <CalendarDays className="w-4 h-4 shrink-0 mt-0.5 text-brdc-gold-dark" strokeWidth={1.75} />
                <span>Date: {date}</span>
              </p>
            )}
            {timing && (
              <p className="flex items-start gap-2 text-[13px] font-medium text-brdc-primary">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-brdc-gold-dark" strokeWidth={1.75} />
                <span>{timing}</span>
              </p>
            )}
          </div>
        )}

        {href && (
          <div className="mt-auto pt-5">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-brdc-primary border-b border-brdc-gold pb-1 hover:text-brdc-gold-dark transition-colors after:absolute after:inset-0"
            >
              View Profile
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
