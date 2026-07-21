"use client";

import { motion } from "framer-motion";

export default function Features() {
  const phases = [
    {
      num: "01",
      title: "محطة الأمان والموثوقية",
      desc: "الأساس المتين لضمان سلامة وأمان الاتصال المباشر بين الطلاب والمعلمين.",
      highlight: false,
      items: [
        { num: "01", title: "معلمون موثوقون", desc: "ندقق بدقة هوية وخلفية كل معلم لنضمن لك العثور على معلم موثوق والتعاقد معه بأمان." },
        { num: "09", title: "ملفات تعريف واضحة", desc: "صفحات شخصية للمعلمين تستعرض خبراتهم، تقييمات الطلاب، وأسعارهم بكل شفافية لمساعدتك في الاختيار والمقارنة." },
        { num: "10", title: "خصوصية وأمان", desc: "تشفير البيانات وتأمين التواصل الداخلي لخصوصية وسرية فائقة لجميع الأطراف." },
      ]
    },
    {
      num: "02",
      title: "محطة التنسيق والجدولة",
      desc: "أدوات ذكية تسهل حجز الدروس وتضمن جدولة مرنة تتناسب مع احتياجاتك وظروف يومك.",
      highlight: true,
      items: [
        { num: "04", title: "سهولة البحث", desc: "اعثر على المعلم المناسب عبر فلاتر بحث تعتمد على المادة، الموقع، التقييم، وأوقات التواجد." },
        { num: "07", title: "تنظيم المواعيد", desc: "نظام جدولة يتيح للطلاب حجز الأوقات المتاحة لدى المعلمين وتجنب أي تعارض في المواعيد." },
        { num: "02", title: "الدروس حضورية", desc: "احجز حصصًا حضورية وجهاً لوجه لتعلم مباشر وتفاعل حقيقي مع معلمك الخاص." },
        { num: "03", title: "مرونة مكان الدرس", desc: "حرية تامة للاتفاق على مكان وموقع الحصص الحضورية بالتنسيق المباشر بين الطرفين." }
      ]
    },
    {
      num: "03",
      title: "محطة التجربة اليومية",
      desc: "تفاصيل برمجية دقيقة مصممة لتوفير واجهات مريحة وتنبيهات مستمرة.",
      highlight: false,
      items: [
        { num: "05", title: "واجهة بسيطة", desc: "سوق رقمي بتصميم بسيط يركز على تيسير البحث، المقارنة، وحجز الدروس دون تعقيد." },
        { num: "06", title: "تجربة حديثة", desc: "تقنيات متطورة تتماشى مع إيقاع الحياة السريعة وتضمن اتصالاً سريعاً وموثوقاً بين الطلاب والمعلمين." },
        { num: "08", title: "إشعارات ذكية", desc: "تنبيهات فورية تذكرك بمواعيد الدروس المحجوزة، وتحديثات طلبات الحجز، والرسائل الجديدة." }
      ]
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-bg-sub z-10 overflow-hidden border-t border-border-custom">
      
      {/* Subtle background curved decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="#0E766D" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            محطات الرحلة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            مميزات متكاملة لتجربة تواصل وحجز سلسة
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            RAMIQ هو سوق رقمي متكامل يجمع الطلاب بالمعلمين ويسهل عمليات البحث والحجز والتواصل المباشر بأمان ومرونة.
          </p>
        </div>

        {/* Phase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start pt-6">
          {phases.map((phase, pIdx) => (
            <motion.div
              key={pIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: pIdx * 0.1 }}
              className={`flex flex-col gap-6 lg:gap-8 p-6 md:p-8 rounded-3xl border transition-all duration-500 ${
                phase.highlight
                  ? "bg-accent-soft/30 border-primary/20 shadow-md-custom lg:-translate-y-4"
                  : "bg-white/60 border-border-custom shadow-sm-custom"
              }`}
            >
              {/* Phase Header */}
              <div className="flex flex-col items-start text-right">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-xs font-bold mb-4 shadow-sm-custom">
                  {phase.num}
                </span>
                <h3 className="text-lg font-bold text-text-main mb-2">{phase.title}</h3>
                <p className="text-text-sub text-xs leading-relaxed mb-4">{phase.desc}</p>
                <div className="w-full h-[1px] bg-border-custom/50 my-1" />
              </div>

              {/* Items List */}
              <div className="flex flex-col gap-4">
                {phase.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="group flex gap-4 p-5 rounded-2xl border border-border-custom/40 bg-white/85 hover:bg-white hover:border-border-focus hover:shadow-sm-custom hover:-translate-y-[2px] transition-all duration-300 text-right"
                  >
                    <span className="text-xs font-bold text-primary bg-accent/60 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-text-main text-sm mb-1 group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-text-sub text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
