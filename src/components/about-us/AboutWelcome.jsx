import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { aboutWelcomeData } from "@/app/data/aboutData";

export default function AboutWelcome() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brdc-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="relative">
          <div aria-hidden="true" className="hidden sm:block absolute inset-0 rounded-xl border-2 border-brdc-gold/50 -translate-x-3 translate-y-3"></div>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_20px_50px_-20px_rgba(15,77,58,0.35)]">
            <Image
              src={aboutWelcomeData.imageSrc}
              alt={aboutWelcomeData.title}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">About Us</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-brdc-forest mb-5">
            {aboutWelcomeData.title}
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mb-6"></div>
          <div className="text-sm sm:text-[15px] leading-7 text-brdc-text-secondary space-y-4 text-pretty">
            {aboutWelcomeData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
