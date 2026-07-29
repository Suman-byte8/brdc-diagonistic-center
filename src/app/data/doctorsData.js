// src/app/data/dataDoctors.js
import bbkumar from "../assets/doctors/DR-B.B-Kumar.png";
import drbarundatta from "../assets/doctors/DR-Barun-Datta.png";
import drKundanKumar from "../assets/doctors/DR-Kundan-Kumar.png";
import drYRadhakrishna from "../assets/doctors/DR-Y-Radhakrishna.png";
import drMaitreyeeSarkar from "../assets/doctors/DR-Maitreyee-Sarkar.png";
import drSarwarHossain from "../assets/doctors/DR-Sarwar-Hossain.png";
import drSagarMantri from "../assets/doctors/DR-Sagar-Mantri.png";

export const doctorsData = [
  {
    category: "Gynecologists",
    doctors: [
      {
        name: "Dr. Mita Haldar (Ghosh)",
        info: "D.G.O., M.S., D.N.B.",
        timing: "(Daily)",
      },
      { name: "Dr. Rajmohan Ghosh", info: "D.G.O., M.S.", timing: "" },
      {
        name: "Dr. Souvik Das",
        info: "M.B.B.S (S.S.K.M), D.G.O (Kolkata Medical college)",
        timing: "",
      },
      {
        name: "Dr. Maitreyee Sarkar",
        info: "M.B.B.S, M.S (Kolkata Medical college)",
        timing: "",
      },
    ],
  },
  {
    category: "General Surgeons",
    doctors: [
      {
        name: "Dr. Raja Basak",
        info: "M.S. General and Laparoscopic Surgery, Assistant Professor, Raiganj Medical College",
        timing: "",
      },
    ],
  },
  {
    category: "General Physicians",
    doctors: [
      {
        name: "Dr. Rajiv Kumar",
        info: "M.B.B.S.",
        timing: "(Daily in the afternoon)",
      },
      { name: "Dr. Tanmoy Chaki", info: "M.B.B.S., M.D", timing: "" },
    ],
  },
  {
    category: "ENT Surgeons",
    doctors: [
      {
        name: "Dr. Kawsar Ahmed",
        info: "M.B.B.S., M.S. (ENT), PG Hospital",
        timing:
          "(Every Saturday, Sunday, Monday, Tuesday, and Wednesday ), 10 AM to 2 PM",
      },
    ],
  },
  // {
  //   category: "Neurologist",
  //   doctors: [
  //     {
  //       name: "Dr. Satyadeep Sarkar",
  //       info: "MBBS (Hons.), MD (International Medicine), MD (Neuro), P.D.T",
  //       timing: "",
  //     },
  //   ],
  // },
  {
    category: "Urologists",
    doctors: [
      {
        name: "Dr. Kundan Kumar",
        info: "M.B.B.S., M.S., Ex-Senior Resident A.I.I.M.S., New Delhi M.Ch Urology",
        timing: "",
      },
      // {
      //   name: "Dr. Bappana Venkata Bhargava",
      //   info: "Onco-Urologist, M.B.B.S., M.S., M.Ch (Urology), Dual fellowship in Robotic Surgery",
      //   timing: "",
      // },
    ],
  },
  {
    category: "Rehumatologist",
    doctors: [
      {
        name: "Dr. B.B. Kumar",
        info: "M.B.B.S, M.D, General Medicine, FIPM, Fellowship in Rehumatology (John Hopkins University)",
        timing: "",
      },
    ],
  },
  // {
  //   category: "Cardiac Surgeons",
  //   doctors: [
  //     {
  //       name: "Dr. Kaushik Mukherjee",
  //       info: "M.I.C.G., B.A.B.G., Heart Surgery",
  //       timing: "",
  //     },
  //   ],
  // },
  // {
  //   category: "Cardiologist",
  //   doctors: [
  //     {
  //       name: "Dr. Shekhar Das",
  //       info: "M.B.B.S., M.D. (Cardiologist)",
  //       timing: "",
  //     },
  //   ],
  // },
  {
    category: "Gastroenterologists",
    doctors: [
      {
        name: "Dr. Y. Radhakrishna",
        info: "M.D. Medicine (PGI), D.M. Gastroenterology (SGPGI), Fellow in Transplant Hepatology (New York, USA), Fellow in Therapeutic Endoscopy, La Paz, South America",
        timing: "",
      },
    ],
  },

  {
    category: "Oncologist",
    doctors: [
      {
        name: "Dr. Arnab Roy",
        info: "M.B.B.S., M.D. (Oncologist Specialist)",
        timing: "",
      },
    ],
  },
  {
    category: "Pediatricians",
    doctors: [
      {
        name: "Dr. Shubhajit De",
        info: "M.B.B.S., M.D. (Pediatrics), Pediatrician and Neonatologist, Attached with Institute of Child Health, Kolkata",
        timing: "",
      },
      {
        name: "Dr. MD Sarwar Hossain",
        info: "Doctor of Medicine (MD) in Paediatrics",
        timing: "",
      },
    ],
  },
  {
    category: "Orthopedic Surgeon",
    doctors: [
      {
        name: "Dr. Barun Dutta",
        info: "Master Of Surgery, Diplomat of National Board",
        timing: "",
      },
      {
        name: "Dr. Jishan Azad",
        info: "M.B.B.S., M.S. (Orthopaedics)",
        timing: "",
      },
    ],
  },
  // Add other categories like Oncologist, Orthopedic etc. following same pattern
];

