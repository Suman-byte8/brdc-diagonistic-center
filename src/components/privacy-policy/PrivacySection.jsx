import { Mail, Phone } from "lucide-react";
import { privacyContent } from "@/app/data/privacyData";

export default function PrivacySection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-br from-white to-brdc-pale rounded-xl border border-brdc-border shadow-[0_20px_50px_-28px_rgba(15,77,58,0.35)] p-6 sm:p-12">
          {/* Header */}
          <div className="border-b border-brdc-border pb-8 mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-brdc-forest mb-4">{privacyContent.title}</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mb-6"></div>
            <p className="text-sm sm:text-[15px] leading-7 text-brdc-text-secondary">
              {privacyContent.intro}
            </p>
          </div>

          {/* Dynamic Sections */}
          <div className="space-y-10">
            {privacyContent.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brdc-forest mb-4 flex items-baseline gap-3">
                  <span className="text-xs font-sans font-bold text-brdc-gold-dark tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="text-sm sm:text-[15px] leading-7 text-brdc-text mb-4">{section.content}</p>
                )}

                {/* Handle Subsections (if any) */}
                {section.subsections?.map((sub, sIdx) => (
                  <div key={sIdx} className="mt-6 pl-5 border-l-2 border-brdc-gold/50">
                    <h3 className="font-serif text-lg font-semibold text-brdc-forest mb-2">
                      {sub.title}
                    </h3>
                    <p className="text-sm leading-7 text-brdc-text mb-3">{sub.content}</p>
                    <ul className="list-disc marker:text-brdc-gold-dark ml-5 space-y-1.5 text-sm leading-7 text-brdc-text-secondary">
                      {sub.list.map((item, iIdx) => (
                        <li key={iIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Handle main section lists */}
                {section.list && !section.subsections && (
                  <ul className="list-disc marker:text-brdc-gold-dark ml-5 space-y-1.5 text-sm leading-7 text-brdc-text-secondary">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="mt-4 text-sm leading-7 text-brdc-text font-medium">{section.footer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-8 rounded-xl bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white p-6 sm:p-10 shadow-[0_20px_50px_-24px_rgba(15,77,58,0.6)]">
          <h2 className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brdc-gold to-[#F8E3A8] mb-3">Contact Us</h2>
          <p className="font-semibold mb-4">{privacyContent.contact.name}</p>
          <div className="space-y-2 text-sm text-white/85">
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brdc-gold" strokeWidth={1.75} />
              <span>Email: <a href={`mailto:${privacyContent.contact.email}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-brdc-gold hover:text-brdc-gold">{privacyContent.contact.email}</a></span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brdc-gold" strokeWidth={1.75} />
              <span>Phone: {privacyContent.contact.phones.join(" / ")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
