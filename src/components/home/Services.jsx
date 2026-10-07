import { Stethoscope, Microscope, Pill } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  const services = [
    {
      title: "OPD Services",
      desc: "BR Multispecialty Clinic in BRDC is designed to provide patients with access to medical consultations, diagnostic tests, and treatment for a range of medical conditions. Our clinic is staffed by experienced doctors and healthcare professionals who work together to provide comprehensive, convenient, and cost-effective care.",
      icon: Stethoscope,
    },
    {
      title: "Diagnostic Services",
      desc: "We offer a comprehensive range of diagnostic services using state-of-the-art technology. Our qualified specialists provide accurate and timely results, interpreting tests to deliver precise diagnoses in a comfortable environment, empowering patients to make informed health decisions.",
      icon: Microscope,
    },
    {
      title: "Medicine Services",
      desc: "Our fully-stocked on-site medicine store provides the convenience of purchasing medications immediately after your consultation. We offer a wide range of prescription and over-the-counter drugs, with knowledgeable pharmacists available to provide expert guidance.",
      icon: Pill,
    },
  ];

  return (
    <section id="services" className="pt-16 sm:pt-24 pb-10 sm:pb-14 bg-gradient-to-b from-white to-brdc-offwhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">Services</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-brdc-forest mb-5">
            Services We Offer
          </h2>
          <p className="text-brdc-text-secondary text-lg leading-relaxed">
            Providing comprehensive healthcare solutions with precision, care, and convenience for all our patients.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={index * 80}>
                <article className="group h-full bg-gradient-to-br from-white to-brdc-pale rounded-xl border border-brdc-border p-7 text-center shadow-[0_8px_30px_-12px_rgba(15,77,58,0.18)] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(15,77,58,0.28)] transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-brdc-soft to-brdc-mint text-brdc-primary flex items-center justify-center group-hover:from-brdc-primary group-hover:to-brdc-secondary group-hover:text-brdc-gold transition-colors duration-300">
                    <Icon className="w-8 h-8" strokeWidth={1.25} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brdc-forest mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brdc-text-secondary leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
