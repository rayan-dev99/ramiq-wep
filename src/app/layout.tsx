import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RAMIQ — جسر المعرفة والفرص",
  description: "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية متميزة. نمهد الطريق لشراكة تعليمية ملهمة وجهاً لوجه، لتجربة تستحق الانتظار.",
  openGraph: {
    title: "RAMIQ — جسر المعرفة والفرص",
    description: "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية متميزة.",
    url: "https://ramiq.com",
    siteName: "RAMIQ",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMIQ — جسر المعرفة والفرص",
    description: "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية متميزة.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${readexPro.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-text-main bg-white">
        {children}
      </body>
    </html>
  );
}
