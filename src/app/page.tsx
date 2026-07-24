"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhyRamiq from "@/components/WhyRamiq";
import Values from "@/components/Values";
import Vision from "@/components/Vision";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";
import JourneyPath from "@/components/JourneyPath";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdownTarget, setCountdownTarget] = useState<number>(0);

  // Set or retrieve target countdown date on mount (8 days in future)
  useEffect(() => {
    localStorage.removeItem("ramiq_launch_date");
    localStorage.removeItem("ramiq_launch_date_v2");
    
    let target = localStorage.getItem("ramiq_launch_date_v3");
    if (!target) {
      const now = new Date();
      const future = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
      target = future.toISOString();
      localStorage.setItem("ramiq_launch_date_v3", target);
    }
    const targetTime = new Date(target).getTime();
    queueMicrotask(() => {
      setCountdownTarget(targetTime);
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white text-text-main overflow-x-hidden">
      {/* Floating Header Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} countdownTarget={countdownTarget} />

      {/* SVG Background Path & Scrolling Avatars */}
      {countdownTarget > 0 && <JourneyPath />}

      {/* MAIN SECTIONS */}
      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero onOpenModal={() => setIsModalOpen(true)} countdownTarget={countdownTarget} />

        {/* About Section */}
        <About />

        {/* Audience Sections (Students & Teachers benefits) */}
        <Audience />

        {/* Operational steps timeline */}
        <HowItWorks />

        {/* Stations grid along the journey path */}
        <Features />

        {/* Comparison grid */}
        <WhyRamiq />

        {/* Core Values grid */}
        <Values />

        {/* Strategic Vision statement */}
        <Vision />

        {/* Team profiles and empty slot items */}
        <Team />

        {/* Interactive FAQ accordions */}
        <FAQ />

        {/* Forms Contact Section */}
        <Contact />
      </main>

      {/* Footer Closing elements */}
      <Footer />

      {/* Pre-launch Download modal */}
      {countdownTarget > 0 && (
        <DownloadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          countdownTarget={countdownTarget}
        />
      )}
    </div>
  );
}
