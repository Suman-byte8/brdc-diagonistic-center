import React from 'react'
import Link from 'next/link'
import { CalendarDays, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '@/app/data/contactData'

const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-white to-brdc-offwhite py-14 sm:py-20 px-4 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white shadow-[0_20px_50px_-20px_rgba(15,77,58,0.6)]">
        <div className="px-6 sm:px-12 lg:px-16 py-10 sm:py-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-xl text-transparent bg-clip-text bg-gradient-to-r from-brdc-gold to-[#F8E3A8]">
            Begin Your Medical Journey with BRDC
          </h3>
          <Link href="/book-your-appointment" className="bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark px-8 py-4 rounded-lg font-bold uppercase tracking-wide text-sm hover:from-brdc-gold-dark hover:to-brdc-gold hover:-translate-y-0.5 transition-all flex items-center gap-3 group shrink-0">
            <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.75} />
            Book An Appointment
          </Link>
        </div>

        <div className="border-t border-white/20 px-6 sm:px-12 lg:px-16 py-6 flex flex-col md:flex-row gap-4 md:gap-10 text-sm text-white/90">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-brdc-gold" strokeWidth={1.75} />
            <span>{contactInfo.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 shrink-0 mt-0.5 text-brdc-gold" strokeWidth={1.75} />
            <span className="flex flex-wrap gap-x-5 gap-y-1 font-semibold">
              {contactInfo.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="hover:underline">{phone}</a>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
