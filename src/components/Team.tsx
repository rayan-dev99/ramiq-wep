"use client";

import { motion } from "framer-motion";
import { UserPlus, ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section className="relative py-24 bg-white z-10 border-t border-border-custom">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            فريق العمل
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            من يقف وراء الرؤية؟
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            مجموعة من الشغوفين بتطوير التقنية وتسهيل الوصول للمعرفة لبناء حلول تترك أثراً حقيقياً وتسهل حياة الطلاب والمعلمين.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border-custom hover:border-border-focus rounded-2xl p-8 md:p-10 text-center shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-accent-soft rounded-full flex items-center justify-center border border-border-custom overflow-hidden">
              <svg className="w-full h-full text-primary" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="48" fill="#F8FAFA" stroke="#E6EDEC" strokeWidth="1.5"/>
                <path d="M50 30 C58 30 64 36 64 44 C64 52 58 56 50 56 C42 56 36 52 36 44 C36 36 42 30 50 30 Z" fill="#0E766D" opacity="0.8"/>
                <path d="M25 80 C25 65 35 62 50 62 C65 62 75 65 75 80" fill="none" stroke="#0E766D" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-text-main mb-1.5">ريان المرعي</h3>
            <p className="text-sm text-text-sub font-medium">المؤسس ورؤية المنتج</p>
            <p className="text-xs text-text-light mt-1 font-sans">Founder & Product Vision</p>
          </motion.div>

          {/* Hiring / Join Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-accent-soft/30 border border-dashed border-primary/20 hover:border-primary/45 rounded-2xl p-8 md:p-10 text-center flex flex-col items-center justify-center min-h-[250px] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-border-custom flex items-center justify-center mb-5 text-primary shadow-sm-custom">
              <UserPlus size={24} />
            </div>
            <h3 className="text-lg font-bold text-text-main mb-2">انضم إلى فريقنا</h3>
            <p className="text-xs md:text-sm text-text-sub max-w-[280px] leading-relaxed mb-6">
              نبحث دائماً عن مصممي المنتجات ومطوري البرمجيات المبدعين والشغوفين بتمكين التواصل المعرفي وتسهيل مسارات التعلم لمشاركتنا رحلتنا.
            </p>
            <a
              href="#contact"
              className="group text-xs md:text-sm font-bold text-primary hover:text-primary-hover flex items-center gap-1.5 transition-colors duration-200"
            >
              <span>تواصل معنا الآن</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
