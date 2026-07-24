import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramiq.net"),
  title: {
    default: "RAMIQ — جسر المعرفة والفرص | سوق تعليمي يربط الطلاب بمعلمين موثوقين",
    template: "%s | RAMIQ",
  },
  description: "RAMIQ هو سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية ومباشرة متميزة. نمهد الطريق لشراكة تعليمية ملهمة وجهاً لوجه.",
  keywords: ["RAMIQ", "رامق", "تطبيق رامق", "معلم خاص", "دروس خصوصية", "سوق تعليمي", "حجز معلم", "RAMIQ VUSH"],
  alternates: {
    canonical: "https://ramiq.net",
  },
  openGraph: {
    title: "RAMIQ — جسر المعرفة والفرص | سوق تعليمي يربط الطلاب بمعلمين موثوقين",
    description: "RAMIQ هو سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية ومباشرة متميزة.",
    url: "https://ramiq.net",
    siteName: "RAMIQ",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMIQ — جسر المعرفة والفرص",
    description: "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية متميزة.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ramiq.net/#organization",
      "name": "RAMIQ",
      "alternateName": ["رامق", "تطبيق رامق", "RAMIQ App"],
      "url": "https://ramiq.net",
      "logo": "https://ramiq.net/icon.svg",
      "description": "سوق تعليمي مبتكر يربط الطلاب بمعلمين موثوقين لحصص حضورية ومباشرة متميزة.",
      "email": "help@ramiq.net"
    },
    {
      "@type": "WebSite",
      "@id": "https://ramiq.net/#website",
      "url": "https://ramiq.net",
      "name": "RAMIQ",
      "alternateName": "رامق",
      "description": "سوق تعليمي يربط الطلاب بمعلمين موثوقين",
      "publisher": {
        "@id": "https://ramiq.net/#organization"
      },
      "inLanguage": "ar"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${readexPro.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-text-main bg-white">
        {children}
      </body>
    </html>
  );
}
