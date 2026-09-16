import Link from "next/link";
import DoctorsHero from "@/components/our-doctors/DoctorsHero";
import DoctorCard from "@/components/our-doctors/DoctorCard";
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

export default function DoctorsPage() {
  return (
    <main className="bg-white pb-20">
      <DoctorsHero />

      <div className="max-w-7xl mx-auto px-4 space-y-16 mt-10">
        {doctorsData.map((section, idx) => (
          <div key={idx}>
            {/* Category Header */}
            <h3 className="text-xl font-bold text-green-700 mb-10 border-b-2 border-green-200 inline-block pb-1">
              {section.category}
            </h3>

            {/* Grid for Doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {section.doctors.map((doc, dIdx) => (
                (() => {
                  const profile = getDoctorProfile(doc.name);
                  const bannerLink = profile
                    ? activeBannerBySlug.get(profile.slug)
                    : undefined;

                  return (
                    <DoctorCard
                      key={dIdx}
                      name={doc.name}
                      info={doc.info}
                      timing={doc.timing}
                      date={profile?.appointment?.displayDate || profile?.appointment?.date}
                      href={bannerLink}
                    />
                  );
                })()
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Book An Appointment CTA Section */}
      <div className="mt-20 bg-green-50 py-10 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-green-100">
        <h3 className="text-xl font-semibold text-green-800">
          Begin Your Medical Journey with BRDC
        </h3>
        <Link
          href="/book-your-appointment"
          className="bg-green-700 text-white px-8 py-3 rounded-md font-bold hover:bg-green-800 transition shadow-md"
        >
          Book An Appointment
        </Link>
      </div>
    </main>
  );
}
