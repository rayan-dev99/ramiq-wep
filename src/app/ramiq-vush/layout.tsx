import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAMIQ VUSH — حجز معلم عاجل وشرح فوري للدروس",
  description: "خدمة RAMIQ VUSH تتيح للطلاب العثور الفوري على معلمين متاحين لحجز حصص تدريس عاجلة.",
  alternates: {
    canonical: "https://ramiq.net/vush",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RamiqVushLayout({ children }: { children: React.ReactNode }) {
  return children;
}
