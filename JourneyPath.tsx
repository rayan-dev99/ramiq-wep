"use client";

import { useEffect, useRef, useState } from "react";
import { Search, BookOpen, GraduationCap, Sparkles, Lightbulb, Award } from "lucide-react";

export default function JourneyPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<SVGSVGElement>(null);
  const studentPathRef = useRef<SVGPathElement>(null);
  const teacherPathRef = useRef<SVGPathElement>(null);
  const unifiedPathRef = useRef<SVGPathElement>(null);
  const studentAvatarRef = useRef<HTMLDivElement>(null);
  const teacherAvatarRef = useRef<HTMLDivElement>(null);

  // States to represent visual appearance (Beginning, Middle, End) based on scroll progress
  // Progress < 0.3: Beginning | 0.3 <= Progress < 0.7: Middle | Progress >= 0.7: End
  const [journeyState, setJourneyState] = useState<"beginning" | "middle" | "end">("beginning");
  const [scales, setScales] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const updateCoordinates = () => {
      if (
        !containerRef.current ||
        !canvasRef.current ||
        !studentPathRef.current ||
        !teacherPathRef.current ||
        !unifiedPathRef.current ||
        !studentAvatarRef.current ||
        !teacherAvatarRef.current
      ) {
        return;
      }

      // Skip coordinate math and DOM updates on mobile/tablet viewports
      if (window.innerWidth < 1024) {
        return;
      }

      const container = containerRef.current;
      const canvas = canvasRef.current;
      
      const containerTop = container.offsetTop;
      const containerHeight = container.clientHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress [0, 1] relative to the entire page
      const maxScroll = scrollHeight - viewportHeight;
      if (maxScroll <= 0) return;
      let progress = scrollY / maxScroll;
      progress = Math.max(0, Math.min(1, progress));

      // Update state for character rendering
      if (progress < 0.35) {
        if (journeyState !== "beginning") setJourneyState("beginning");
      } else if (progress < 0.75) {
        if (journeyState !== "middle") setJourneyState("middle");
      } else {
        if (journeyState !== "end") setJourneyState("end");
      }

      // Convert SVG Coordinate System (1440 x 6200) to actual Client Pixels
      const scaleX = canvas.clientWidth / 1440;
      const scaleY = canvas.clientHeight / 6200;
      setScales({ x: scaleX, y: scaleY });

      const studentPath = studentPathRef.current;
      const teacherPath = teacherPathRef.current;
      const unifiedPath = unifiedPathRef.current;

      const studentLen = studentPath.getTotalLength();
      const teacherLen = teacherPath.getTotalLength();
      const unifiedLen = unifiedPath.getTotalLength();

      // Configure paths to draw themselves on scroll
      studentPath.style.strokeDasharray = `${studentLen}`;
      teacherPath.style.strokeDasharray = `${teacherLen}`;
      unifiedPath.style.strokeDasharray = `${unifiedLen}`;

      // meeting threshold point (45% scroll)
      const meetingThreshold = 0.45;

      let studentPt = { x: 1200, y: 400 };
      let teacherPt = { x: 240, y: 400 };

      if (progress < meetingThreshold) {
        // Stage 1: Move separately down their paths
        const scaledProgress = progress / meetingThreshold;

        studentPath.style.strokeDashoffset = `${studentLen * (1 - scaledProgress)}`;
        teacherPath.style.strokeDashoffset = `${teacherLen * (1 - scaledProgress)}`;
        unifiedPath.style.strokeDashoffset = `${unifiedLen}`;

        studentPt = studentPath.getPointAtLength(studentLen * scaledProgress);
        teacherPt = teacherPath.getPointAtLength(teacherLen * scaledProgress);
      } else {
        // Stage 2: Met. Glide together on unified path
        const scaledProgress = (progress - meetingThreshold) / (1 - meetingThreshold);

        studentPath.style.strokeDashoffset = "0";
        teacherPath.style.strokeDashoffset = "0";
        unifiedPath.style.strokeDashoffset = `${unifiedLen * (1 - scaledProgress)}`;

        const unifiedPt = unifiedPath.getPointAtLength(unifiedLen * scaledProgress);

        // Position them side-by-side with horizontal offset (+24px for student, -24px for teacher)
        studentPt = { x: unifiedPt.x + 28, y: unifiedPt.y };
        teacherPt = { x: unifiedPt.x - 28, y: unifiedPt.y };
      }

      // Apply positions directly to DOM elements for high-performance scroll rendering (avoids React re-renders)
      studentAvatarRef.current.style.left = `${studentPt.x * scaleX}px`;
      studentAvatarRef.current.style.top = `${containerTop + studentPt.y * scaleY}px`;
      studentAvatarRef.current.style.opacity = "1";

      teacherAvatarRef.current.style.left = `${teacherPt.x * scaleX}px`;
      teacherAvatarRef.current.style.top = `${containerTop + teacherPt.y * scaleY}px`;
      teacherAvatarRef.current.style.opacity = "1";
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateCoordinates);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateCoordinates);
    
    // Initial run
    setTimeout(updateCoordinates, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCoordinates);
      cancelAnimationFrame(animationFrameId);
    };
  }, [journeyState]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden hidden lg:block"
      aria-hidden="true"
    >
      <svg
        ref={canvasRef}
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 6200"
        preserveAspectRatio="none"
      >
        {/* Student Path (Right to Center) */}
        <path
          ref={studentPathRef}
          d="M 1200 400 C 1100 800, 1300 1200, 1000 1600 C 800 1900, 1100 2300, 720 2800"
          fill="none"
          stroke="rgba(221, 245, 241, 0.7)"
          strokeWidth="3.5"
          strokeDasharray="6 6"
        />

        {/* Teacher Path (Left to Center) */}
        <path
          ref={teacherPathRef}
          d="M 240 400 C 340 800, 140 1200, 440 1600 C 640 1900, 340 2300, 720 2800"
          fill="none"
          stroke="rgba(14, 118, 109, 0.25)"
          strokeWidth="3.5"
          strokeDasharray="6 6"
        />

        {/* Joint Path (Merging point in Middle down to completed RAMIQ Spark at Footer) */}
        <path
          ref={unifiedPathRef}
          d="M 720 2800 C 720 3200, 920 3600, 720 4000 C 520 4400, 720 4850, 720 5460"
          fill="none"
          stroke="rgba(14, 118, 109, 0.45)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      {/* Student Avatar Icon */}
      <div
        ref={studentAvatarRef}
        className="absolute w-[50px] h-[50px] rounded-full border-2 border-primary bg-accent shadow-md-custom flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 z-10"
        title="الطالب"
      >
        {journeyState === "beginning" && (
          <Search size={20} className="text-primary" />
        )}
        {journeyState === "middle" && (
          <BookOpen size={20} className="text-primary" />
        )}
        {journeyState === "end" && (
          <GraduationCap size={20} className="text-primary" />
        )}
      </div>

      {/* Teacher Avatar Icon */}
      <div
        ref={teacherAvatarRef}
        className="absolute w-[50px] h-[50px] rounded-full border-2 border-primary bg-white shadow-md-custom flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 z-10"
        title="المعلم"
      >
        {journeyState === "beginning" && (
          <Sparkles size={20} className="text-primary" />
        )}
        {journeyState === "middle" && (
          <Lightbulb size={20} className="text-primary" />
        )}
        {journeyState === "end" && (
          <Award size={20} className="text-primary" />
        )}
      </div>
    </div>
  );
}
