"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="relative py-28 bg-white z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large typography content */}
          <div className="lg:col-span-7 text-right">
            <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-6">
              رؤيتنا للمستقبل
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-tight mb-6">
              أين نرى التواصل التعليمي غداً؟
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-text-sub leading-relaxed font-light max-w-[620px]"
            >
              نسعى في <span className="font-semibold text-primary">RAMIQ</span> لتسهيل الاتصال المعرفي؛ حيث نرى مستقبلاً يجد فيه كل طالب معلمه المثالي خلال دقائق، ويصل فيه كل معلم إلى شبكة واسعة من الطلاب بكل سهولة وأمان.
            </motion.p>
          </div>

          {/* Minimal visual illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[340px] p-6 bg-bg-sub border border-border-custom rounded-3xl shadow-sm-custom"
            >
              <svg className="w-full h-auto mx-auto" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Winding journey path */}
                <path d="M30 150 C120 150 180 50 270 50" stroke="#0E766D" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M30 150 C120 150 180 50 270 50" stroke="#DDF5F1" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.3" />
                
                {/* Glowing points */}
                <circle cx="30" cy="150" r="10" fill="#0E766D" />
                <circle cx="270" cy="50" r="10" fill="#0E766D" />
                <circle cx="150" cy="100" r="7" fill="#DDF5F1" stroke="#0E766D" strokeWidth="2.5" />
                
                {/* Clean spark rays representing the logo motif */}
                <line x1="270" y1="50" x2="270" y2="20" stroke="#0E766D" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="270" y1="50" x2="295" y2="35" stroke="#0E766D" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="270" y1="50" x2="295" y2="65" stroke="#0E766D" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
