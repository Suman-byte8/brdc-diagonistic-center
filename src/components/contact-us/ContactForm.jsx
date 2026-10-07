"use client";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = "Valid phone is required";
    if (!formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const whatsappNumber = "917029243525";
      const text = `*New Inquiry from BRDC Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-brdc-pale p-6 sm:p-10 rounded-xl border border-brdc-border shadow-[0_20px_50px_-24px_rgba(15,77,58,0.35)]">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-2">Get In Touch</p>
      <h3 className="font-serif text-2xl md:text-3xl font-bold text-brdc-forest mb-2">Send us a Message</h3>
      <div className="h-1 w-16 bg-gradient-to-r from-brdc-gold to-transparent rounded-full mb-8"></div>
      
      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brdc-forest mb-2">Full Name</label>
          <input 
            suppressHydrationWarning
            type="text" 
            className={`w-full px-4 py-3 text-sm border rounded-lg outline-none transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-brdc-border focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 bg-white'}`}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brdc-forest mb-2">Phone Number</label>
          <input 
            suppressHydrationWarning
            type="number" 
            className={`w-full px-4 py-3 text-sm border rounded-lg outline-none transition-colors ${errors.phone ? 'border-red-500 bg-red-50' : 'border-brdc-border focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 bg-white'}`}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brdc-forest mb-2">Email Address</label>
          <input 
            suppressHydrationWarning
            type="email" 
            className={`w-full px-4 py-3 text-sm border rounded-lg outline-none transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-brdc-border focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 bg-white'}`}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brdc-forest mb-2">Your Message</label>
          <textarea 
            rows="4"
            className={`w-full px-4 py-3 text-sm border rounded-lg outline-none transition-colors resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-brdc-border focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 bg-white'}`}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-2 font-medium">{errors.message}</p>}
        </div>

        <button suppressHydrationWarning type="submit" className="w-full bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark font-bold uppercase tracking-wide text-sm py-4 rounded-lg hover:from-brdc-gold-dark hover:to-brdc-gold hover:-translate-y-0.5 transition-all shadow-[0_8px_20px_-8px_rgba(230,180,69,0.8)] flex items-center justify-center gap-3 group mt-2">
           <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> Submit via WhatsApp <Send className="w-4 h-4 opacity-70" />
        </button>
      </div>
    </form>
  );
}