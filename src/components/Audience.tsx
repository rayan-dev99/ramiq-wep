"use client";

import { motion } from "framer-motion";
import {
  Search,
  Laptop,
  Home,
  Calendar,
  Layers,
  UserCheck,
  Smartphone,
  Sparkles,
  Globe,
  BookOpen,
  TrendingUp,
  MapPin,
  Monitor,
  Coins,
  Clock,
} from "lucide-react";
import dynamic from "next/dynamic";

const ThreeDModel = dynamic(() => import("./ThreeDModel"), { ssr: false });

export default function Audience() {
  const studentFeatures = [
    {
      icon: <Search size={22} className="text-primary" />,
      title: "العثور على معلمين موثوقين",
      desc: "ابحث وقارن بين نخبة من المعلمين المعتمدين والموثوقين لتجد الأنسب لاحتياجاتك بدقة.",
    },
    {
      icon: <BookOpen size={22} className="text-primary" />,
      title: "تنوع المواد والمهارات",
      desc: "الوصول إلى معلمين مستعدين لمساعدتك في مختلف المواد الدراسية، اللغات، والمهارات المتنوعة.",
    },
    {
      icon: <Home size={22} className="text-primary" />,
      title: "الدروس الحضورية أو عبر الإنترنت",
      desc: "احجز دروساً حضوريًا وجهاً لوجه أو عبر الإنترنت بالتنسيق المباشر والمرن مع المعلم.",
    },
    {
      icon: <Calendar size={22} className="text-primary" />,
      title: "احجز درسًا بسهولة",
      desc: "جدول تفاعلي يتيح لك اختيار الأوقات المتاحة لدى المعلم وحجزها فورًا دون تعقيد.",
    },
    {
      icon: <Layers size={22} className="text-primary" />,
      title: "مقارنة المعلمين",
      desc: "اطّلع على تقييمات وخبرات المعلمين واختر الأنسب لمستواك وميزانيتك.",
    },
    {
      icon: <UserCheck size={22} className="text-primary" />,
      title: "ملفات تعريف شفافة",
      desc: "ملفات تعريفية متكاملة للمعلمين تستعرض خبراتهم، تقييمات الطلاب، وأسعارهم بكل شفافية لمساعدتك في الاختيار.",
    },
    {
      icon: <Smartphone size={22} className="text-primary" />,
      title: "سوق رقمي مبسط",
      desc: "واجهة مريحة خالية من التعقيد لتبحث وتقارن وتحجز مع معلمك الخاص بضغطة زر.",
    },
    {
      icon: <Sparkles size={22} className="text-primary" />,
      title: "الوصول إلى أفضل المعلمين",
      desc: "اعثر على المعلم الأقرب إليك أو اتصل بأفضل الكفاءات والخبرات الأكاديمية عبر الإنترنت.",
    },
  ];

  const teacherFeatures = [
    {
      icon: <Globe size={22} className="text-primary" />,
      title: "وسع شبكة طلابك",
      desc: "افتح آفاقاً جديدة واعرض دروسك لجذب طلاب يبحثون عن خبرتك وتخصصك الخاص.",
    },
    {
      icon: <BookOpen size={22} className="text-primary" />,
      title: "إدارة الحجوزات والطلبات",
      desc: "نظام ذكي لإدارة جدول تواجدك، استقبال طلبات الطلاب، وإدارة حجوزاتك بكل مرونة.",
    },
    {
      icon: <TrendingUp size={22} className="text-primary" />,
      title: "بناء السمعة المهنية",
      desc: "احصل على تقييمات ومراجعات حقيقية من الطلاب بعد كل درس لبناء ملف تعريفي قوي يجذب حجوزات أكثر.",
    },
    {
      icon: <MapPin size={22} className="text-primary" />,
      title: "الدروس حضورية أو عن بعد",
      desc: "حرية كاملة لتقديم حصص مباشرة حضوريًا أو عبر الإنترنت بالتنسيق المباشر مع الطالب.",
    },
    {
      icon: <Sparkles size={22} className="text-primary" />,
      title: "سوق مهني آمن",
      desc: "سوق رقمي يقدّر دور المعلم ويسهل لك التنسيق مع الطلاب والاتصال بهم في بيئة آمنة وموثوقة.",
    },
    {
      icon: <Coins size={22} className="text-primary" />,
      title: "تنمية الدخل المستقل",
      desc: "تلقى مدفوعاتك بأمان، وحوّل خبرتك التعليمية إلى فرص دخل إضافية مجزية بأسعارك الخاصة.",
    },
    {
      icon: <Clock size={22} className="text-primary" />,
      title: "التحكم في أوقاتك",
      desc: "انشر أوقات تواجدك المتاحة وتحكم بجدولك الأسبوعي بالكامل دون أي شروط أو التزامات مقيدة.",
    },
  ];

  return (
    <>
      {/* SECTION: FOR STUDENTS */}
      <section id="students" className="relative py-24 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex flex-col items-start lg:sticky lg:top-28"
            >
              <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
                خاص بالطلاب
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                للطلاب
              </h2>
              <p className="text-text-sub text-sm md:text-base leading-relaxed mb-8">
                RAMIQ هو سوقك الرقمي الموثوق للعثور على المعلم الأنسب لاحتياجاتك. نقرب لك المسافات لتجد المعلمين وتتواصل معهم وتحجز حصصك بكل مرونة وأمان.
              </p>
              <div className="border-r-2 border-primary pr-4 py-1.5 italic text-sm md:text-base text-primary font-medium">
                «ابحث، قارن، واحجز درسك مع المعلم المناسب في دقائق معدودة وبكل ثقة.»
              </div>
              
              {/* Premium 3D Objects for Student Journey (Desktop-only, subtle, calm) */}
              <div className="hidden lg:flex w-full h-[180px] items-center justify-around gap-4 mt-8 select-none pointer-events-none">
                <div className="w-[120px] h-[120px]">
                  <ThreeDModel type="notebook" scrollOffset={0.1} />
                </div>
                <div className="w-[120px] h-[120px]">
                  <ThreeDModel type="lesson-card" scrollOffset={0.15} />
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {studentFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-border-custom hover:border-border-focus rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-text-main text-base mb-2">{feat.title}</h4>
                  <p className="text-text-sub text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: FOR TEACHERS */}
      <section id="teachers" className="relative py-24 bg-bg-sub z-10 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Sidebar Info (Order swap on desktop for visual progression) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 lg:order-last flex flex-col items-start lg:sticky lg:top-28"
            >
              <span className="inline-block text-xs font-semibold text-text-main bg-border-custom px-4 py-1.5 rounded-full mb-4">
                خاص بالمعلمين
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                للمعلمين
              </h2>
              <p className="text-text-sub text-sm md:text-base leading-relaxed mb-8">
                تطبيق RAMIQ يفتح لك الباب للوصول إلى الطلاب الباحثين عن مهاراتك وخبراتك. نوفر لك الأدوات والجدولة المرنة لإدارة حجوزاتك، واستقبال الطلبات، وتنمية دخلك بشكل مستقل وبوقار تام.
              </p>
              <div className="border-r-2 border-primary pr-4 py-1.5 italic text-sm md:text-base text-primary font-medium">
                «اعرض درسك، حدد جدولك، واستقبل طلبات جديدة من الطلاب بشروطك الخاصة وبكل سهولة.»
              </div>

              {/* Premium 3D Objects for Teacher Journey (Desktop-only, subtle, calm) */}
              <div className="hidden lg:flex w-full h-[180px] items-center justify-around gap-4 mt-8 select-none pointer-events-none">
                <div className="w-[120px] h-[120px]">
                  <ThreeDModel type="laptop" scrollOffset={0.2} />
                </div>
                <div className="w-[120px] h-[120px]">
                  <ThreeDModel type="calendar" scrollOffset={0.25} />
                </div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teacherFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white border border-border-custom hover:border-border-focus rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-text-main text-base mb-2">{feat.title}</h4>
                  <p className="text-text-sub text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
