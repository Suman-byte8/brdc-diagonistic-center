import CTABanner from "@/components/ui/CTABanner";
import DoctorsHero from "@/components/our-doctors/DoctorsHero";
import DoctorsDirectory from "@/components/our-doctors/DoctorsDirectory";
import { detailedDoctors, doctorsData } from "@/app/data/doctorsData";
import { heroBanners } from "@/app/data/homeData";

export const metadata = {
  title: "Our Specialized Doctors",
  description:
    "Consult with highly experienced medical professionals in Malda. Our team includes Gynecologists, Surgeons, Cardiologists, Pediatricians, and more at BRDC.",
};

const activeBannerBySlug = new Map(
  heroBanners
    .filter((banner) => banner.display)
    .map((banner) => [banner.link.split("/").pop(), banner.link])
);

function getDoctorProfile(doctorName) {
  const normalizedName = doctorName.replace("Dr. MD ", "Dr. ");
  return detailedDoctors.find(
    (doctor) => doctor.name === doctorName || doctor.name === normalizedName
  );
}

// Flatten each department's doctors into plain props for the client directory.
const sections = doctorsData.map((section) => ({
  category: section.category,
  doctors: section.doctors.flatMap((doc) => {
    const profile = getDoctorProfile(doc.name);
    if (profile?.disabled) return [];

    return {
      name: doc.name,
      info: doc.info,
      timing: doc.timing,
      date: profile?.appointment?.displayDate || profile?.appointment?.date || null,
      href: profile ? activeBannerBySlug.get(profile.slug) || null : null,
      avatar: profile?.avatar || null,
    };
  }),
})).filter((section) => section.doctors.length > 0);

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      <DoctorsHero />

      <div className="bg-gradient-to-b from-white via-brdc-offwhite to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-20">
          <DoctorsDirectory sections={sections} />
        </div>
      </div>

      {/* Book An Appointment CTA Section */}
      <CTABanner title="Begin Your Medical Journey with BRDC" />
    </div>
  );
}
