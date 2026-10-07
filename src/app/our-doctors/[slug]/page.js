import { notFound } from "next/navigation";
import { Lock } from "lucide-react";
import { detailedDoctors } from "@/app/data/doctorsData";
import DoctorBookingWidget from "@/components/doctor-profile/DoctorBookingWidget";
import DoctorProfileHero from "@/components/doctor-profile/DoctorProfileHero";

export async function generateStaticParams() {
  return detailedDoctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DoctorProfilePage({ params }) {
  const { slug } = await params;
  const doctor = detailedDoctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-white">
      <DoctorProfileHero doctor={doctor} />

      <div className="bg-gradient-to-b from-brdc-offwhite via-white to-brdc-offwhite">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
          <DoctorBookingWidget doctor={doctor} />
        </div>
      </div>

      {/* Trust Footer */}
      <div className="border-t border-brdc-border bg-brdc-offwhite py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-brdc-primary mb-2">
          <Lock className="w-4 h-4" strokeWidth={2} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Secure &amp; HIPAA Compliant</span>
        </div>
        <p className="text-xs text-brdc-text-secondary max-w-2xl mx-auto leading-relaxed">
          Your personal and medical information is encrypted and transmitted securely. We strictly adhere to HIPAA regulations and national healthcare standards to protect patient privacy and data integrity.
        </p>
      </div>
    </div>
  );
}
