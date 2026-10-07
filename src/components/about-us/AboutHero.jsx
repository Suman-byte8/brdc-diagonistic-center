import PageHero from "@/components/ui/PageHero";
import { aboutHeroData } from "@/app/data/aboutData";

export default function AboutHero() {
  return (
    <PageHero
      crumb={aboutHeroData.title}
      title={aboutHeroData.title}
      image={aboutHeroData.imageSrc}
      imageAlt="BRDC Building"
    />
  );
}
