"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  BookOpen,
  CalendarCheck,
  Search,
  MapPin,
  Check,
  ShieldCheck,
  Award,
  Briefcase,
  Zap,
  Users,
  HelpCircle
} from "lucide-react";
import DownloadModal from "@/components/DownloadModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VushPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdownTarget, setCountdownTarget] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Synchronize countdown target with main page
  useEffect(() => {
    localStorage.removeItem("ramiq_launch_date");
    let target = localStorage.getItem("ramiq_launch_date_v2");
    if (!target) {
      const now = new Date();
      const future = new Date(now.getTime() + 8 * 24 * 60 * 60 * 1000);
      target = future.toISOString();
      localStorage.setItem("ramiq_launch_date_v2", target);
    }
    setCountdownTarget(new Date(target).getTime());
  }, []);

  const handleDiscoverClick = () => {
    setIsExpanded(true);
    setTimeout(() => {
      document.getElementById("vush-students")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleHowItWorksClick = () => {
    setIsExpanded(true);
    setTimeout(() => {
      document.getElementById("vush-how-it-works")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const studentCards = [
    {
      icon: <Clock size={22} className="text-primary" />,
      title: "هل لديك اختبار غدًا؟",
      desc: "عندما يداهمك الوقت وتشعر أنك بحاجة لشرح سريع لأجزاء غامضة أو مسائل معقدة في المنهج الدراسي."
    },
    {
      icon: <Zap size={22} className="text-primary" />,
      title: "هل بقيت ساعات قليلة؟",
      desc: "لا داعي للقلق أو التردد، ابحث عن معلم متاح في أسرع وقت لتقديم الفائدة العاجلة وتخطي العقبات."
    },
    {
      icon: <Search size={22} className="text-primary" />,
      title: "ابحث عن معلم متاح الآن",
      desc: "نظام البحث الفوري يعرض لك المعلمين المستعدين لتقديم الدروس في محيطك الجغرافي أو عبر الإنترنت."
    },
    {
      icon: <CalendarCheck size={22} className="text-primary" />,
      title: "اختر الأنسب واحجز مباشرة",
      desc: "قارن بين التخصصات والتقييمات، ثم أرسل طلب حجز فوري دون تعقيد أو انتظار طويل."
    }
  ];

  const teacherCards = [
    {
      icon: <Clock size={22} className="text-primary" />,
      title: "استغل ساعتك الفارغة",
      desc: "هل لديك ساعة فارغة بين دروسك اليومية أو بعد انتهاء العمل؟ فعّل وضع VUSH وساعد طالبًا يحتاجك الآن."
    },
    {
      icon: <Briefcase size={22} className="text-primary" />,
      title: "حرية الاختيار والتحكم الكامل",
      desc: "أنت صاحب القرار في تحديد أوقات توفرك، وتقبل فقط الطلبات التي تناسب جدولك وموقعك الجغرافي."
    },
    {
      icon: <Award size={22} className="text-primary" />,
      title: "تقدير حقيقي وخبرة وقورة",
      desc: "التدريس قيمة معرفية سامية. RAMIQ VUSH يحافظ على هيبة مكانتك ويسهل تواصلك مع الطلاب المستعدين لحجز حصصك."
    }
  ];

  const workflowSteps = [
    {
      number: 1,
      icon: <HelpCircle size={22} className="text-primary" />,
      title: "حاجة الطالب للمساعدة العاجلة",
      desc: "يواجه الطالب تحديًا تعليميًا طارئًا أو لديه اختبار قريب ويحتاج إلى شرح سريع ومركّز."
    },
    {
      number: 2,
      icon: <Search size={22} className="text-primary" />,
      title: "البحث الفوري عبر RAMIQ VUSH",
      desc: "يقوم الطالب بتصفح التطبيق مستعينًا بخاصية البحث السريع لمعرفة المتاحين حالاً."
    },
    {
      number: 3,
      icon: <Users size={22} className="text-primary" />,
      title: "ظهور المعلمين المتوفرين",
      desc: "تظهر قائمة بالمعلمين الذين قاموا بتفعيل وضع التفرغ والمستعدين للشرح في نفس اللحظة."
    },
    {
      number: 4,
      icon: <Check size={22} className="text-primary" />,
      title: "اختيار المعلم وإرسال الطلب",
      desc: "يحدد الطالب المعلم الأنسب له بناءً على التفاصيل والتقييمات، ويرسل طلب الدرس مباشرة."
    },
    {
      number: 5,
      icon: <CalendarCheck size={22} className="text-primary" />,
      title: "قبول المعلم الفوري للطلب",
      desc: "يتلقى المعلم إشعارًا بالطلب العاجل ويقوم بالموافقة عليه لتأكيد الحصة بنقرة واحدة."
    },
    {
      number: 6,
      icon: <BookOpen size={22} className="text-primary" />,
      title: "بدء الدرس والتفاعل المباشر",
      desc: "ينطلق الدرس فورًا، حضوريًا وجهاً لوجه أو عبر الإنترنت حسب ما تم التنسيق والاتفاق عليه."
    }
  ];

  const whyVushFeatures = [
    { title: "شرح سريع قبل الاختبار", desc: "إنقاذ اللحظات الأخيرة وحل المسائل الصعبة قبل الامتحان بثقة وتفوق." },
    { title: "معلمون متاحون", desc: "الوصول السريع إلى كفاءات علمية معتمدة مستعدة للتدريس فورًا." },
    { title: "دروس حضورية", desc: "إمكانية اللقاء المباشر وجهاً لوجه لتعلم أعمق وفهم أكثر تفاعلية." },
    { title: "دروس عبر الإنترنت", desc: "خيار رقمي مرن يسهل اللقاء والشرح الافتراضي أينما كنت." },
    { title: "حجز بسيط", desc: "خطوات معدودة لتأكيد الموعد دون الحاجة لجدولة مسبقة معقدة." },
    { title: "تجربة سريعة", desc: "واجهة سريعة الاستجابة صُممت خصيصًا للحالات التعليمية مستعجلة." },
    { title: "مرونة كاملة", desc: "حرية التنسيق وتحديد تفاصيل اللقاء بما يوافق ظروف الطالب والمعلم." },
    { title: "حرية اختيار المعلم", desc: "يتيح للطالب مقارنة واختيار المعلم الأفضل لتخصصه وميزانيته." },
    { title: "حرية قبول أو رفض الطلب", desc: "لا إجبار أو قيود؛ المعلم يملك كامل الصلاحية لقبول ما يناسبه فقط." }
  ];

  return (
    <div className="relative w-full min-h-screen bg-white text-text-main overflow-x-hidden">
      
      {/* Dynamic Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} countdownTarget={countdownTarget} />

      <main className="relative z-10 w-full">
        
        {/* VUSH Hero Section */}
        <section
          id="vush-hero"
          className="relative pt-[160px] pb-[80px] min-h-[90vh] flex items-center justify-center bg-white z-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(221,245,241,0.45)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7 flex flex-col items-start text-right"
              >
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-primary bg-accent/80 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  ميزة RAMIQ VUSH العاجلة
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight md:leading-snug max-w-[650px] mb-6">
                  هل تحتاج شرحًا عاجلاً؟ لا تضيع وقتك في البحث.. احجز معلمك الآن!
                </h1>
                <p className="text-base md:text-lg text-text-sub max-w-[580px] leading-relaxed mb-10">
                  يساعدك RAMIQ VUSH في العثور على معلم متميز ومتاح خلال وقت قصير جدًا. سواء كنت تفضل حضور الدرس حضوريًا أو عبر الإنترنت، يمكنك التنسيق المباشر والبدء فورًا حسب اتفاق الطرفين لإنقاذ المواقف التعليمية الحرجة.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    onClick={handleDiscoverClick}
                    className="group px-8 py-4 bg-primary hover:bg-primary-hover text-white text-base font-semibold rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <span>اكتشف RAMIQ VUSH</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:-translate-x-1.5 animate-pulse" />
                  </button>
                  <button
                    onClick={handleHowItWorksClick}
                    className="px-8 py-4 bg-white border border-border-custom hover:border-border-focus text-text-main hover:text-primary text-base font-semibold rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[2px] transition-all duration-300 text-center"
                  >
                    كيف تعمل؟
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center w-full"
              >
                <div className="relative w-full max-w-[450px] aspect-square rounded-3xl overflow-hidden border border-border-custom shadow-md-custom bg-bg-sub/30 flex items-center justify-center">
                  <img
                    src="/vush_hero_illustration.png"
                    alt="RAMIQ VUSH Hero Illustration"
                    className="object-contain w-full h-full max-h-[400px] p-4"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Collapsible content container */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              
              {/* THE STUDENT STORY */}
              <section id="vush-students" className="relative py-24 bg-bg-sub z-10 border-t border-border-custom">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28 text-right"
                    >
                      <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
                        قصة الطالب
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                        غدًا موعد الامتحان؟ لا داعي للذعر.
                      </h2>
                      <p className="text-text-sub text-sm md:text-base leading-relaxed mb-6">
                        تخيل الموقف: تراجع دروسك ليلاً وتكتشف فجأة أنك لا تستوعب مفهوماً أساسياً، والامتحان في الصباح. بدلاً من القلق، يفتح تطبيق RAMIQ VUSH لك أبواب الحلول الفورية والمنظمة.
                      </p>
                      
                      <div className="border-r-2 border-primary pr-4 py-1.5 italic text-sm md:text-base text-primary font-medium mb-6">
                        «بدلاً من التشتت والبحث العشوائي، يربطك VUSH فورًا بمعلم متفرغ وجاهز لمساعدتك بكفاءة واطمئنان.»
                      </div>

                      <div className="w-full p-4 rounded-2xl bg-white border border-border-custom text-xs text-text-sub leading-relaxed">
                        <span className="font-bold text-primary block mb-1">تنبيه هام حول الخدمة:</span>
                        نحن لا نضمن التواجد اللحظي الدائم في كل ثانية أو نعد بأوقات استجابة مستحيلة، ولكننا نساعدك في العثور على معلمين متاحين في أقرب وقت ممكن.
                      </div>
                    </motion.div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {studentCards.map((card, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          className="bg-white border border-border-custom hover:border-border-focus rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-right"
                        >
                          <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-4">
                            {card.icon}
                          </div>
                          <h4 className="font-bold text-text-main text-base mb-2">{card.title}</h4>
                          <p className="text-text-sub text-xs leading-relaxed">{card.desc}</p>
                        </motion.div>
                      ))}

                      <div className="sm:col-span-2 p-5 bg-accent/40 border border-primary/5 rounded-2xl flex items-center gap-3">
                        <MapPin size={22} className="text-primary flex-shrink-0" />
                        <p className="text-xs text-text-main leading-relaxed text-right">
                          تتم اللقاءات والدروس <strong>حضوريًا وجهاً لوجه</strong> أو <strong>عبر الإنترنت</strong>، وذلك حسب الاتفاق المباشر والمرن بين الطالب والمعلم بما يناسب رغبة الطرفين.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* THE TEACHER STORY */}
              <section id="vush-teachers" className="relative py-24 bg-white z-10 border-t border-border-custom">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-4 lg:order-last flex flex-col items-start lg:sticky lg:top-28 text-right"
                    >
                      <span className="inline-block text-xs font-semibold text-text-main bg-border-custom px-4 py-1.5 rounded-full mb-4">
                        قصة المعلم
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                        لديك وقت إضافي؟ حول وقتك إلى فرصة.
                      </h2>
                      <p className="text-text-sub text-sm md:text-base leading-relaxed mb-6">
                        هل انتهيت من جدولك اليومي مبكراً؟ أو هل ألغيت حصة ولديك ساعة فراغ غير متوقعة؟ بدلاً من إضاعة الوقت، افتح تطبيق RAMIQ وفعّل وضع **RAMIQ VUSH**.
                      </p>
                      <div className="border-r-2 border-primary pr-4 py-1.5 italic text-sm md:text-base text-primary font-medium mb-6">
                        «بمجرد تفعيل وضع VUSH، تصبح مرئيًا للطلاب الباحثين عن شرح عاجل في تخصصك، مما يتيح لك تحقيق عوائد إضافية بوقار وهيبة.»
                      </div>
                      <p className="text-xs text-text-sub leading-relaxed">
                        ميزة VUSH مصممة لتوقر مكانة المعلم؛ فالتدريس قيمة ثمينة وليس عملاً مؤقتاً أو عشوائياً. لك الحرية المطلقة في قبول أو رفض الطلبات، وإلغاء تنشيط وضع التوفر في أي وقت.
                      </p>
                    </motion.div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {teacherCards.map((card, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: idx * 0.05 }}
                          className="bg-bg-sub border border-border-custom hover:border-border-focus rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-right"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white border border-border-custom flex items-center justify-center mb-4">
                            {card.icon}
                          </div>
                          <h4 className="font-bold text-text-main text-base mb-2">{card.title}</h4>
                          <p className="text-text-sub text-xs leading-relaxed">{card.desc}</p>
                        </motion.div>
                      ))}

                      <div className="sm:col-span-3 p-5 bg-accent/40 border border-primary/5 rounded-2xl flex items-center gap-3">
                        <ShieldCheck size={22} className="text-primary flex-shrink-0" />
                        <p className="text-xs text-text-main leading-relaxed text-right">
                          التحكم الكامل بجدولك وأسلوب تدريسك يظل تحت تصرفك دائمًا. يمكنك إيقاف استقبال الطلبات العاجلة بنقرة واحدة في التطبيق دون أي التزامات مفروضة.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* HOW RAMIQ VUSH WORKS */}
              <section id="vush-how-it-works" className="relative py-24 bg-bg-sub z-10 border-t border-border-custom overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  
                  <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
                      مسار الخطوات العاجلة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                      كيف يعمل RAMIQ VUSH؟
                    </h2>
                    <p className="text-text-sub text-sm md:text-base leading-relaxed">
                      خطوات سريعة وسلسة تربطك بالمعلم المتاح في الوقت المناسب دون تعقيد.
                    </p>
                  </div>

                  <div className="relative max-w-3xl mx-auto mt-12">
                    <div className="absolute top-0 bottom-0 right-1/2 w-[2px] bg-border-custom translate-x-1/2 z-0 hidden md:block" />

                    <div className="space-y-12 md:space-y-16">
                      {workflowSteps.map((step, idx) => (
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
                          <div className="w-full md:w-[45%] bg-white border border-border-custom hover:border-border-focus p-6 md:p-8 rounded-2xl shadow-sm-custom hover:shadow-md-custom hover:-translate-y-0.5 transition-all duration-300">
                            <div className="w-11 h-11 rounded-lg bg-accent-soft flex items-center justify-center mb-5 mr-0 ml-auto md:mx-0">
                              {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-text-main mb-2 text-right">{step.title}</h3>
                            <p className="text-text-sub text-sm leading-relaxed text-right">{step.desc}</p>
                          </div>

                          <div className="absolute right-1/2 top-10 w-9 h-9 rounded-full bg-white border-2 border-primary text-primary font-bold text-sm flex items-center justify-center translate-x-1/2 shadow-sm-custom z-20 hidden md:flex">
                            {step.number}
                          </div>

                          <div className="w-[45%] hidden md:block" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* WHY RAMIQ VUSH */}
              <section id="why-vush" className="relative py-24 bg-white z-10 border-t border-border-custom">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
                      مميزات الخدمة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
                      لماذا تختار RAMIQ VUSH؟
                    </h2>
                    <p className="text-text-sub text-sm md:text-base leading-relaxed">
                      سرعة حجز وتنسيق آمن ومرونة غير محدودة للطرفين.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {whyVushFeatures.map((feat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="group bg-white border border-border-custom hover:border-border-focus rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 text-right"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 mt-1">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-bold text-text-main text-base mb-2 group-hover:text-primary transition-colors duration-300">
                            {feat.title}
                          </h4>
                          <p className="text-text-sub text-xs leading-relaxed">
                            {feat.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </section>

              {/* PROMOTIONAL BANNER */}
              <section className="relative py-16 bg-white z-10">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-primary to-primary-hover text-white rounded-3xl p-8 md:p-14 text-center shadow-lg-custom overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 opacity-[0.08] pointer-events-none translate-x-12 -translate-y-12">
                      <svg width="350" height="350" viewBox="0 0 280 280" fill="white">
                        <polygon points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
                      </svg>
                    </div>

                    <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-white/20 px-3.5 py-1 rounded-full mb-6">
                      RAMIQ VUSH
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                      عندما لا يحتمل الوقت الانتظار... RAMIQ VUSH جاهز للمساعدة.
                    </h2>
                    <p className="text-sm md:text-base text-accent-soft/90 max-w-[650px] mx-auto leading-relaxed">
                      المواقف التعليمية الحرجة تتطلب حلولاً ذكية وبسيطة وسريعة في ذات الوقت. نجمع لك سرعة اللقاء بجودة وتدقيق المعلمين، لتتفرغ للنجاح فقط دون قلق وتشتت.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* CALL TO ACTION SECTION */}
              <section id="vush-cta" className="relative py-24 bg-bg-sub z-10 border-t border-border-custom">
                <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
                  
                  <div className="mb-6">
                    <svg width="70" height="70" viewBox="0 0 280 280" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
                      <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
                      <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
                    </svg>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-text-main mb-4"
                  >
                    جاهز عندما تحتاجه.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-sm md:text-base text-text-sub max-w-[620px] leading-relaxed mb-8"
                  >
                    سواء كنت طالبًا يحتاج إلى شرح سريع، أو معلمًا يرغب في استثمار وقت فراغه، فإن RAMIQ VUSH يمنحك طريقة أبسط للالتقاء في الوقت المناسب.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-8 py-4 bg-primary hover:bg-primary-hover text-white text-base font-semibold rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      تحميل التطبيق
                    </button>
                  </motion.div>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Pre-launch Download modal */}
      {countdownTarget > 0 && (
        <DownloadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          countdownTarget={countdownTarget}
        />
      )}
      
    </div>
  );
}


