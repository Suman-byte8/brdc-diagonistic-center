import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ServiceSection({ title, description, items }) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-10">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-brdc-forest">
              {title}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mt-4"></div>
          </div>
          <p className="lg:col-span-7 text-sm sm:text-[15px] leading-7 text-brdc-text-secondary">
            {description}
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((service, idx) => (
            <Reveal as="li" key={idx} delay={(idx % 6) * 50}>
              <div className="group h-full flex items-start gap-3 rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale px-5 py-4 shadow-[0_6px_20px_-12px_rgba(15,77,58,0.2)] hover:-translate-y-1 hover:border-brdc-primary/30 hover:shadow-[0_14px_30px_-14px_rgba(15,77,58,0.3)] transition-all duration-300">
                <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center group-hover:from-brdc-gold group-hover:to-[#F3CF7A] group-hover:text-brdc-dark transition-colors">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold leading-6 text-brdc-forest">{service}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
