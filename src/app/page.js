import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeatureGrid from "@/components/home/FeatureGrid";
import WhyChoose from "@/components/home/WhyChoose";
import DoctorsPreview from "@/components/home/DoctorsPreview";
import { featuresData } from "@/app/data/homeData";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 text-brdc-text font-sans overflow-x-clip">
      <h1 className="sr-only">Bisweswari Roy Diagnostic &amp; Polyclinic Centre (BRDC), Malda</h1>
      <Hero />
      <WhyChoose />
      <Services />

      <FeatureGrid items={featuresData} />

      <DoctorsPreview />
      <Reviews />
      <FAQ />
      <CTA />
    </div>
  );
}
