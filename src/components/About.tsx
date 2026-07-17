"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Compass } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <ShieldCheck size={28} className="text-primary" />,
      title: "طلاب يستحقون الأفضل",
      desc: "نحن نضع الجودة والأمان أولاً، لنضمن للطلاب العثور على معلمين مؤهلين تم التحقق من كفاءتهم وخلفيتهم وهويتهم بعناية فائقة.",
    },
    {
      icon: <GraduationCap size={28} className="text-primary" />,
      title: "معلمون يستحقون الفرصة",
      desc: "نؤمن بتمكين المعلمين وتوسيع شبكة طلابهم لتسهيل وصولهم إلى طلاب جدد وزيادة دخلهم بمرونة واستقلالية تامة.",
    },
    {
      icon: <Compass size={28} className="text-primary" />,
      title: "تبسيط مسار المعرفة",
      desc: "نهدف لتوظيف التقنية الذكية لجعل حجز الدروس، المقارنة بين المعلمين، والتنسيق المباشر أمراً في غاية السلاسة والراحة.",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-bg-sub z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            عن RAMIQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            لماذا قمنا ببناء RAMIQ؟
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            البحث عن المعلم المناسب لا يجب أن يكون معقداً. نسعى لتوظيف التكنولوجيا لربط الطلاب بالمعلمين وتسهيل عمليات الحجز والتواصل المباشر القائم على الثقة.
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-border-custom hover:border-border-focus rounded-2xl p-8 md:p-10 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{card.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
