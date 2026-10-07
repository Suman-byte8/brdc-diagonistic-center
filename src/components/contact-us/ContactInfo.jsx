import { Phone, MessageCircle, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { contactInfo } from "@/app/data/contactData";

const card =
  "bg-gradient-to-br from-white to-brdc-pale p-6 sm:p-7 rounded-xl border border-brdc-border shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)] hover:shadow-[0_18px_40px_-18px_rgba(15,77,58,0.35)] transition-shadow";
const badge =
  "shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center";

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {/* Phone Numbers Card */}
      <div className={card}>
        <h4 className="font-serif text-lg font-semibold text-brdc-forest">Call Us</h4>
        <p className="text-xs text-brdc-text-secondary mt-1 mb-5">Enquiry between 9.00 AM to 6.00 PM</p>
        <div className="space-y-4 text-sm font-semibold text-brdc-text">
          <div className="flex items-start gap-4">
            <span className={badge}><Phone className="w-4 h-4" /></span>
            <div className="flex flex-col gap-1 pt-0.5">
              {contactInfo.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                  className="hover:text-brdc-primary transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={badge}><MessageCircle className="w-4 h-4" /></span>
            <a
              href={`https://wa.me/91${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brdc-primary transition-colors"
            >
              +91 {contactInfo.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className={card}>
        <h4 className="font-serif text-lg font-semibold text-brdc-forest mb-4">Location</h4>
        <div className="flex items-start gap-4">
          <span className={badge}><MapPin className="w-4 h-4" /></span>
          <p className="text-sm leading-6 text-brdc-text-secondary pt-0.5">{contactInfo.address}</p>
        </div>
      </div>

      {/* Social Media Card */}
      <div className={card}>
        <h4 className="font-serif text-lg font-semibold text-brdc-forest mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {contactInfo.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="w-10 h-10 rounded-full border border-brdc-primary/30 text-brdc-primary flex items-center justify-center hover:bg-gradient-to-br hover:from-brdc-gold hover:to-[#F3CF7A] hover:text-brdc-dark hover:border-brdc-gold transition-colors"
            >
              {social.type === 'facebook' ? <FaFacebookF className="w-4 h-4" /> : <FaInstagram className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
