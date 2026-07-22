"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Sparkles,
  TrendingUp,
  Heart,
  Lightbulb,
  Leaf,
  Users,
  Compass,
  Book,
} from "lucide-react";

export default function Values() {
  const corePillars = [
    {
      icon: <Handshake size={28} className="text-primary" />,
      title: "الثقة المتبادلة",
      desc: "الأساس المتين الذي نبني عليه كل تفاعل وحوار وتعامل داخل تطبيقنا لضمان الموثوقية.",
    },
    {
      icon: <Heart size={28} className="text-primary" />,
      title: "الاحترام والوقار",
      desc: "نقدر قيمة المعرفة المشتركة، ونحفظ خصوصية وأمان المعلم والطالب في المقام الأول.",
    },
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: "الابتكار البسيط",
      desc: "تطويع أحدث التقنيات لربط الطلاب بالمعلمين بسلاسة وإزالة التعقيد والخطوات الزائدة في البحث والحجز.",
    },
  ];

  const supportingValues = [
    {
      icon: <Sparkles size={20} className="text-primary" />,
      title: "الجودة والأمان",
      desc: "نسعى لتقديم تجربة استثنائية من خلال تدقيق واعتماد المعلمين بدقة متناهية.",
    },
    {
      icon: <TrendingUp size={20} className="text-primary" />,
      title: "التطوير المستمر",
      desc: "نؤمن بتمكين الأفراد من تطوير مهاراتهم والعثور على التوجيه المناسب لمواكبة متمتطلبات العصر الحديث.",
    },
    {
      icon: <Leaf size={20} className="text-primary" />,
      title: "بساطة الإجراءات",
      desc: "تصميم واجهات مستخدم واضحة تضمن الوصول للمطلوب دون تشتيت أو تعقيد.",
    },
    {
      icon: <Users size={20} className="text-primary" />,
      title: "شبكة تواصل موثوقة",
      desc: "بيئة تجمع الطلاب بالمعلمين وتدعم التعاون المباشر ومشاركة الخبرات بكل موثوقية وأمان.",
    },
    {
      icon: <Compass size={20} className="text-primary" />,
      title: "سهولة البحث والاتصال",
      desc: "تذليل عقبات التنسيق الجغرافية والبحث التقليدي لتجد المعلم المناسب لك في أسرع وقت.",
    },
    {
      icon: <Book size={20} className="text-primary" />,
      title: "تمكين المعرفة",
      desc: "دعم المعلمين لمشاركة خبراتهم ودعم الطلاب للوصول للأكاديميين والخبراء بكل حرية واستقلالية.",
    },
  ];

  return (
    <section className="relative py-24 bg-bg-sub z-10 border-t border-border-custom">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
            المبادئ والأخلاق
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
            القيم التي نوجه بها قراراتنا
          </h2>
          <p className="text-text-sub text-sm md:text-base leading-relaxed">
            في RAMIQ، نتحرك وفق بوصلة قيمية متينة تسهل سبل التواصل والتعاقد بين الطلاب والمعلمين.
          </p>
        </div>

        {/* Tier 1: Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
          {corePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white border border-border-custom hover:border-primary/20 rounded-3xl p-8 md:p-10 shadow-md-custom hover:shadow-lg-custom hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start text-right overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-main mb-3">{pillar.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed mb-4">{pillar.desc}</p>
              
              {/* Highlight line decoration */}
              <div className="absolute bottom-0 right-0 left-0 h-[3.5px] bg-primary/20 group-hover:bg-primary transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Separator Heading */}
        <div className="flex items-center gap-4 mb-10 w-full">
          <h4 className="text-xs font-bold text-text-light tracking-wider uppercase whitespace-nowrap">
            مبادئ تدعم تجربتنا اليومية
          </h4>
          <div className="w-full h-[1px] bg-border-custom/60" />
        </div>

        {/* Tier 2: Supporting Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {supportingValues.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/75 border border-border-custom/50 hover:border-border-focus rounded-2xl p-6 md:p-8 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-start text-right"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-5 mr-0 ml-auto">
                {val.icon}
              </div>
              <h4 className="font-bold text-text-main text-base mb-2">{val.title}</h4>
              <p className="text-text-sub text-xs leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
