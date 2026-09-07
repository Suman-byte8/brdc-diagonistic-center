"use client";

import { useState } from "react";
import "./DoctorBookingWidget.css";

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

    // ── Lead Tracking ───────────────────────────────────────────────
    // Only fires here — AFTER validation passes and WhatsApp opens.
    // A plain button click or failed validation never reaches this point.
    if (typeof fbq !== "undefined") {
      fbq("track", "Lead", {
        content_name: `Doctor Booking – ${doctor.name}`,
        content_category: doctor.specialty,
      });
    }
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "whatsapp_booking_lead",
        doctor_name: doctor.name,
        doctor_specialty: doctor.specialty,
      });
    }
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
  };

  return (
    <div className="dr-booking-widget">
      <main className="main-content">
        <div className="page-layout">
          {/* Main Column */}
          <div className="main-column">
            <section className="card">
              <div className="doctor-hero">
                <div
                  className="doctor-avatar"
                  role="img"
                  style={{ 
                    backgroundImage: `url('${typeof doctor.avatar === 'string' ? doctor.avatar : doctor.avatar.src}')` 
                  }}
                ></div>

                <div className="doctor-info">
                  <div className="doctor-name-row">
                    <h1 className="doctor-name">{doctor.displayName}</h1>
                    <span
                      className="material-symbols-outlined verified-badge"
                      title="Medical Registration Verified"
                    >
                      verified
                    </span>
                  </div>

                  <p className="doctor-specialty">{doctor.specialty}</p>

                  <div className="doctor-credentials">
                    {doctor.credentials.map((c, idx) => (
                      <span
                        key={idx}
                        className={
                          c.type === "highlight"
                            ? "credential-badge-highlight"
                            : "credential-badge"
                        }
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                  <div className="doctor-meta">
                    {doctor.metaItems.map((m, idx) => (
                      <div key={idx} className="doctor-meta-item">
                        <span className="material-symbols-outlined">
                          {m.icon}
                        </span>
                        <span>{m.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="card tabs-container">
              <div className="tabs-nav" role="tablist">
                <button className="tab-btn active" role="tab" suppressHydrationWarning>
                  Book An Appointment
                </button>
              </div>

              <div className="tabs-content">
                <div className="special-notice">
                  <span className="material-symbols-outlined">campaign</span>
                  <div className="special-notice-content">
                    <p className="special-notice-title">{doctor.notice.title}</p>
                    <p
                      className="special-notice-text"
                      dangerouslySetInnerHTML={{ __html: doctor.notice.text }}
                    ></p>
                  </div>
                </div>

                {message && (
                  <div
                    className={`form-message show ${
                      message.type === "success"
                        ? "form-message-success"
                        : "form-message-error"
                    }`}
                  >
                    <span className="material-symbols-outlined form-message-icon">
                      {message.type === "success" ? "check_circle" : "error"}
                    </span>
                    <div className="form-message-content">
                      <p className="form-message-title">{message.title}</p>
                      <p className="form-message-text">{message.text}</p>
                    </div>
                  </div>
                )}

                <div className="form-section">
                  <h3 className="form-section-title">
                    Schedule Your Appointment
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <h4 className="form-section-subtitle">
                      Personal Information
                    </h4>

                    <div className="form-grid">
                      <div className="form-group">
                        <label
                          className="form-label form-label-required"
                          htmlFor="drFullName"
                        >
                          Full Name
                        </label>
                        <input
                          suppressHydrationWarning
                          type="text"
                          id="drFullName"
                          name="fullName"
                          className="form-input"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label
                          className="form-label form-label-required"
                          htmlFor="drPhone"
                        >
                          Phone Number
                        </label>
                        <div className="phone-input-group">
                          <span className="phone-prefix">+91</span>
                          <input
                            suppressHydrationWarning
                            type="tel"
                            id="drPhone"
                            name="phone"
                            className="form-input"
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

                      <div className="form-group">
                        <label
                          className="form-label form-label-required"
                          htmlFor="drLocation"
                        >
                          Your Location / City
                        </label>
                        <div className="input-with-icon">
                          <span className="material-symbols-outlined input-icon">
                            location_on
                          </span>
                          <input
                            suppressHydrationWarning
                            type="text"
                            id="drLocation"
                            name="patientLocation"
                            className="form-input"
                            placeholder="e.g., Malda, Siliguri, Kolkata"
                            value={formData.patientLocation}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                patientLocation: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-divider">
                      <h4 className="form-section-subtitle">
                        Appointment Details
                      </h4>

                      <div className="form-group" style={{ marginBottom: "1.5rem" }}>
                        <label className="form-label">Clinic Location</label>
                        <div className="location-card">
                          <div className="location-icon">
                            <span className="material-symbols-outlined">
                              location_on
                            </span>
                          </div>
                          <div className="location-details">
                            <h4 className="location-title">
                              {doctor.location.name}
                            </h4>
                            <p className="location-address">
                              {doctor.location.address}
                              <br />
                              {doctor.location.city}
                            </p>
                            <span className="location-timing">
                              <span className="material-symbols-outlined">
                                event
                              </span>
                              <span>
                                {doctor.appointment.date} |{" "}
                                {doctor.appointment.time}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label" htmlFor="drDate">
                            Appointment Date
                          </label>
                          <div className="input-with-icon">
                            <span className="material-symbols-outlined input-icon">
                              calendar_today
                            </span>
                            <input
                              suppressHydrationWarning
                              type="text"
                              id="drDate"
                              name="appointmentDate"
                              className="form-input form-input-readonly"
                              value={doctor.appointment.displayDate}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label
                            className="form-label form-label-required"
                            htmlFor="drType"
                          >
                            Appointment Type
                          </label>
                          <select
                            suppressHydrationWarning
                            id="drType"
                            name="appointmentType"
                            className="form-select"
                            value={formData.appointmentType}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                appointmentType: e.target.value,
                              })
                            }
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

                    <div className="form-divider">
                      <h4 className="form-section-subtitle">
                        Medical Information
                      </h4>

                      <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label className="form-label">
                          Primary Concern Area
                        </label>
                        <div className="checkbox-group">
                          {doctor.concernAreas.map((c, idx) => (
                            <label key={idx} className="checkbox-label">
                              <input
                                type="checkbox"
                                className="checkbox-input"
                                name="concern_area[]"
                                value={c}
                                checked={formData.concern_area.includes(c)}
                                onChange={() => handleCheckbox(c)}
                              />
                              <span className="checkbox-text">{c}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          {doctor.medicalHistory.label}
                        </label>
                        <div className="radio-group">
                          {doctor.medicalHistory.options.map((o, idx) => (
                            <label key={idx} className="radio-label">
                              <input
                                type="radio"
                                className="radio-input"
                                name="procedure_history"
                                value={o.value}
                                checked={formData.procedure_history === o.value}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    procedure_history: e.target.value,
                                  })
                                }
                              />
                              <span className="radio-text">{o.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="cta-section">
                      <div className="cta-wrapper">
                        <button
                          suppressHydrationWarning
                          type="submit"
                          id='whatsapp-book-btn'
                          className="btn btn-primary btn-xl" 
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            style={{ fill: "white", marginRight: "8px" }}
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          Book & Send via WhatsApp
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>

          <aside className="sidebar-column">
            <div className="sidebar-sticky">
              <div className="sidebar-card">
                <div className="sidebar-info-list">
                  <div className="sidebar-info-item">
                    <div className="sidebar-info-label">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      <span>{doctor.hospital}</span>
                    </div>
                    <div className="sidebar-info-sub">{doctor.location.city}</div>
                    <div className="date-highlight">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      <span>{doctor.appointment.date}</span>
                    </div>
                  </div>

                  <div className="sidebar-info-item">
                    <div className="sidebar-info-label">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>Timing</span>
                    </div>
                    <div className="sidebar-info-sub">
                      {doctor.appointment.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-alt">
                <h4 className="trust-section-title">Credentials & Trust</h4>
                <ul className="trust-list">
                  {doctor.trustCredentials.map((c, idx) => (
                    <li key={idx} className="trust-item">
                      <span className="material-symbols-outlined">
                        {c.icon}
                      </span>
                      <div>
                        <p className="trust-item-title">{c.title}</p>
                        <p className="trust-item-subtitle">{c.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4 className="trust-section-title">Specializations</h4>
                <ul className="trust-list">
                  {doctor.specializations.map((s, idx) => (
                    <li key={idx} className="trust-item">
                      <span className="material-symbols-outlined">
                        {s.icon}
                      </span>
                      <div>
                        <p className="trust-item-title">{s.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4 className="trust-section-title">Specialty Interests</h4>
                <ul className="trust-list">
                  {doctor.specialtyInterests.map((i, idx) => (
                    <li key={idx} className="trust-item">
                      <span className="material-symbols-outlined">
                        {i.icon}
                      </span>
                      <div>
                        <p className="trust-item-title">{i.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
