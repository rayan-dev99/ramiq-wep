"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqItems = [
    {
      q: "متى سيتم إطلاق RAMIQ؟",
      a: "سنطلق التطبيق رسمياً قريباً جداً. نعمل حالياً على وضع اللمسات الأخيرة للتأكد من تقديم تجربة ممتازة تليق بتطلعاتكم وتستحق وقتكم.",
    },
    {
      q: "هل التطبيق مجاني؟",
      a: "نعم، تحميل التطبيق وإنشاء الحساب سيكون مجانياً بالكامل لكل من الطلاب والمعلمين دون أي رسوم مخفية.",
    },
    {
      q: "هل يمكن تقديم دروس حضورية؟",
      a: "بالتأكيد. تدعم RAMIQ تنسيق الدروس الحضورية وجهاً لوجه في المكان المناسب الذي يتفق عليه الطالب والمعلم بمرونة تامة وأمان.",
    },
    {
      q: "أين تُعقد الدروس الحضورية عادةً؟",
      a: "تُعقد الدروس في المكان الذي يتفق عليه الطالب والمعلم بمرونة؛ مثل منزل الطالب، أو مساحة عمل مشتركة، أو مكتبة عامة تضمن بيئة هادئة ومناسبة للدرس.",
    },
    {
      q: "كيف يتم التحقق من المعلمين؟",
      a: "نقوم بمراجعة وتدقيق الشهادات الأكاديمية، والخبرات السابقة، والوثائق الرسمية لكل معلم يتقدم بطلب انضمام قبل تفعيل حسابه لضمان الموثوقية التامة.",
    },
    {
      q: "هل يمكن لطلاب الجامعات التدريس؟",
      a: "نعم، نرحب بطلاب الجامعات المتميزين أكاديمياً الذين يرغبون في تقديم خدماتهم التعليمية لمساعدة زملائهم أو الطلاب الأصغر سناً وتوسيع شبكتهم، بعد اجتيازهم لعمليات التحقق الخاصة بنا.",
    },
    {
      q: "هل سيتم دعم أكثر من لغة؟",
      a: "نعم، يدعم التطبيق تقديم الدروس بلغات متعددة (العربية، الإنجليزية، إلخ)، ولكن واجهة التطبيق الأولى مصممة لتجربة عربية استثنائية بالكامل.",
    },
    {
      q: "كيف يتم التواصل بين الطالب والمعلم؟",
      a: "يوفر التطبيق نظام محادثة وتواصل داخلي آمن وموثوق يسهل التنسيق والإجابة على الأسئلة دون الحاجة لمشاركة أرقام الهواتف أو البيانات الشخصية.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-white z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            استفسارات شائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            إجابات موجزة وسريعة عن التساؤلات الأكثر تداولاً حول تطبيق RAMIQ وآلية عمله قبل الإطلاق.
          </p>
        </div>

        {/* FAQ Accordion Wrapper */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-border-custom hover:border-border-focus rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm-custom hover:shadow-md-custom/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-right font-medium text-text-main text-base md:text-lg focus:outline-none"
                >
                  <span className={isOpen ? "text-primary font-bold" : "text-text-main"}>
                    {item.q}
                  </span>
                  <span className={`text-xl font-light text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-text-sub leading-relaxed border-t border-border-custom/30 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
