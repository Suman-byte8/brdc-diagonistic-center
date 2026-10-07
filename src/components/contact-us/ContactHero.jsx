import PageHero from "@/components/ui/PageHero";
import heroImg from "@/app/assets/contactUs/contact-us-hero.png";

export default function ContactHero() {
  return (
    <PageHero
      crumb="Contact Us"
      title="Contact"
      highlight="Us"
      image={heroImg}
      imageAlt="Contact Us Banner"
      subtitle="Have questions or need to book an appointment? We are here to help you. Reach out to our medical experts today for precise diagnostics and care."
    />
  );
}
