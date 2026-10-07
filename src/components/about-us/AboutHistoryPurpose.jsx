import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aboutHistoryPurposeData } from "@/app/data/aboutData";

export default function AboutHistoryPurpose() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 grid md:grid-cols-2 gap-6 lg:gap-8">
        {aboutHistoryPurposeData.map((item, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <article className="group h-full flex flex-col bg-gradient-to-br from-white to-brdc-pale rounded-xl overflow-hidden border border-brdc-border shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,77,58,0.35)] transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="block h-px w-10 bg-gradient-to-r from-brdc-gold to-transparent mb-4"></span>
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brdc-forest mb-3">{item.title}</h2>
                <p className="text-sm leading-7 text-brdc-text-secondary">{item.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