export const detailedDoctors = [
  // Barun Dutta
  {
    slug: "dr-barun-datta",
    name: "Dr. Barun Datta",
    displayName: "BRIGADIER DR. BARUN DATTA",
    specialty: "SENIOR ORTHOPAEDIC SURGEON",
    credentials: [
      { name: "MBBS", type: "normal" },
      { name: "MS (Orthopaedics)", type: "normal" },
      { name: "DNB (Orthopaedics)", type: "normal" },
      { name: "Arthroplasty Fellow (Australia)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "27+ Years Experience" },
      { icon: "military_tech", text: "Retd. Brigadier, AFMC Pune" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "23rd August 2026",
      time: "10:00 AM to 12:00 PM",
      displayDate: "23rd August 2026 (Sunday)",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Brigadier Dr. Barun Datta will be available for consultation at B.R Diagnostic Center, Malda on <strong>23rd August 2026</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Joint Replacement Consultation",
        label: "Joint Replacement Consultation",
      },
      { value: "Pain Management", label: "Pain Management" },
    ],
    concernAreas: [
      "Knee Pain",
      "Hip Pain",
      "Back/Spine Pain",
      "Fracture",
      "Arthritis",
      "Other",
    ],
    medicalHistory: {
      label: "Any Previous Surgeries?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      { icon: "school", title: "MBBS, MS, DNB", subtitle: "Medical Graduate" },
      {
        icon: "military_tech",
        title: "Retd. Brigadier",
        subtitle: "AFMC Pune",
      },
      { icon: "public", title: "Arthroplasty Fellow", subtitle: "Australia" },
    ],
    specializations: [
      { icon: "skeleton", title: "Joint Replacement" },
      { icon: "accessibility_new", title: "Spine & Back Disorders" },
      { icon: "healing", title: "Fractures & Sports Injuries" },
      { icon: "medical_services", title: "Arthritis & Bone Degeneration" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "High-precision Joint Replacements" },
      { icon: "check_circle", title: "Complex Bone Disorders" },
    ],
    avatar: drbarundatta,
  },

  // BB Kumar

  {
    slug: "dr-bb-kumar",
    name: "Dr. B.B. Kumar",
    displayName: "DR. B.B. KUMAR",
    specialty: "GENERAL PHYSICIAN | RHEUMATOLOGIST",
    credentials: [
      { name: "MBBS", type: "normal" },
      { name: "MD - General Medicine", type: "normal" },
      { name: "Rheumatology Training (USA)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "17+ Years Experience" },
      { icon: "local_hospital", text: "Wellness Plus Polyclinic, Pune" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "30th August 2026",
      time: "8:30 AM to 11:30 AM",
      displayDate: "30th August 2026 (Sunday)",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Dr. B.B. Kumar will be available for consultation at B.R Diagnostic Center, Malda on <strong>30th August 2026</strong> from <strong>8:30 AM onwards</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Rheumatology Consultation",
        label: "Rheumatology Consultation",
      },
      { value: "Pain Management", label: "Pain Management" },
      { value: "General Health Checkup", label: "General Health Checkup" },
    ],
    concernAreas: [
      "Joint Pain",
      "Arthritis",
      "Back Pain",
      "Fever/Infection",
      "Diabetes",
      "Hypertension",
      "Other",
    ],
    medicalHistory: {
      label: "Any Chronic Conditions?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      {
        icon: "school",
        title: "MBBS, MD (General Medicine)",
        subtitle: "Medical Graduate",
      },
      { icon: "public", title: "Rheumatology Training", subtitle: "USA" },
      {
        icon: "verified",
        title: "Medical Registration Verified",
        subtitle: "17+ Years Experience",
      },
    ],
    specializations: [
      { icon: "medical_services", title: "General Medicine" },
      { icon: "skeleton", title: "Rheumatology" },
      { icon: "healing", title: "Pain Management" },
      { icon: "accessibility_new", title: "Movement Disorders" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "Arthritis & Autoimmune Diseases" },
      { icon: "check_circle", title: "Diabetes & Hypertension Control" },
    ],
    avatar: bbkumar,
  },

  // Kundan Kumar

  {
    slug: "dr-kundan-kumar",
    name: "Dr. Kundan Kumar",
    displayName: "DR. KUNDAN KUMAR",
    specialty: "UROLOGIST",
    credentials: [
      { name: "MBBS", type: "normal" },
      { name: "MS (General Surgery)", type: "normal" },
      { name: "MCh (Urology)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "15+ Years Experience" },
      { icon: "local_hospital", text: "Ex-SR AIIMS" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "1st August 2026",
      time: "08:30 AM to 10:30 AM",
      displayDate: "1st August 2026 (Saturday)",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Dr. Kundan Kumar will be available for consultation at B.R Diagnostic Center, Malda on <strong>1st August 2026</strong> from <strong>8:30 AM onwards</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      { value: "Urology Consultation", label: "Urology Consultation" },
    ],
    concernAreas: [
      "Kidney Stone",
      "Urinary Issues",
      "Prostate Problem",
      "Bladder Pain",
      "Infertility",
      "Other",
    ],
    medicalHistory: {
      label: "Any Previous Surgeries?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      { icon: "school", title: "MBBS, MS, MCh", subtitle: "Medical Graduate" },
      { icon: "local_hospital", title: "Ex-SR AIIMS", subtitle: "New Delhi" },
      {
        icon: "verified",
        title: "Medical Registration Verified",
        subtitle: "15+ Years Experience",
      },
    ],
    specializations: [
      { icon: "water_drop", title: "Kidney & Ureteric Stones" },
      { icon: "wc", title: "Prostate Enlargement (BPH)" },
      { icon: "healing", title: "Urinary Tract Infections" },
      { icon: "medical_services", title: "Bladder Disorders" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "Advanced Urological Procedures" },
      { icon: "check_circle", title: "Male Infertility & Renal Transplants" },
    ],
    avatar: drKundanKumar,
  },

  // Y Radhakrishna

  {
    slug: "dr-y-radhakrishna",
    name: "Dr. Y. Radhakrishna",
    displayName: "DR. Y. RADHAKRISHNA",
    specialty: "GASTROENTEROLOGIST",
    credentials: [
      { name: "MBBS", type: "normal" },
      { name: "MD (General Medicine)", type: "normal" },
      { name: "DM (Gastroenterology)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "22+ Years Experience" },
      { icon: "medical_services", text: "Digestive & Liver Care" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "22nd August 2026",
      time: "8:00 AM onwards",
      displayDate: "22nd August 2026 (Saturday)",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Dr. Y. Radhakrishna will be available for consultation at B.R Diagnostic Center, Malda on <strong>22nd August 2026</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Gastroenterology Consultation",
        label: "Gastroenterology Consultation",
      },
      { value: "Liver Care", label: "Liver Care" },
    ],
    concernAreas: [
      "Stomach Pain",
      "Acid Reflux/Acidity",
      "Liver Issues",
      "Digestion Problem",
      "Bleeding",
      "Other",
    ],
    medicalHistory: {
      label: "Any Chronic Conditions?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      { icon: "school", title: "MBBS, MD, DM", subtitle: "Medical Graduate" },
      {
        icon: "verified",
        title: "Medical Registration Verified",
        subtitle: "22+ Years Experience",
      },
    ],
    specializations: [
      { icon: "medical_services", title: "Liver Diseases" },
      { icon: "healing", title: "Pancreatic Disorders" },
      { icon: "local_hospital", title: "Acid Reflux (GERD)" },
      { icon: "bloodtype", title: "GI Bleeding" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "IBD & IBS Management" },
      { icon: "check_circle", title: "Digestive Cancers" },
    ],
    avatar: drYRadhakrishna,
  },

  // maitreyee sarkar

  {
    slug: "dr-maitreyee-sarkar",
    name: "Dr. Maitreyee Sarkar",
    displayName: "DR. MAITREYEE SARKAR",
    specialty: "OBSTETRICS & GYNAECOLOGY",
    credentials: [
      { name: "MS", type: "normal" },
      // { name: "DGO", type: "normal" },
      // { name: "DNB (Gastroenterology)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "5+ Years Experience" },
      { icon: "medical_services", text: "Obstetrics & Gynaecology" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "Every Sunday, Monday, Tuesday, Wednesday",
      time: "9.30 AM Onwards",
      displayDate: "Every Sunday, Monday, Tuesday, Wednesday",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Dr. Maitreyee Sarkar will be available for consultation at B.R Diagnostic Center, Malda on <strong>Every Sunday, Monday, Tuesday, Wednesday, from 9.30 AM onwards</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Obstetrics & Gynaecology Consultation",
        label: "Obstetrics & Gynaecology Consultation",
      },
    ],
    concernAreas: [
      "Pregnancy Care",
      "Menstrual Irregularities",
      "PCOS",
      "Infertility",
      "Menopause",
      "Other",
    ],
    medicalHistory: {
      label: "Any Chronic Conditions?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      { icon: "school", title: "MBBS, MD, DM", subtitle: "Medical Graduate" },
      {
        icon: "verified",
        title: "Medical Registration Verified",
        subtitle: "5+ Years Experience",
      },
    ],
    specializations: [
      { icon: "medical_services", title: "Pregnancy Care" },
      { icon: "healing", title: "Menstrual Irregularities" },
      { icon: "local_hospital", title: "PCOS" },
      { icon: "bloodtype", title: "Infertility" },
      { icon: "medical_services", title: "Menopause" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "High-Risk Pregnancies" },
      { icon: "check_circle", title: "Laparoscopic Surgeries" },
    ],
    avatar: drMaitreyeeSarkar,
  },

  // sarwar hossain

  {
    slug: "dr-sarwar-hossain",
    name: "Dr. Sarwar Hossain",
    displayName: "DR. SARWAR HOSSAIN",
    specialty: "PEDIATRICS & NEONATOLOGY",
    credentials: [
      { name: "MD Pediatrics", type: "normal" },
      { name: "PGPN (Boston University, USA)", type: "normal" },
      { name: "Ex-AIIMS Kalyani", type: "highlight" },
    ],
    metaItems: [
      { icon: "workspace_premium", text: "Ex-AIIMS Kalyani" },
      { icon: "medical_services", text: "Pediatrician & Neonatologist" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "Monday to Saturday",
      time: "8.00 AM to 12.00 PM",
      displayDate: "Everyday (Except Sunday)",
    },
    notice: {
      title: "Special Pediatric Consultation Camp at Malda",
      text: "Dr. Sarwar Hossain will be available for consultation at B.R Diagnostic Center, Malda on <strong>Everyday except Sunday, from 8.00 AM to 12.00 PM</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Pediatric Consultation",
        label: "Pediatric Consultation",
      },
      {
        value: "Vaccination",
        label: "Vaccination",
      },
    ],
    concernAreas: [
      "Newborn Care",
      "Vaccination",
      "Growth Monitoring",
      "Childhood Illnesses",
      "General Pediatrics",
      "Other",
    ],
    medicalHistory: {
      label: "Any Chronic Conditions?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      {
        icon: "school",
        title: "MBBS (Hons.), MD",
        subtitle: "Medical Graduate",
      },
      {
        icon: "verified",
        title: "PGPN",
        subtitle: "Boston University, USA",
      },
    ],
    specializations: [
      { icon: "child_care", title: "Child Specialist" },
      { icon: "baby_changing_station", title: "Newborn Care Expert" },
      { icon: "vaccines", title: "Vaccination" },
      { icon: "monitor_weight", title: "Growth Monitoring" },
      { icon: "health_and_safety", title: "Trusted Pediatric Consultation" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "Neonatology" },
      { icon: "check_circle", title: "Advanced Pediatric Care" },
    ],
    avatar: drSarwarHossain,
  },

  // Sagar Mantri

  {
    slug: "dr-sagar-mantri",
    name: "Dr. Sagar Mantri",
    displayName: "DR. SAGAR MANTRI",
    specialty: "GASTROENTEROLOGIST",
    credentials: [
      { name: "MBBS", type: "normal" },
      { name: "MD (General Medicine)", type: "normal" },
      { name: "DM (Gastroenterology)", type: "highlight" },
    ],
    metaItems: [
      { icon: "work_history", text: "5+ Years Experience" },
      { icon: "medical_services", text: "Digestive & Liver Care" },
    ],
    hospital: "B.R Diagnostic Center",
    location: {
      name: "B.R Diagnostic Center - Malda",
      address: "B.R Diagnostic Center",
      city: "Malda, West Bengal",
    },
    appointment: {
      date: "28th June 2026",
      time: "8:00 AM onwards",
      displayDate: "28th June 2026 (Sunday)",
    },
    notice: {
      title: "Special Consultation Camp at Malda",
      text: "Dr. Sagar Mantri will be available for consultation at B.R Diagnostic Center, Malda on <strong>28th June 2026</strong>. Book your slot now!",
    },
    appointmentTypes: [
      { value: "", label: "Select Type" },
      { value: "First Consultation", label: "First Consultation" },
      { value: "Follow-up Visit", label: "Follow-up Visit" },
      {
        value: "Gastroenterology Consultation",
        label: "Gastroenterology Consultation",
      },
      { value: "Liver Care", label: "Liver Care" },
    ],
    concernAreas: [
      "Stomach Pain",
      "Acid Reflux/Acidity",
      "Liver Issues",
      "Digestion Problem",
      "Bleeding",
      "Other",
    ],
    medicalHistory: {
      label: "Any Chronic Conditions?",
      name: "procedure_history",
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No", checked: true },
      ],
    },
    trustCredentials: [
      { icon: "school", title: "MBBS, MD, DM", subtitle: "Medical Graduate" },
      {
        icon: "verified",
        title: "Medical Registration Verified",
        subtitle: "5+ Years Experience",
      },
    ],
    specializations: [
      { icon: "medical_services", title: "Liver Diseases" },
      { icon: "healing", title: "Pancreatic Disorders" },
      { icon: "local_hospital", title: "Acid Reflux (GERD)" },
      { icon: "bloodtype", title: "GI Bleeding" },
    ],
    specialtyInterests: [
      { icon: "check_circle", title: "IBD & IBS Management" },
      { icon: "check_circle", title: "Digestive Cancers" },
    ],
    avatar: drSagarMantri,
  },
];
