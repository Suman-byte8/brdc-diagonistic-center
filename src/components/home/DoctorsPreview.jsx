import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Stethoscope, Baby, Brain, Bone, Ear, Droplets,
  Activity, Scissors, Dumbbell, Ribbon, Pill, Flower2,
} from "lucide-react";
import { detailedDoctors, doctorsData } from "@/app/data/doctorsData";
import Reveal from "@/components/ui/Reveal";

const disabledDoctorNames = new Set(
  detailedDoctors.filter((doctor) => doctor.disabled).map((doctor) => doctor.name)
);

// A distinct icon per department; falls back to the stethoscope.
const categoryIcons = {
  "Gynecologists": Flower2,
  "General Surgeons": Scissors,
  "General Physicians": Stethoscope,
  "ENT Surgeons": Ear,
  "Urologists": Droplets,
  "Rehumatologist": Activity,
  "Gastroenterologists": Pill,
  "Oncologist": Ribbon,
  "Pediatricians": Baby,
  "Neurosurgeons": Brain,
  "Nephrologists": Droplets,
  "Physiotherapists": Dumbbell,
  "Orthopedic Surgeon": Bone,
};

// Presents the existing department categories from doctorsData (no new copy).
export default function DoctorsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brdc-offwhite via-brdc-pale to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <Reveal className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brdc-gold-dark mb-3">Our Doctors</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-brdc-forest">
              Departments
            </h2>
          </div>
          <Link
            href="/our-doctors"
            className="group inline-flex items-center gap-2 border border-brdc-primary text-brdc-primary rounded-lg px-5 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-brdc-primary hover:text-white transition-colors whitespace-nowrap"
          >
            Our Doctors
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {doctorsData
            .filter((section) => section.doctors.some((doctor) => !disabledDoctorNames.has(doctor.name)))
            .map((section) => {
            const Icon = categoryIcons[section.category] || Stethoscope;
            return (
              <Link
                key={section.category}
                href="/our-doctors"
                className="group relative w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] rounded-xl border border-brdc-border bg-gradient-to-br from-white to-brdc-pale p-5 sm:p-6 flex items-center gap-4 shadow-[0_6px_20px_-10px_rgba(15,77,58,0.2)] hover:-translate-y-1 hover:shadow-[0_14px_30px_-10px_rgba(15,77,58,0.3)] transition-all duration-300"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-brdc-primary to-brdc-secondary text-white flex items-center justify-center group-hover:from-brdc-gold group-hover:to-[#F3CF7A] group-hover:text-brdc-dark transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <span className="font-serif font-bold text-brdc-forest leading-snug pr-5">{section.category}</span>
                <ArrowUpRight
                  className="absolute top-4 right-4 w-4 h-4 text-brdc-text-secondary opacity-0 group-hover:opacity-100 group-hover:text-brdc-primary transition-opacity"
                  strokeWidth={1.75}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
