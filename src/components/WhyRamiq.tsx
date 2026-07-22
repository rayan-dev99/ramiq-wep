"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhyRamiq() {
  const comparisons = [
    {
      criterion: "البحث عن معلم",
      ramiq: "فوري، مبني على التخصص الدقيق والتقييمات الحقيقية والموقع الجغرافي.",
      traditional: "يعتمد بالكامل على التوصيات العشوائية والبحث الشفهي لعدة أيام.",
    },
    {
      criterion: "جدولة المواعيد",
      ramiq: "جدول تفاعلي ذكي يمنع تعارض الحصص ويرسل تذكيرات تلقائية.",
      traditional: "تنسيق يدوي معقد مكالمة بمكالمة وعرضة للنسيان والخطأ والتعارض.",
    },
    {
      criterion: "مرونة مكان الدروس",
      ramiq: "تنسيق مرن وآمن لمكان الدرس (حضوريًا في المكان المناسب أو عبر الإنترنت).",
      traditional: "موقع ثابت يفرضه المعلم غالباً دون مراعاة لظروف الطالب أو راحته الجغرافية.",
    },
    {
      criterion: "التواصل الآمن",
      ramiq: "نظام تواصل مدمج وآمن يحمي خصوصية البيانات الشخصية للأطراف.",
      traditional: "مشاركة أرقام الهواتف الشخصية دون حماية للمعلومات والخصوصية.",
    },
    {
      criterion: "مقياس الجودة والثقة",
      ramiq: "مراجعات وتقييمات مستقلة وشفافة من طلاب حقيقيين تساعدك في الاختيار والمقارنة.",
      traditional: "غياب كامل للمراجعات، والاعتماد فقط على التوصيات الشفهية.",
    },
  ];

  return (
    <section id="why-ramiq" className="relative py-24 bg-white z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            لماذا RAMIQ؟
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            الفارق في تجربة البحث والتواصل
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            نسعى لتسهيل وصول الطلاب إلى معلمين متميزين، وتخفيف عناء البحث والتنسيق عبر توفير تجربة حجز رقمية متكاملة.
          </p>
        </div>

        {/* Comparison Table on Desktop */}
        <div className="hidden md:block overflow-x-auto border border-border-custom rounded-3xl shadow-sm-custom bg-white">
          <table className="w-full text-right border-collapse min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-bg-sub border-b border-border-custom">
                <th className="p-6 text-sm font-semibold text-text-main w-[20%]">المعيار</th>
                <th className="p-6 text-sm font-semibold text-primary bg-accent-soft w-[40%] border-r border-border-custom/50">
                  مع تطبيق RAMIQ
                </th>
                <th className="p-6 text-sm font-semibold text-text-sub w-[40%] border-r border-border-custom/50">
                  الدروس الخصوصية التقليدية
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-border-custom last:border-0 hover:bg-bg-sub/30 transition-colors duration-200"
                >
                  <td className="p-6 text-sm font-bold text-text-main bg-bg-sub/40">{row.criterion}</td>
                  <td className="p-6 text-sm font-medium text-primary bg-accent-soft/30 border-r border-border-custom/50">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{row.ramiq}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-text-sub border-r border-border-custom/50">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-text-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X size={12} strokeWidth={3} />
                      </span>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Staggered Cards on Mobile Screens */}
        <div className="md:hidden space-y-6">
          {comparisons.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border-custom rounded-2xl p-6 shadow-sm-custom"
            >
              <h4 className="font-bold text-text-main text-base border-b border-border-custom pb-3 mb-4">
                {row.criterion}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-accent-soft/40 p-3.5 rounded-xl border border-primary/5">
                  <span className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-primary mb-1">RAMIQ</h5>
                    <p className="text-xs text-text-main leading-relaxed">{row.ramiq}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-bg-sub p-3.5 rounded-xl border border-border-custom/50">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-text-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} strokeWidth={3} />
                  </span>
                  <div>
                    <h5 className="text-xs font-bold text-text-sub mb-1">الدروس التقليدية</h5>
                    <p className="text-xs text-text-sub leading-relaxed">{row.traditional}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
