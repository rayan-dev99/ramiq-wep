import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAMIQ VUSH — حجز معلم عاجل وشرح فوري للدروس",
  description: "خدمة RAMIQ VUSH تتيح للطلاب العثور الفوري على معلمين متاحين لحجز حصص تدريس عاجلة وحل عقبات الامتحانات، حضوريًا أو عبر الإنترنت.",
  alternates: {
    canonical: "https://ramiq.net/vush",
  },
  openGraph: {
    title: "RAMIQ VUSH — حجز معلم عاجل وشرح فوري للدروس",
    description: "خدمة RAMIQ VUSH تتيح للطلاب العثور الفوري على معلمين متاحين لحجز حصص تدريس عاجلة.",
    url: "https://ramiq.net/vush",
    siteName: "RAMIQ",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMIQ VUSH — حجز معلم عاجل وشرح فوري للدروس",
    description: "خدمة RAMIQ VUSH تتيح للطلاب العثور الفوري على معلمين متاحين لحجز حصص تدريس عاجلة.",
  },
};

const vushJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ramiq.net/vush/#service",
      "name": "RAMIQ VUSH",
      "serviceType": "Emergency Tutoring & Urgent Teacher Booking",
      "provider": {
        "@type": "Organization",
        "name": "RAMIQ",
        "url": "https://ramiq.net"
      },
      "description": "ميزة عاجلة تتيح للطلاب البحث الفوري عن معلمين متاحين لحجز حصص تدريس سريعة عند الحاجة."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ramiq.net/vush/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://ramiq.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "RAMIQ VUSH",
          "item": "https://ramiq.net/vush"
        }
      ]
    }
  ]
};

export default function VushLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vushJsonLd) }}
      />
      {children}
    </>
  );
}
