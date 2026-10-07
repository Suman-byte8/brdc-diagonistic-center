"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import DoctorCard from "@/components/our-doctors/DoctorCard";

// Searchable, department-filtered doctor directory.
// `sections` = [{ category, doctors: [{ name, info, timing, date, href, avatar }] }]
export default function DoctorsDirectory({ sections }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const total = sections.reduce((n, s) => n + s.doctors.length, 0);

  const q = query.trim().toLowerCase();
  const visible = sections
      .filter((s) => active === "All" || s.category === active)
      .map((s) => ({
        ...s,
        doctors: q
          ? s.doctors.filter(
              (d) =>
                d.name.toLowerCase().includes(q) ||
                d.info.toLowerCase().includes(q) ||
                s.category.toLowerCase().includes(q)
            )
          : s.doctors,
      }))
      .filter((s) => s.doctors.length > 0);

  const shown = visible.reduce((n, s) => n + s.doctors.length, 0);

  const filters = [{ category: "All", count: total }, ...sections.map((s) => ({ category: s.category, count: s.doctors.length }))];

  const filterButton = (f, compact) => {
    const isActive = active === f.category;
    return (
      <button
        key={f.category}
        type="button"
        aria-pressed={isActive}
        onClick={() => setActive(f.category)}
        className={
          compact
            ? `shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide border transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-brdc-primary to-brdc-secondary text-white border-transparent"
                  : "bg-white text-brdc-text-secondary border-brdc-border hover:text-brdc-primary"
              }`
            : `w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm text-left transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-brdc-primary to-brdc-secondary text-white font-semibold shadow-[0_8px_18px_-10px_rgba(15,77,58,0.7)]"
                  : "text-brdc-text hover:bg-brdc-pale hover:text-brdc-primary"
              }`
        }
      >
        <span>{f.category}</span>
        <span
          className={`text-[11px] font-bold tabular-nums rounded-full px-2 py-0.5 ${
            isActive ? "bg-white/20 text-white" : "bg-brdc-gold/15 text-brdc-gold-dark"
          }`}
        >
          {f.count}
        </span>
      </button>
    );
  };

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-10 items-start">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block sticky top-28">
        <div className="rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale p-4 shadow-[0_10px_30px_-20px_rgba(15,77,58,0.35)]">
          <p className="px-4 pt-1 pb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brdc-gold-dark">
            Departments
          </p>
          <nav aria-label="Filter by department" className="flex flex-col gap-1">
            {filters.map((f) => filterButton(f, false))}
          </nav>
        </div>
      </aside>

      <div className="min-w-0">
        {/* Search */}
        <div className="relative mb-4 lg:mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brdc-text-secondary pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctor, qualification or department"
            aria-label="Search doctors"
            className="w-full pl-12 pr-11 py-3.5 rounded-xl border border-brdc-border bg-white text-sm text-brdc-text placeholder-brdc-text-secondary shadow-[0_10px_30px_-20px_rgba(15,77,58,0.35)] focus:outline-none focus:border-brdc-gold focus:ring-2 focus:ring-brdc-gold/40 transition"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-brdc-text-secondary hover:bg-brdc-pale hover:text-brdc-primary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile department chips */}
        <div className="lg:hidden -mx-6 sm:-mx-8 px-6 sm:px-8 mb-6 overflow-x-auto hide-scrollbar" data-lenis-prevent>
          <div className="flex gap-2 w-max">{filters.map((f) => filterButton(f, true))}</div>
        </div>

        <p className="text-xs font-semibold text-brdc-text-secondary mb-6" aria-live="polite">
          Showing {shown} of {total} doctors
        </p>

        {visible.length === 0 ? (
          <div className="text-center py-16 rounded-xl border border-dashed border-brdc-border bg-white">
            <h3 className="font-serif text-xl font-bold text-brdc-forest mb-2">No doctors found</h3>
            <button
              type="button"
              onClick={() => { setQuery(""); setActive("All"); }}
              className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-brdc-primary border-b border-brdc-gold pb-1 hover:text-brdc-gold-dark"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {visible.map((section) => (
              <section key={section.category} aria-labelledby={`dept-${section.category}`}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 id={`dept-${section.category}`} className="font-serif text-xl md:text-2xl font-bold text-brdc-forest whitespace-nowrap">
                    {section.category}
                  </h3>
                  <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-brdc-gold/70 to-transparent"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {section.doctors.map((doc) => (
                    <DoctorCard key={doc.name} {...doc} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
