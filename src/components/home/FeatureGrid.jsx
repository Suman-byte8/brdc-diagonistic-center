import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

function FeatureImage({ item, sizes, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-brdc-soft ${className}`}>
      {item.imgSrc ? (
        <Image
          src={item.imgSrc}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes={sizes}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-brdc-text-secondary font-mono text-xs">
          {item.imgId ? `[Image: ${item.imgId}]` : "Image Placeholder"}
        </div>
      )}
    </div>
  );
}

function BookLink({ children }) {
  return (
    <Link
      href="/book-your-appointment"
      className="group/link inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-brdc-primary border-b border-brdc-gold pb-1 hover:text-brdc-gold-dark transition-colors"
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" strokeWidth={2} />
    </Link>
  );
}

// Classy editorial layout: one wide lead feature, then a 2x2 grid of cards.
export default function FeatureGrid({ items }) {
  const [lead, ...rest] = items;

  return (
    <section className="bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite py-14 sm:py-20 px-6 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {lead && (
          <Reveal>
            <article className="group grid lg:grid-cols-2 bg-gradient-to-br from-white to-brdc-pale rounded-xl overflow-hidden border border-brdc-border shadow-[0_12px_40px_-20px_rgba(15,77,58,0.25)]">
              <FeatureImage item={lead} sizes="(min-width: 1024px) 576px, 100vw" className="aspect-[16/10] lg:aspect-auto lg:min-h-[340px]" />
              <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
                <span className="block h-px w-10 bg-gradient-to-r from-brdc-gold to-transparent mb-5"></span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-brdc-forest mb-4">
                  {lead.title}
                </h2>
                <p className="text-sm leading-7 text-brdc-text-secondary mb-7">{lead.desc}</p>
                <div><BookLink>{lead.btnText}</BookLink></div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {rest.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="group h-full flex flex-col bg-gradient-to-br from-white to-brdc-pale rounded-xl overflow-hidden border border-brdc-border shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,77,58,0.35)] transition-all duration-300">
                <FeatureImage item={item} sizes="(min-width: 768px) 480px, 100vw" className="aspect-[16/8]" />
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <span className="block h-px w-8 bg-gradient-to-r from-brdc-gold to-transparent mb-4"></span>
                  <h3 className="font-serif text-lg font-semibold leading-snug text-brdc-forest mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-brdc-text-secondary mb-6 flex-1">{item.desc}</p>
                  <div><BookLink>{item.btnText}</BookLink></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
