"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenModal: () => void;
  countdownTarget: number;
}

export default function Navbar({ onOpenModal, countdownTarget }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update dynamic days badge
  useEffect(() => {
    const updateDays = () => {
      const difference = countdownTarget - new Date().getTime();
      if (difference > 0) {
        setDaysRemaining(Math.floor(difference / (1000 * 60 * 60 * 24)));
      }
    };
    updateDays();
    const interval = setInterval(updateDays, 3600000);
    return () => clearInterval(interval);
  }, [countdownTarget]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMobileMenuOpen]);

  const isVushPage = pathname === "/vush" || pathname === "/ramiq-vush";

  const navLinks = [
    { label: "الرئيسية", href: isVushPage ? "/" : "#hero" },
    { label: "عن RAMIQ", href: isVushPage ? "/#about" : "#about" },
    { label: "للطلاب", href: isVushPage ? "/#students" : "#students" },
    { label: "للمعلمين", href: isVushPage ? "/#teachers" : "#teachers" },
    { label: "RAMIQ VUSH", href: "/vush" },
    { label: "كيف يعمل", href: isVushPage ? "/#how-it-works" : "#how-it-works" },
    { label: "المميزات", href: isVushPage ? "/#features" : "#features" },
    { label: "الرؤية", href: isVushPage ? "/#vision" : "#vision" },
    { label: "الأسئلة الشائعة", href: isVushPage ? "/#faq" : "#faq" },
    { label: "تواصل معنا", href: isVushPage ? "/#contact" : "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border-custom py-3 shadow-sm-custom"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a href={isVushPage ? "/" : "#hero"} className="flex items-center gap-3 group">
            <svg
              width="36"
              height="36"
              viewBox="0 0 280 280"
              className="transition-transform duration-500 group-hover:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon fill="#0E766D" points="140,30 157,123 235,140 157,157 140,210 123,157 45,140 123,123" />
              <polygon fill="#FFFFFF" points="140,128 152,140 140,152 128,140" />
            </svg>
            <span className="font-sans font-bold text-xl tracking-tight text-text-main">RAMIQ</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-sub hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:height-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {daysRemaining > 0 && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-primary bg-accent/80 border border-primary/5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                متبقي {daysRemaining} يوماً على الإطلاق
              </span>
            )}
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 text-sm font-semibold bg-primary hover:bg-primary-hover text-white rounded-full shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[1px] transition-all duration-300"
            >
              تحميل التطبيق
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="افتح القائمة"
            className="lg:hidden p-2 rounded-full hover:bg-bg-sub transition-colors text-text-main"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-all duration-500 flex flex-col justify-center ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full rtl:-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6 py-20 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold text-text-sub hover:text-primary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          {daysRemaining > 0 && (
            <span className="mt-4 px-4 py-2 rounded-full text-xs font-semibold text-primary bg-accent/80">
              متبقي {daysRemaining} يوماً على الإطلاق
            </span>
          )}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full max-w-[280px] mt-6 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full shadow-md transition-all text-center"
          >
            تحميل التطبيق
          </button>
        </nav>
      </div>
    </>
  );
}
