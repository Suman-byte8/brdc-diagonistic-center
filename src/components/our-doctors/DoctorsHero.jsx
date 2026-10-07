import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import heroImg from "@/app/assets/doctors/our-doctor-hero.png";

export default function DoctorsHero() {
  return (
    <>
      <PageHero
        crumb="Our Doctors"
        title="Experienced Professionals Dedicated to Your"
        highlight="Health"
      />
      {/* The banner artwork has text baked in, so it is shown whole rather than faded behind the header */}
      <div className="bg-gradient-to-b from-brdc-offwhite to-white px-6 sm:px-8 lg:px-10 pt-10 sm:pt-14">
        <Reveal className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[1350/500] overflow-hidden rounded-xl border border-brdc-border shadow-[0_20px_50px_-24px_rgba(15,77,58,0.4)]">
            <Image
              src={heroImg}
              alt="Our Doctors Banner"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>
    </>
  );
}
