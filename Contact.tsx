"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate server submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-sub z-10 border-t border-border-custom">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Contact Direct Info */}
          <div className="lg:col-span-5 text-right flex flex-col items-start">
            <span className="inline-block text-xs font-semibold text-primary bg-accent px-4 py-1.5 rounded-full mb-4">
              راسلنا
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-main leading-tight mb-4">
              تواصل معنا
            </h2>
            <p className="text-text-sub text-sm md:text-base leading-relaxed mb-8">
              هل لديك سؤال، استفسار حول خدماتنا، أو ترغب في إبداء ملاحظاتك ومقترحاتك حول سوقنا الرقمي؟ فريق RAMIQ جاهز للرد عليك وتلقي آرائك في أي وقت.
            </p>
            <div className="text-right">
              <p className="text-xs text-text-light font-medium">البريد الإلكتروني المباشر:</p>
              <a href="mailto:info@ramiq.com" className="text-lg font-bold text-primary hover:text-primary-hover hover:underline inline-block mt-2">
                info@ramiq.com
              </a>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-7 bg-white border border-border-custom p-8 md:p-10 rounded-3xl shadow-sm-custom hover:shadow-md-custom transition-all duration-300 relative overflow-hidden min-h-[420px] flex items-center justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 text-right">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold text-text-main">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 border border-border-custom rounded-xl bg-bg-sub text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-accent transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-text-main">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 border border-border-custom rounded-xl bg-bg-sub text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-accent transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-text-main">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 border border-border-custom rounded-xl bg-bg-sub text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-accent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-semibold rounded-xl shadow-sm-custom hover:shadow-md-custom hover:-translate-y-[1px] transition-all duration-300 text-center"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-accent text-primary flex items-center justify-center text-2xl font-bold shadow-sm-custom">
                  <Check size={28} strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-text-main">تم الإرسال بنجاح!</h4>
                  <p className="text-sm text-text-sub max-w-[320px] leading-relaxed mx-auto">
                    شكراً لتواصلك معنا. استلمنا رسالتك وسيقوم فريق الدعم أو التنسيق بالرد عليك عبر بريدك الإلكتروني في أقرب وقت.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
