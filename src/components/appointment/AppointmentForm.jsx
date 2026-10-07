"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DOCTOR_MAP, DIAG_TESTS } from "@/app/data/dataAppointment";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    pName: "",
    pPhone: "",
    pEmail: "",
    pType: "First Time",
    serviceMain: "",
    opdDept: "",
    opdDoctor: "",
    selectedTests: [],
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle Checkbox Changes
  const handleTestChange = (test) => {
    setFormData((prev) => ({
      ...prev,
      selectedTests: prev.selectedTests.includes(test)
        ? prev.selectedTests.filter((t) => t !== test)
        : [...prev.selectedTests, test],
    }));
  };

  const sendWhatsApp = () => {
    const { pName, pPhone, pEmail, pType, serviceMain, opdDept, opdDoctor, selectedTests } = formData;

    if (!pName || !pPhone || !serviceMain) {
      alert("Please fill Name, Phone and Service.");
      return;
    }

    let text = "*New Appointment Request*\n";
    text += `*Patient:* ${pName}\n`;
    text += `*Phone:* ${pPhone}\n`;
    if (pEmail) text += `*Email:* ${pEmail}\n`;
    text += `*Patient Type:* ${pType}\n`;
    text += `*Service:* ${serviceMain}\n`;

    if (serviceMain === "OPD") {
      text += `*Department:* ${opdDept}\n`;
      text += `*Doctor:* ${opdDoctor}\n`;
    } else if (serviceMain === "Diagnostic") {
      text += `*Tests:* ${selectedTests.length ? selectedTests.join(", ") : "None"}\n`;
    }

    const waNum = "917029243525";
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="relative max-w-[680px] mx-auto mt-12 sm:mt-16 p-6 sm:p-10 bg-gradient-to-br from-white to-brdc-pale rounded-xl border border-brdc-border shadow-[0_24px_60px_-28px_rgba(15,77,58,0.45)] text-brdc-text overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brdc-primary via-brdc-gold to-brdc-primary"></div>
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brdc-forest">Book An Appointment</h2>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mt-3">B.R. Diagnostic Center Pvt. Ltd.</p>
      </div>

      <form className="space-y-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Patient Full Name</label>
          <input
            suppressHydrationWarning
            type="text"
            id="pName"
            placeholder="Enter name"
            required
            className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition-colors outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Phone Number</label>
            <input
              suppressHydrationWarning
              type="text"
              id="pPhone"
              placeholder="Contact number"
              required
              className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition-colors outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Email Address</label>
            <input
              suppressHydrationWarning
              type="email"
              id="pEmail"
              placeholder="Enter email address"
              className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition-colors outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Patient Type */}
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Patient Type</label>
          <select
            suppressHydrationWarning
            id="pType"
            className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition-colors outline-none"
            onChange={handleChange}
          >
            <option value="First Time">First Time Patient</option>
            <option value="Repeated">Repeated Patient</option>
          </select>
        </div>

        {/* Primary Service */}
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Select Primary Service</label>
          <select
            suppressHydrationWarning
            id="serviceMain"
            required
            className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition-colors outline-none"
            onChange={handleChange}
          >
            <option value="">-- Choose --</option>
            <option value="OPD">OPD Service</option>
            <option value="Diagnostic">Diagnostic Service</option>
            <option value="Package">Test Package</option>
          </select>
        </div>

        {/* Dynamic OPD Section */}
        <AnimatePresence>
          {formData.serviceMain === "OPD" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gradient-to-br from-brdc-soft/60 to-brdc-pale p-5 sm:p-6 rounded-lg border-l-4 border-brdc-gold overflow-hidden"
            >
              <div className="flex flex-col mb-5">
                <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">OPD Department</label>
                <select
                  id="opdDept"
                  className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg outline-none focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40"
                  onChange={handleChange}
                >
                  <option value="">-- Select Department --</option>
                  {Object.keys(DOCTOR_MAP).map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {formData.opdDept && (
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-wider mb-2 text-brdc-forest">Consulting Specialist</label>
                  <select
                    id="opdDoctor"
                    className="w-full px-4 py-3 text-sm bg-white border border-brdc-border rounded-lg outline-none focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40"
                    onChange={handleChange}
                  >
                    <option value="">-- Select Doctor --</option>
                    {DOCTOR_MAP[formData.opdDept]?.map((doc) => (
                      <option key={doc} value={doc}>{doc}</option>
                    ))}
                  </select>
                </div>
              )}
            </motion.div>
          )}

          {/* Dynamic Diagnostic Section */}
          {formData.serviceMain === "Diagnostic" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gradient-to-br from-brdc-soft/60 to-brdc-pale p-5 sm:p-6 rounded-lg border-l-4 border-brdc-gold overflow-hidden"
            >
              <label className="text-xs font-bold uppercase tracking-wider mb-3 block text-brdc-forest">Available Tests (Select multiple)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto bg-white p-3 rounded-lg border border-brdc-border">
                {DIAG_TESTS.map((test) => (
                  <label key={test} className="flex items-start gap-3 text-sm cursor-pointer hover:bg-brdc-offwhite p-2 rounded-lg transition-colors">
                    <input
                      type="checkbox"
                      className="mt-1 accent-brdc-primary"
                      checked={formData.selectedTests.includes(test)}
                      onChange={() => handleTestChange(test)}
                    />
                    {test}
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          suppressHydrationWarning
          type="button"
          onClick={sendWhatsApp}
          className="w-full py-4 bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark font-bold uppercase tracking-wide text-sm rounded-lg shadow-[0_8px_20px_-8px_rgba(230,180,69,0.8)] hover:from-brdc-gold-dark hover:to-brdc-gold hover:-translate-y-0.5 transition-all mt-2"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}