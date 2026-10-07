import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import heroImg from "@/app/assets/services/our-services.png";

export default function ServicesHero() {
  return (
    <>
      <PageHero
        crumb="Our Services"
        title="Our"
        highlight="Services"
        image={heroImg}
        imageAlt="Medical Equipment"
      />
      <div className="bg-gradient-to-b from-brdc-offwhite to-white px-6 sm:px-8 lg:px-10 pt-14 sm:pt-20">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">Services</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-brdc-forest">
            Comprehensive Diagnostics: Precise Results, Complete Support
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mt-6 mx-auto"></div>
        </Reveal>
      </div>
    </>
  );
}
