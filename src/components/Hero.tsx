"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
interface HeroProps {
  onOpenModal: () => void;
  countdownTarget: number;
}

export default function Hero({ onOpenModal, countdownTarget }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = countdownTarget - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      const format = (num: number) => String(num).padStart(2, "0");

      setTimeLeft({
        days: format(d),
        hours: format(h),
        minutes: format(m),
        seconds: format(s),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [countdownTarget]);

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-36 md:pt-[160px] pb-10 sm:pb-16 md:pb-[80px] w-full flex items-center justify-center bg-white z-10 overflow-hidden"
    >
      {/* Soft Top Radial Background */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(221,245,241,0.45)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        {/* Large Spark SVG Logo in Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 sm:mb-8"
        >
          <svg className="w-16 h-16 sm:w-24 sm:h-24 mx-auto" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
            <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
          </svg>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight md:leading-snug max-w-[850px] mb-4 sm:mb-6 px-1 sm:px-0"
        >
          اعثر على المعلم المناسب بسهولة، أو صل إلى طلاب جدد
        </motion.h1>

        {/* Human Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-text-sub max-w-[650px] leading-relaxed mb-6 sm:mb-10 px-1 sm:px-0"
        >
          تطبيق RAMIQ هو سوق موثوق يربط الطلاب الباحثين عن المعلمين الخاصين بالمعلمين المستعدين لتقديم خبراتهم مباشرة. سواء كنت تبحث عن معلم لتغطية مادة دراسية محددة أو كنت معلماً ترغب في توسيع شبكة طلابك، يضمن لك RAMIQ تواصلًا سريعًا، حجزًا سهلاً، وتجربة آمنة.
        </motion.p>

        {/* CTA Button Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 sm:mb-14"
        >
          <button
            onClick={onOpenModal}
            className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3"
          >
            <span>تحميل التطبيق</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          </button>
        </motion.div>

        {/* Hero Countdown Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[440px] sm:max-w-[500px] bg-white border border-border-custom p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm-custom mb-8 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs font-semibold text-text-light tracking-wide mb-3 sm:mb-4 text-center">
            الوقت المتبقي لإطلاق التطبيق الرسمي
          </p>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 dir-ltr max-w-[340px] sm:max-w-none mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold text-primary font-mono">{timeLeft.seconds}</span>
              <span className="text-[9px] sm:text-[10px] text-text-sub mt-0.5 sm:mt-1 font-sans">ثواني</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold text-primary font-mono">{timeLeft.minutes}</span>
              <span className="text-[9px] sm:text-[10px] text-text-sub mt-0.5 sm:mt-1 font-sans">دقائق</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold text-primary font-mono">{timeLeft.hours}</span>
              <span className="text-[9px] sm:text-[10px] text-text-sub mt-0.5 sm:mt-1 font-sans">ساعات</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold text-primary font-mono">{timeLeft.days}</span>
              <span className="text-[9px] sm:text-[10px] text-text-sub mt-0.5 sm:mt-1 font-sans">أيام</span>
            </div>
          </div>
        </motion.div>

        {/* Small Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-2 sm:mt-4"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-text-sub hover:text-primary text-xs font-medium transition-colors"
          >
            <span>اكتشف RAMIQ</span>
            <span className="text-base animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
