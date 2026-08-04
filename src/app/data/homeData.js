import drBarunDutta from "@/app/assets/doctorHeroBanner/Dr_Barun_Dutta_Website_cover.jpg";
import drBBKumar from "@/app/assets/doctorHeroBanner/Dr_BB_Kumar_Website_cover.jpg";
import drKundanKumar from "@/app/assets/doctorHeroBanner/Dr_Kundan_Kumar_Website_cover.jpg";
import drYRadhakrishna from "@/app/assets/doctorHeroBanner/Dr_Y_Radhakrishna_Website_cover.jpg";
import drSarwarHossain from "@/app/assets/doctorHeroBanner/Dr_Sarwar_Hossain_Website_cover.jpg";
import drMaitreyeeSarkar from "@/app/assets/doctorHeroBanner/Dr_Maitreyee_Sarkar_Website_cover.jpg";
import drSagarMantri from "@/app/assets/doctorHeroBanner/Dr_Sagar_Mantri_Website_cover.jpg";
import drMahendram from "@/app/assets/doctorHeroBanner/Dr_Mahendra_M_Website_cover.jpg";
import drKunalHaldar from "@/app/assets/doctorHeroBanner/Dr_Kunal_Haldar_Website_cover.jpg";

// Feature Images
import healthCheck from "@/app/assets/homeFeature/healthCheck.png";
import artLaboratories from "@/app/assets/homeFeature/artLaboratories.png";
import cancerScreening from "@/app/assets/homeFeature/cancerScreening.png";
import medicalProfessional from "@/app/assets/homeFeature/medicalProfessional.png";
import inHouseMedicine from "@/app/assets/homeFeature/inHouseMedicine.png";

export const heroBanners = [
  {
    id: 1,
    imageSrc: drBarunDutta,
    link: "/our-doctors/dr-barun-datta",
    altText: "Dr. Barun Dutta Banner",
  },
  {
    id: 2,
    imageSrc: drBBKumar,
    link: "/our-doctors/dr-bb-kumar",
    altText: "Dr. BB Kumar Banner",
  },
  {
    id: 3,
    imageSrc: drKundanKumar,
    link: "/our-doctors/dr-kundan-kumar",
    altText: "Dr. Kundan Kumar Banner",
  },
  {
    id: 4,
    imageSrc: drYRadhakrishna,
    link: "/our-doctors/dr-y-radhakrishna",
    altText: "Dr. Y Radhakrishna Banner",
  },
  {
    id: 5,
    imageSrc: drMaitreyeeSarkar,
    link: "/our-doctors/dr-maitreyee-sarkar",
    altText: "Dr. Maitreyee Sarkar Banner",
  },
  {
    id: 6,
    imageSrc: drSarwarHossain,
    link: "/our-doctors/dr-sarwar-hossain",
    altText: "Dr. Sarwar Hossain Banner",
  },
  // {
  //   id: 7,
  //   imageSrc: drSagarMantri,
  //   link: "/our-doctors/dr-sagar-mantri",
  //   altText: "Dr. Sagar Mantri Banner",
  // },
  {
     id: 8,
    imageSrc: drMahendram,
    link: "/our-doctors/dr-mahendra-m",
    altText: "Dr. Mahendram Banner",
  },
  {
    id:9,
    imageSrc: drKunalHaldar,
    link: "/our-doctors/dr-kunal-haldar",
    altText: "Dr. Kunal Haldar Banner",
  }
];

export const featuresData = [
  {
    title: "BRDC Comprehensive Health Check Up and Screening",
    desc: "Regular and thorough medical care and screenings are crucial for keeping the body healthy and avoiding long-term illnesses. Our Health Care and Screening services provide comprehensive support for improving health. They concentrate on detecting and preventing chronic conditions early, which can result in significant cost savings through early treatment. Moreover, we highlight lifestyle changes to improve general health and reduce potential health hazards. We are dedicated to assisting you in maintaining good health and being proactive about your well-being by providing a range of affordable healthcare resources.",
    btnText: "Book An Appointment",
    imgId: "point-no-1",
    imgSrc: healthCheck,
  },
  {
    title: "State of the Art Laboratories",
    desc: "The laboratories at BR Diagnostic Centre are staffed by highly trained and experienced professionals who are committed to providing accurate and timely results. The center is dedicated to using the latest technology to provide patients with the best possible care. Whether you need a routine check-up or a specialized test, you can be sure that the laboratories at BR Diagnostic Centre will provide you with the highest quality of care.",
    btnText: "Book An Appointment",
    imgId: "lab-img",
    imgSrc: artLaboratories,
  },
  {
    title: "Cancer screening and diagnosis",
    desc: "Cancer screening and diagnosis services aim to detect cancer early or confirm its presence in a patient, allowing for timely and appropriate treatment. At BR Diagnostic Centre, we understand the importance of early detection and timely treatment when it comes to cancer. That’s why we offer state-of-the-art cancer screening and diagnosis services to our patients, which includes Mammography, Colonoscopy, Pap Smear, Biopsy, Imaging, Blood Tests",
    btnText: "Book An Appointment",
    imgId: "cancer-diagnosis",
    imgSrc: cancerScreening,
  },
  {
    title: "Consultation with experienced medical professional",
    desc: "Provide medical care, diagnosis, and treatment for outpatients efficiently and affordably. The OPD service provided by B.R.D.C typically includes consultations with doctors, diagnostic tests, and treatment for a range of medical conditions. Patients can visit the polyclinic’s OPD for routine check-ups, minor illnesses, and chronic conditions that require ongoing management. The OPD service is staffed by a team of experienced doctors, nurses, and other healthcare professionals who work together to provide comprehensive care to patients",
    btnText: "Book An Appointment",
    imgId: "opd-img",
    imgSrc: medicalProfessional,
  },
  {
    title: "In house medicine facilities",
    desc: "We have Medical Shop that facilitates patients to purchase best medicine and health products with low price in the market. The shop is situated at the ground floor of our BRDC Building. We proudly manage our own warehousing operations that facilitate us to meet the daily medicine orders of our patients. It’s a one stop shop that offers effective Medical products, healthcare solutions to all those individuals who are health enthusiasts.",
    btnText: "Book An Appointment",
    imgId: "br-medicine",
    imgSrc: inHouseMedicine,
  },
];
