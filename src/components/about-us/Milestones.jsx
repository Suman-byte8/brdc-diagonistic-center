import Reveal from "@/components/ui/Reveal";
import { milestonesData } from "@/app/data/aboutData";

export default function Milestones() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">Milestones</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-brdc-forest">
            Milestones Achieved By Us
          </h2>
        </Reveal>

        <ol className="relative grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Timeline rail */}
          <span aria-hidden="true" className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brdc-gold to-transparent"></span>
          <span aria-hidden="true" className="md:hidden absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-brdc-gold via-brdc-gold/60 to-transparent"></span>

          {milestonesData.map((item, idx) => (
            <Reveal as="li" key={idx} delay={idx * 120} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
              <span className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center text-xl shadow-[0_8px_20px_-8px_rgba(15,77,58,0.6)] ring-4 ring-white md:mb-6">
                {item.icon}
              </span>
              <div className="flex-1 md:w-full bg-gradient-to-br from-white to-brdc-pale rounded-xl border border-brdc-border p-6 shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:-translate-y-1 transition-transform duration-300">
                <p className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brdc-gold-dark to-brdc-gold mb-2">
                  {item.year}
                </p>
                <p className="text-sm leading-7 text-brdc-text-secondary italic">&quot;{item.text}&quot;</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
