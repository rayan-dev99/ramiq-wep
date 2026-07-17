"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const ThreeDModel = dynamic(() => import("./ThreeDModel"), { ssr: false });

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
      className="relative pt-[160px] pb-[80px] min-h-[95vh] flex items-center justify-center bg-white z-10 overflow-hidden"
    >
      {/* Soft Top Radial Background */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(221,245,241,0.45)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* Premium 3D Educational Composition (Soft, ambient background ornament) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none opacity-[0.25] md:opacity-[0.4] transition-all duration-700">
        <div className="w-full max-w-[1200px] h-[800px] absolute translate-y-12">
          <ThreeDModel type="hero-composition" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Large Spark SVG Logo in Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <svg width="100" height="100" viewBox="0 0 280 280" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
            <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
            <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
          </svg>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight md:leading-snug max-w-[850px] mb-6"
        >
          اعثر على المعلم المناسب بسهولة، أو صل إلى طلاب جدد
        </motion.h1>

        {/* Human Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-text-sub max-w-[650px] leading-relaxed mb-10"
        >
          تطبيق RAMIQ هو سوق موثوق يربط الطلاب الباحثين عن المعلمين الخاصين بالمعلمين المستعدين لتقديم خبراتهم مباشرة. سواء كنت تبحث عن معلم لتغطية مادة دراسية محددة أو كنت معلماً ترغب في توسيع شبكة طلابك، يضمن لك RAMIQ تواصلًا سريعًا، حجزًا سهلاً، وتجربة آمنة.
        </motion.p>

        {/* CTA Button Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-14"
        >
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 bg-primary hover:bg-primary-hover text-white text-base font-semibold rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[2px] transition-all duration-300 flex items-center justify-center gap-3"
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
          className="w-full max-w-[500px] bg-white border border-border-custom p-6 rounded-3xl shadow-sm-custom mb-16"
        >
          <p className="text-xs font-semibold text-text-light tracking-wide mb-4 text-center">
            الوقت المتبقي لإطلاق التطبيق الرسمي
          </p>
          <div className="flex items-center justify-center gap-3 dir-ltr">
            <div className="flex flex-col items-center min-w-[65px]">
              <span className="text-2xl font-bold text-primary font-mono">{timeLeft.seconds}</span>
              <span className="text-[10px] text-text-sub mt-1 font-sans">ثواني</span>
            </div>
            <span className="text-xl font-bold text-border-focus pb-4 font-mono">:</span>
            <div className="flex flex-col items-center min-w-[65px]">
              <span className="text-2xl font-bold text-primary font-mono">{timeLeft.minutes}</span>
              <span className="text-[10px] text-text-sub mt-1 font-sans">دقائق</span>
            </div>
            <span className="text-xl font-bold text-border-focus pb-4 font-mono">:</span>
            <div className="flex flex-col items-center min-w-[65px]">
              <span className="text-2xl font-bold text-primary font-mono">{timeLeft.hours}</span>
              <span className="text-[10px] text-text-sub mt-1 font-sans">ساعات</span>
            </div>
            <span className="text-xl font-bold text-border-focus pb-4 font-mono">:</span>
            <div className="flex flex-col items-center min-w-[65px]">
              <span className="text-2xl font-bold text-primary font-mono">{timeLeft.days}</span>
              <span className="text-[10px] text-text-sub mt-1 font-sans">أيام</span>
            </div>
          </div>
        </motion.div>

        {/* Small Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-sub hover:text-primary text-xs font-medium transition-colors"
          >
            <span>اكتشف RAMIQ</span>
            <span className="text-base animate-bounce">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
