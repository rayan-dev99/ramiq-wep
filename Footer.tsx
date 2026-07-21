"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isVushPage = pathname === "/vush" || pathname === "/ramiq-vush";

  return (
    <footer className="relative bg-white pt-20 border-t border-border-custom z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-border-custom">
          
          {/* Brand & Description */}
          <div className="lg:col-span-5 flex flex-col items-start text-right">
            <div className="flex items-center gap-3 mb-6">
              <svg width="36" height="36" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
                <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
              </svg>
              <span className="font-sans font-bold text-xl text-text-main">RAMIQ</span>
            </div>
            <p className="text-text-sub text-sm leading-relaxed max-w-[380px]">
              مهمتنا هي تسهيل الاتصال بين الطلاب والمعلمين، وتمكين المعلمين من الوصول لجمهور أوسع وتقديم خبراتهم بكل سهولة وأمان، لبناء سوق موثوق يدعم النجاح المشترك.
            </p>
          </div>

          {/* Quick links block */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h5 className="text-sm font-bold text-text-main mb-2">التطبيق</h5>
              <a href={isVushPage ? "/" : "#hero"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">الرئيسية</a>
              <a href={isVushPage ? "/#about" : "#about"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">عن RAMIQ</a>
              <a href={isVushPage ? "/#how-it-works" : "#how-it-works"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">كيف نعمل</a>
              <a href="/vush" className="text-xs text-text-sub hover:text-primary transition-colors duration-300">RAMIQ VUSH</a>
            </div>

            <div className="flex flex-col gap-3">
              <h5 className="text-sm font-bold text-text-main mb-2">المجتمع</h5>
              <a href={isVushPage ? "/#students" : "#students"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">للطلاب</a>
              <a href={isVushPage ? "/#teachers" : "#teachers"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">للمعلمين</a>
              <a href={isVushPage ? "/#faq" : "#faq"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">الأسئلة الشائعة</a>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h5 className="text-sm font-bold text-text-main mb-2">القانونية</h5>
              <a href={isVushPage ? "/#privacy" : "#privacy"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">سياسة الخصوصية</a>
              <a href={isVushPage ? "/#terms" : "#terms"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">الشروط والأحكام</a>
              <a href={isVushPage ? "/#contact" : "#contact"} className="text-xs text-text-sub hover:text-primary transition-colors duration-300">اتصل بنا</a>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="py-8 bg-bg-sub/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          {/* Concluding sentence */}
          <p className="text-sm font-medium text-primary">
            دعونا نصنع مستقبلاً يربط الطلاب بالمعلمين بكل موثوقية وسهولة.
          </p>

          {/* Copyright info */}
          <p className="text-xs text-text-light font-sans">
            &copy; 2026 RAMIQ. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
