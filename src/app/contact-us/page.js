import ContactHero from "@/components/contact-us/ContactHero";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactInfo from "@/components/contact-us/ContactInfo";
import MapSection from "@/components/contact-us/MapSection";

export const metadata = {
  title: "Contact Us & Find Location",
  description: "Get in touch with BRDC Malda. Find our phone numbers, location on Google Maps, and send us an inquiry directly through our website.",
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite pb-16 sm:pb-24">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-14 sm:pt-20">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <ContactInfo />
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>

      <MapSection />
    </div>
  );
}