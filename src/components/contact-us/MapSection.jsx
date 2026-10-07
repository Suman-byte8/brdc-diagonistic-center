import { contactInfo } from "@/app/data/contactData";

export default function MapSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-16 sm:mt-20">
      <div className="rounded-xl overflow-hidden border border-brdc-border shadow-[0_20px_50px_-24px_rgba(15,77,58,0.35)] h-[360px] sm:h-[450px]">
        <iframe 
          src={contactInfo.mapUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="BRDC Google Map"
        ></iframe>
      </div>
    </div>
  );
}
