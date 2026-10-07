import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/app/data/faqData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-brdc-offwhite via-white to-brdc-pale">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-brdc-forest">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-4">
              {col.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 60}>
                  <details className="faq-item group rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale shadow-[0_6px_24px_-16px_rgba(15,77,58,0.25)] open:shadow-[0_14px_34px_-18px_rgba(15,77,58,0.35)] open:border-brdc-primary/30 transition-shadow">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brdc-primary">
                      <span className="font-serif text-[15px] sm:text-base font-semibold text-brdc-forest leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brdc-soft to-brdc-mint text-brdc-primary flex items-center justify-center group-open:from-brdc-gold group-open:to-[#F3CF7A] group-open:text-brdc-dark transition-colors">
                        <Plus className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" strokeWidth={2} />
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 -mt-1">
                      <p className="text-sm leading-7 text-brdc-text-secondary">{faq.answer}</p>
                      {faq.link && (
                        <Link
                          href={faq.link.href}
                          className="group/link mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brdc-primary border-b border-brdc-gold pb-0.5 hover:text-brdc-gold-dark transition-colors"
                        >
                          {faq.link.label}
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" strokeWidth={2} />
                        </Link>
                      )}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
