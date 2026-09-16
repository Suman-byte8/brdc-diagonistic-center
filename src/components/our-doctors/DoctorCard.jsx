"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DoctorCard({ name, info, timing, date, href }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative pt-8 pb-6 px-4 border-2 border-green-600 rounded-2xl bg-white flex flex-col items-center text-center shadow-sm"
    >
      {/* Top Icon Badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-700 rounded-full flex items-center justify-center border-4 border-white shadow-md">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      </div>

      <h4 className="text-lg font-bold text-green-700 mb-2">
        {href ? (
          <Link href={href} className="hover:underline">
            {name}
          </Link>
        ) : (
          name
        )}
      </h4>
      {date && (
        <p className="text-[12px] text-green-600 font-bold mb-1">
          Date: {date}
        </p>
      )}
      <p className="text-[13px] text-red-700 font-medium leading-snug mb-1">
        {info}
      </p>
      {timing && (
        <p className="text-[12px] text-green-600 font-bold italic">
          {timing}
        </p>
      )}
    </motion.div>
  );
}