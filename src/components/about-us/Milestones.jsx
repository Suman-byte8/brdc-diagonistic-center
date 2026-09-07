"use client";

import { motion } from "framer-motion";
import { milestonesData } from "@/app/data/aboutData";

export default function Milestones() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-green-700 inline-block border-b-4 border-green-500 pb-2 mb-20"
        >
          Milestones Achieved By Us
        </motion.h2>

        <div className="relative">
          {/* THE FIX: Adjusted top position and z-index */}
          {/* This line now sits at 40px (center of the 80px icon) */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-10 left-0 w-full h-1 bg-red-400 z-0 hidden md:block origin-left"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12 relative z-10"
          >
            {milestonesData.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                {/* ICON BOX: Added relative z-10 and solid bg-white to "cut" the red line */}
                <div className="relative z-10 w-20 h-20 bg-white border-2 border-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-8 transition-transform hover:scale-110">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 bg-white px-2">
                   <p className="text-gray-600 text-sm leading-relaxed mb-10 h-20 flex items-center justify-center italic max-w-[280px]">
                    &quot;{item.text}&quot;
                  </p>
                </div>

                {/* YEAR BUBBLE */}
                <div className="relative z-10 bg-green-700 text-white text-2xl font-black px-10 py-3 rounded-full border-4 border-white shadow-lg">
                  {item.year}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Vertical Line */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #f87171;
            z-index: 0;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}