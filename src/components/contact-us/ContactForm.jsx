"use client";
import { useState } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-green-700 mb-6">Send us a Message</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
          <input 
            suppressHydrationWarning
            type="text" 
            className={`w-full p-3 border rounded-lg outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-green-500'}`}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
          <input 
            suppressHydrationWarning
            type="number" 
            className={`w-full p-3 border rounded-lg outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-green-500'}`}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
          <input 
            suppressHydrationWarning
            type="email" 
            className={`w-full p-3 border rounded-lg outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-green-500'}`}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Your Message</label>
          <textarea 
            rows="4"
            className={`w-full p-3 border rounded-lg outline-none transition ${errors.message ? 'border-red-500' : 'border-gray-200 focus:border-green-500'}`}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button suppressHydrationWarning type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2 group">
           <FaWhatsapp className="text-xl group-hover:scale-110 transition" /> Submit via WhatsApp <FaPaperPlane className="text-xs opacity-50" />
        </button>
      </div>
    </form>
  );
}