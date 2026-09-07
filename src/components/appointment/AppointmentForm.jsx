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
    <div className="max-w-[650px] mx-auto my-10 p-8 bg-white rounded-xl shadow-2xl border-t-[6px] border-green-600 text-gray-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-green-800">Book An Appointment</h2>
        <p className="text-sm text-gray-500">B.R. Diagnostic Center Pvt. Ltd.</p>
      </div>

      <form className="space-y-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2 text-gray-600">Patient Full Name</label>
          <input
            suppressHydrationWarning
            type="text"
            id="pName"
            placeholder="Enter name"
            required
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:bg-white transition-all outline-none"
            onChange={handleChange}
          />
        </div>

        {/* Phone & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2 text-gray-600">Phone Number</label>
            <input
              suppressHydrationWarning
              type="text"
              id="pPhone"
              placeholder="Contact number"
              required
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:bg-white transition-all outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2 text-gray-600">Email Address</label>
            <input
              suppressHydrationWarning
              type="email"
              id="pEmail"
              placeholder="Enter email address"
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:bg-white transition-all outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Patient Type */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2 text-gray-600">Patient Type</label>
          <select
            suppressHydrationWarning
            id="pType"
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 transition-all outline-none"
            onChange={handleChange}
          >
            <option value="First Time">First Time Patient</option>
            <option value="Repeated">Repeated Patient</option>
          </select>
        </div>

        {/* Primary Service */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-2 text-gray-600">Select Primary Service</label>
          <select
            suppressHydrationWarning
            id="serviceMain"
            required
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 transition-all outline-none"
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
              className="bg-gray-100 p-5 rounded-lg border-l-4 border-green-600 overflow-hidden"
            >
              <div className="flex flex-col mb-4">
                <label className="text-sm font-semibold mb-2">OPD Department</label>
                <select
                  id="opdDept"
                  className="w-full p-3 bg-white border rounded-lg outline-none"
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
                  <label className="text-sm font-semibold mb-2">Consulting Specialist</label>
                  <select
                    id="opdDoctor"
                    className="w-full p-3 bg-white border rounded-lg outline-none"
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
              className="bg-gray-100 p-5 rounded-lg border-l-4 border-green-600 overflow-hidden"
            >
              <label className="text-sm font-semibold mb-3 block">Available Tests (Select multiple)</label>
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto bg-white p-4 rounded-lg border">
                {DIAG_TESTS.map((test) => (
                  <label key={test} className="flex items-start gap-2 text-[12px] cursor-pointer hover:bg-gray-50 p-1">
                    <input
                      type="checkbox"
                      className="mt-1"
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
          className="w-full p-5 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 hover:-translate-y-1 transition-all"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}