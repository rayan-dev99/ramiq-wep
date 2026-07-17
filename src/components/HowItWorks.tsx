"use client";

import { motion } from "framer-motion";
import { UserPlus, Users, Search, CalendarCheck, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <UserPlus size={22} className="text-primary" />,
      title: "أنشئ حسابك",
      desc: "خطوات بسيطة لإنشاء ملفك الشخصي عبر الهاتف وتأكيد معلوماتك الأساسية.",
    },
    {
      number: 2,
      icon: <Users size={22} className="text-primary" />,
      title: "حدد هويتك",
      desc: "حدد حسابك كطالب يبحث عن معلمين، أو كمعلم يرغب في تقديم خدماته واستقبال طلاب.",
    },
    {
      number: 3,
      icon: <Search size={22} className="text-primary" />,
      title: "ابحث عن معلم أو اعرض درسك",
      desc: "كطالب ابحث عن المعلم المناسب لاحتياجاتك؛ كمعلم اعرض دروسك وتخصصك المتاح للطلاب.",
    },
    {
      number: 4,
      icon: <CalendarCheck size={22} className="text-primary" />,
      title: "احجز درسًا أو اقبل الطلب",
      desc: "كطالب احجز درسًا بسهولة؛ كمعلم استقبل طلبات الحجز وأكّد الموعد بضغطة زر.",
    },
    {
      number: 5,
      icon: <GraduationCap size={22} className="text-primary" />,
      title: "ابدأ الدرس المباشر",
      desc: "التقِ بالمعلم حضوريًا أو عبر الإنترنت، وابدأ درسك المباشر في الموعد المحدد بكل سهولة.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-white z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            مسار الخطوات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            كيف تعمل RAMIQ؟
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            خطوات بسيطة وموثوقة تربط الطلاب بالمعلمين وتسهّل عملية حجز الدروس والاتصال المباشر.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Background Path Line */}
          <div className="absolute top-0 bottom-0 right-1/2 w-[2px] bg-border-custom translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`relative flex flex-col md:flex-row items-center md:justify-between z-10 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Card Content */}
                <div className="w-full md:w-[45%] bg-white border border-border-custom hover:border-border-focus p-6 md:p-8 rounded-2xl shadow-sm-custom hover:shadow-md-custom hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-accent-soft flex items-center justify-center mb-5 md:mx-0">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2 text-right">{step.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed text-right">{step.desc}</p>
                </div>

                {/* Step Badge Centered on path */}
                <div className="absolute right-1/2 top-10 w-9 h-9 rounded-full bg-white border-2 border-primary text-primary font-bold text-sm flex items-center justify-center translate-x-1/2 shadow-sm-custom z-20 hidden md:flex">
                  {step.number}
                </div>

                {/* Spacer block for flex layout alignment */}
                <div className="w-[45%] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
