import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FeatureSection({ title, desc, imgPos = 'right', primary = false, btnText = "Book An Appointment", imgId, imgSrc }) {
  const imageRight = imgPos === 'right';
  return (
    <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-10">
      <div className={`max-w-7xl mx-auto flex flex-col ${imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
        <Reveal className="flex-[3] w-full">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.125rem] font-bold leading-tight text-brdc-forest mb-5">
            {title}
          </h2>
          <div className="h-1 w-16 bg-brdc-gold rounded-full mb-6"></div>
          <p className="text-brdc-text-secondary leading-relaxed mb-8 text-base sm:text-lg max-w-xl">{desc}</p>
          <Link
            href="/book-your-appointment"
            className={`group inline-flex items-center gap-3 font-bold transition-all ${
              primary
                ? "bg-brdc-gold text-brdc-dark px-7 py-3.5 rounded-lg uppercase tracking-wide text-sm hover:bg-brdc-gold-dark shadow-[0_6px_18px_-6px_rgba(230,180,69,0.8)] hover:-translate-y-0.5"
                : "text-brdc-primary hover:text-brdc-forest underline underline-offset-4 decoration-brdc-primary/30 hover:decoration-brdc-forest"
            }`}
          >
            {btnText} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
          </Link>
        </Reveal>

        <Reveal className="flex-[2] w-full max-w-md lg:max-w-none" delay={100}>
          <div className="relative">
            {/* Offset accent frame */}
            <div
              aria-hidden="true"
              className={`hidden sm:block absolute inset-0 rounded-xl border-2 border-brdc-gold/50 ${imageRight ? 'translate-x-3 translate-y-3' : '-translate-x-3 translate-y-3'}`}
            ></div>
            <div className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-brdc-soft to-brdc-mint shadow-[0_20px_50px_-20px_rgba(6,77,43,0.35)]">
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1024px) 440px, 100vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-brdc-text-secondary font-mono text-sm">
                  {imgId ? `[Image: ${imgId}]` : 'Image Placeholder'}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
