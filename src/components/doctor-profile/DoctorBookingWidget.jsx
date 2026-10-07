"use client";

import { useState, useRef } from "react";
import { trackDataLayerEvent } from "@/lib/analytics";

export default function DoctorBookingWidget({ doctor }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    patientLocation: "",
    appointmentType: "",
    procedure_history: "No",
    concern_area: [],
  });
  const [message, setMessage] = useState(null);
  const isSubmittingRef = useRef(false);

  const handleCheckbox = (value) => {
    setFormData((prev) => ({
      ...prev,
      concern_area: prev.concern_area.includes(value)
        ? prev.concern_area.filter((c) => c !== value)
        : [...prev.concern_area, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null);

    if (
      !formData.fullName ||
      formData.phone.length !== 10 ||
      !formData.patientLocation ||
      !formData.appointmentType
    ) {
      setMessage({
        type: "error",
        title: "Validation Error",
        text: "Please complete all required fields. Phone must be 10 digits.",
      });
      return;
    }

    // Guard against duplicate leads from rapid double-clicks/double submits.
    if (isSubmittingRef.current) {
      return;
    }
    isSubmittingRef.current = true;

    // WhatsApp Integration
    const targetWhatsAppNumber = "917029243525";

    let waMessage = `*New Appointment Request* 🩺\n`;
    waMessage += `-----------------------------\n`;
    waMessage += `*Doctor:* ${doctor.name} (${doctor.specialty})\n`;
    waMessage += `*Clinic:* ${doctor.location.name}, ${doctor.location.city}\n\n`;

    waMessage += `*Patient Details:*\n`;
    waMessage += `👤 Name: ${formData.fullName}\n`;
    waMessage += `📞 Phone: +91 ${formData.phone}\n`;
    waMessage += `📍 Location: ${formData.patientLocation}\n\n`;

    waMessage += `*Appointment Info:*\n`;
    waMessage += `📅 Date: ${doctor.appointment.date}\n`;
    waMessage += `🕐 Time: ${doctor.appointment.time}\n`;
    waMessage += `📋 Type: ${formData.appointmentType}\n`;
    waMessage += `🩺 Concerns: ${
      formData.concern_area.length > 0
        ? formData.concern_area.join(", ")
        : "Not specified"
    }\n`;
    waMessage += `⏳ Chronic Conditions: ${formData.procedure_history}\n`;
    waMessage += `-----------------------------\n`;
    waMessage += `Please confirm my appointment.`;

    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(whatsappUrl, "_blank");

    // ── GTM Tracking ────────────────────────────────────────────────
    // Only fires here — AFTER validation passes and WhatsApp opens.
    // A plain button click or failed validation never reaches this point.
    // This is both the successful appointment submission and the WhatsApp
    // appointment action, since this form's only submission path is WhatsApp.
    trackDataLayerEvent("appointment_form_submit", { doctor_name: doctor.name });
    trackDataLayerEvent("whatsapp_appointment_click", { doctor_name: doctor.name });
    // ────────────────────────────────────────────────────────────────

    setMessage({
      type: "success",
      title: "Redirecting to WhatsApp!",
      text: "Please press send on WhatsApp to confirm your booking.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      patientLocation: "",
      appointmentType: "",
      procedure_history: "No",
      concern_area: [],
    });

    isSubmittingRef.current = false;
  };

  const label = "block text-xs font-bold uppercase tracking-wider text-brdc-forest mb-2";
  const required = "after:content-['_*'] after:text-red-500";
  const input =
    "w-full px-4 py-3 text-sm text-brdc-text bg-white border border-brdc-border rounded-lg placeholder:text-brdc-text-secondary/70 outline-none focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition";
  const sectionTitle = "flex items-center gap-3 font-serif text-lg font-semibold text-brdc-forest mb-5";
  const stepNo =
    "w-7 h-7 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white text-xs font-sans font-bold flex items-center justify-center";
  const sideCard =
    "rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale p-6 shadow-[0_8px_30px_-18px_rgba(15,77,58,0.25)]";
  const sideTitle = "text-[11px] font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-4";

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
      {/* Booking form */}
      <section
        id="book"
        className="scroll-mt-28 rounded-xl border border-brdc-border bg-white shadow-[0_24px_60px_-30px_rgba(15,77,58,0.45)] overflow-hidden"
      >
        <div className="h-1 bg-gradient-to-r from-brdc-primary via-brdc-gold to-brdc-primary"></div>
        <div className="p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-2">Book An Appointment</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brdc-forest mb-6">
            Schedule Your Appointment
          </h2>

          {/* Special notice */}
          <div className="flex items-start gap-4 rounded-lg border border-brdc-gold/40 bg-gradient-to-br from-[#FDF6E3] to-[#FBEFD0] px-5 py-4 mb-6">
            <span className="material-symbols-outlined text-brdc-gold-dark text-2xl leading-none shrink-0">campaign</span>
            <div>
              <p className="font-serif font-semibold text-brdc-forest mb-1">{doctor.notice.title}</p>
              <p
                className="text-sm leading-6 text-brdc-text-secondary [&_strong]:text-brdc-forest [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: doctor.notice.text }}
              ></p>
            </div>
          </div>

          {message && (
            <div
              role={message.type === "error" ? "alert" : "status"}
              className={`flex items-start gap-3 rounded-lg px-5 py-4 mb-6 border ${
                message.type === "success"
                  ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                  : "bg-red-50 border-red-300 text-red-800"
              }`}
            >
              <span className="material-symbols-outlined text-xl leading-none shrink-0">
                {message.type === "success" ? "check_circle" : "error"}
              </span>
              <div>
                <p className="font-bold text-sm mb-0.5">{message.title}</p>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal information */}
            <fieldset>
              <legend className={sectionTitle}>
                <span className={stepNo}>1</span> Personal Information
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className={`${label} ${required}`} htmlFor="drFullName">Full Name</label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    id="drFullName"
                    name="fullName"
                    className={input}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className={`${label} ${required}`} htmlFor="drPhone">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm font-semibold text-brdc-text-secondary bg-brdc-pale border border-r-0 border-brdc-border rounded-l-lg">
                      +91
                    </span>
                    <input
                      suppressHydrationWarning
                      type="tel"
                      id="drPhone"
                      name="phone"
                      className={`${input} rounded-l-none`}
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`${label} ${required}`} htmlFor="drLocation">Your Location / City</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl leading-none text-brdc-text-secondary pointer-events-none">
                      location_on
                    </span>
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="drLocation"
                      name="patientLocation"
                      className={`${input} pl-10`}
                      placeholder="e.g., Malda, Siliguri, Kolkata"
                      value={formData.patientLocation}
                      onChange={(e) => setFormData({ ...formData, patientLocation: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Appointment details */}
            <fieldset className="pt-8 border-t border-brdc-border">
              <legend className={`${sectionTitle} float-left w-full`}>
                <span className={stepNo}>2</span> Appointment Details
              </legend>

              <div className="clear-both">
                <p className={label}>Clinic Location</p>
                <div className="flex flex-col sm:flex-row items-start gap-4 rounded-lg border-2 border-brdc-primary/70 bg-brdc-pale p-5 mb-5">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl leading-none">location_on</span>
                  </span>
                  <div>
                    <h4 className="font-serif font-semibold text-brdc-forest">{doctor.location.name}</h4>
                    <p className="text-sm leading-6 text-brdc-text-secondary mb-2">
                      {doctor.location.address}
                      <br />
                      {doctor.location.city}
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brdc-border px-3 py-1 text-xs font-semibold text-brdc-primary">
                      <span className="material-symbols-outlined text-base leading-none text-brdc-gold-dark">event</span>
                      {doctor.appointment.date} | {doctor.appointment.time}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label} htmlFor="drDate">Appointment Date</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl leading-none text-brdc-text-secondary pointer-events-none">
                        calendar_today
                      </span>
                      <input
                        suppressHydrationWarning
                        type="text"
                        id="drDate"
                        name="appointmentDate"
                        className={`${input} pl-10 bg-brdc-pale cursor-default`}
                        value={doctor.appointment.displayDate}
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`${label} ${required}`} htmlFor="drType">Appointment Type</label>
                    <select
                      suppressHydrationWarning
                      id="drType"
                      name="appointmentType"
                      className={input}
                      value={formData.appointmentType}
                      onChange={(e) => setFormData({ ...formData, appointmentType: e.target.value })}
                      required
                    >
                      {doctor.appointmentTypes.map((t, idx) => (
                        <option key={idx} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Medical information */}
            <fieldset className="pt-8 border-t border-brdc-border">
              <legend className={`${sectionTitle} float-left w-full`}>
                <span className={stepNo}>3</span> Medical Information
              </legend>

              <div className="clear-both space-y-6">
                <div>
                  <p className={label}>Primary Concern Area</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.concernAreas.map((c, idx) => (
                      <label key={idx} className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          name="concern_area[]"
                          value={c}
                          checked={formData.concern_area.includes(c)}
                          onChange={() => handleCheckbox(c)}
                        />
                        <span className="inline-flex items-center px-4 py-2 rounded-full border border-brdc-border bg-white text-sm text-brdc-text-secondary transition-colors hover:border-brdc-primary/50 peer-checked:bg-gradient-to-r peer-checked:from-brdc-primary peer-checked:to-brdc-secondary peer-checked:text-white peer-checked:border-transparent peer-focus-visible:ring-2 peer-focus-visible:ring-brdc-gold">
                          {c}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={label}>{doctor.medicalHistory.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.medicalHistory.options.map((o, idx) => (
                      <label key={idx} className="cursor-pointer">
                        <input
                          type="radio"
                          className="peer sr-only"
                          name="procedure_history"
                          value={o.value}
                          checked={formData.procedure_history === o.value}
                          onChange={(e) => setFormData({ ...formData, procedure_history: e.target.value })}
                        />
                        <span className="inline-flex items-center px-5 py-2 rounded-full border border-brdc-border bg-white text-sm text-brdc-text-secondary transition-colors hover:border-brdc-primary/50 peer-checked:bg-gradient-to-r peer-checked:from-brdc-primary peer-checked:to-brdc-secondary peer-checked:text-white peer-checked:border-transparent peer-focus-visible:ring-2 peer-focus-visible:ring-brdc-gold">
                          {o.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="pt-8 border-t border-brdc-border">
              <button
                suppressHydrationWarning
                type="submit"
                id="whatsapp-book-btn"
                className="w-full inline-flex items-center justify-center gap-3 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base sm:text-lg px-8 py-4 shadow-[0_12px_28px_-12px_rgba(37,211,102,0.8)] hover:-translate-y-0.5 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  aria-hidden="true"
                  style={{ fill: "white" }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book & Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Sidebar */}
      <aside className="lg:sticky lg:top-28 space-y-5">
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-brdc-dark via-brdc-forest to-brdc-secondary text-white p-6 shadow-[0_20px_50px_-24px_rgba(15,77,58,0.6)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brdc-gold mb-4">Appointment</p>
          <div className="space-y-4 text-sm">
            <div>
              <p className="flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-xl leading-none text-brdc-gold">location_on</span>
                {doctor.hospital}
              </p>
              <p className="text-white/70 ml-7 mt-0.5">{doctor.location.city}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brdc-gold to-[#F3CF7A] text-brdc-dark font-bold px-4 py-2">
              <span className="material-symbols-outlined text-lg leading-none">calendar_month</span>
              {doctor.appointment.date}
            </div>
            <div className="pt-4 border-t border-white/15">
              <p className="flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-xl leading-none text-brdc-gold">schedule</span>
                Timing
              </p>
              <p className="text-white/70 ml-7 mt-0.5">{doctor.appointment.time}</p>
            </div>
          </div>
        </div>

        <div className={sideCard}>
          <h4 className={sideTitle}>Credentials & Trust</h4>
          <ul className="space-y-4">
            {doctor.trustCredentials.map((c, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brdc-soft to-brdc-mint text-brdc-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg leading-none">{c.icon}</span>
                </span>
                <div>
                  <p className="text-sm font-bold text-brdc-forest">{c.title}</p>
                  <p className="text-xs text-brdc-text-secondary mt-0.5">{c.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={sideCard}>
          <h4 className={sideTitle}>Specializations</h4>
          <ul className="space-y-3">
            {doctor.specializations.map((s, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg leading-none">{s.icon}</span>
                </span>
                <p className="text-sm font-semibold text-brdc-forest">{s.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={sideCard}>
          <h4 className={sideTitle}>Specialty Interests</h4>
          <ul className="space-y-3">
            {doctor.specialtyInterests.map((i, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-xl leading-none text-brdc-gold-dark shrink-0">{i.icon}</span>
                <p className="text-sm font-semibold text-brdc-forest">{i.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
