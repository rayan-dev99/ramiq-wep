"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  countdownTarget: number;
}

export default function DownloadModal({ isOpen, onClose, countdownTarget }: DownloadModalProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    if (!isOpen) return;

    const calculateTimeLeft = () => {
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

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [isOpen, countdownTarget]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            role="dialog"
            aria-modal="true"
            className="relative w-[92%] max-w-[480px] bg-white border border-border-custom rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg-custom z-10 flex flex-col items-center text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="أغلق النافذة"
              className="absolute top-4 left-4 w-8 h-8 rounded-full bg-bg-sub text-text-sub hover:bg-border-custom hover:text-text-main flex items-center justify-center text-xl font-light transition-all duration-300"
            >
              ×
            </button>

            {/* Official RAMIQ Spark SVG Logo in modal */}
            <div className="mb-4 sm:mb-6 mt-2 sm:mt-0">
              <svg width="56" height="56" viewBox="0 0 280 280" className="mx-auto sm:w-[70px] sm:h-[70px]" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
                <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
              </svg>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3">قريبًا...</h3>
            <p className="text-text-sub text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 px-1">
              نعمل حاليًا على إنهاء اللمسات الأخيرة لإطلاق تطبيق RAMIQ. نعدك بتجربة تواصل وحجز دروس تستحق الانتظار.
            </p>

            {/* Countdown widget inside Modal */}
            <div className="w-full bg-bg-sub border border-border-custom rounded-2xl p-3 sm:p-5 mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-1.5 sm:gap-3 dir-ltr">
                <div className="flex flex-col items-center min-w-[42px] sm:min-w-[60px]">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono">{timeLeft.seconds}</span>
                  <span className="text-[10px] sm:text-xs text-text-sub mt-0.5 sm:mt-1 font-sans">ثواني</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-border-focus pb-3 sm:pb-5 font-mono">:</span>
                <div className="flex flex-col items-center min-w-[42px] sm:min-w-[60px]">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono">{timeLeft.minutes}</span>
                  <span className="text-[10px] sm:text-xs text-text-sub mt-0.5 sm:mt-1 font-sans">دقائق</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-border-focus pb-3 sm:pb-5 font-mono">:</span>
                <div className="flex flex-col items-center min-w-[42px] sm:min-w-[60px]">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono">{timeLeft.hours}</span>
                  <span className="text-[10px] sm:text-xs text-text-sub mt-0.5 sm:mt-1 font-sans">ساعات</span>
                </div>
                <span className="text-base sm:text-lg font-bold text-border-focus pb-3 sm:pb-5 font-mono">:</span>
                <div className="flex flex-col items-center min-w-[42px] sm:min-w-[60px]">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono">{timeLeft.days}</span>
                  <span className="text-[10px] sm:text-xs text-text-sub mt-0.5 sm:mt-1 font-sans">أيام</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 sm:py-3.5 bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-medium rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[1px] transition-all duration-300"
            >
              حسناً، سأنتظر
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
