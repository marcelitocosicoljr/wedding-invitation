"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import RSVP from "@/components/RSVP";
import GiftRegistry from "@/components/GiftRegistry";
import FinalMessage from "@/components/FinalMessage";

// Client-only components
const FloatingPetals = dynamic(() => import("@/components/FloatingPetals"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const SECTIONS = [
  { name: "hero", component: Hero },
  { name: "countdown", component: Countdown },
  { name: "story", component: OurStory },
  { name: "gallery", component: Gallery },
  { name: "details", component: EventDetails },
  { name: "rsvp", component: RSVP },
  { name: "gifts", component: GiftRegistry },
  { name: "final", component: FinalMessage },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const [invitationOpened, setInvitationOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenInvitation = () => {
    setInvitationOpened(true);
    setDirection(1);
    setCurrentSection((prev) => Math.min(prev + 1, SECTIONS.length - 1));
  };

  if (!mounted) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Floating petals */}
      <FloatingPetals count={20} />

      {/* YouTube Music Autoplay */}
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/fu9yk7gCTbc?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0"
        allow="autoplay"
        style={{ display: "none" }}
      />

      {/* Main Container - Full Screen Slides */}
      <main className="relative w-full h-screen overflow-hidden bg-white watercolor-background">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Animated Floral Elements */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(200, 100, 140, 0.2) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.35, y: 0 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(220, 140, 170, 0.18) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.9, duration: 1.5 }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(210, 170, 190, 0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 1.1, duration: 1.5 }}
            className="absolute bottom-1/4 left-20 w-72 h-72 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(230, 160, 190, 0.12) 0%, transparent 70%)",
            }}
          />

          {/* Abstract SVG Flower Designs */}
          {/* Top Left Rose Pattern */}
          <svg
            className="flower-bg-top-left"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="roseGradient1">
                <stop offset="0%" stopColor="rgba(200, 80, 110, 0.8)" />
                <stop offset="100%" stopColor="rgba(180, 60, 90, 0.3)" />
              </radialGradient>
            </defs>
            {/* Outer petals */}
            <circle
              cx="140"
              cy="80"
              r="35"
              fill="url(#roseGradient1)"
              opacity="0.7"
            />
            <circle
              cx="200"
              cy="60"
              r="40"
              fill="url(#roseGradient1)"
              opacity="0.6"
            />
            <circle
              cx="260"
              cy="100"
              r="38"
              fill="url(#roseGradient1)"
              opacity="0.65"
            />
            <circle
              cx="280"
              cy="170"
              r="42"
              fill="url(#roseGradient1)"
              opacity="0.7"
            />
            <circle
              cx="240"
              cy="230"
              r="40"
              fill="url(#roseGradient1)"
              opacity="0.6"
            />
            <circle
              cx="160"
              cy="250"
              r="38"
              fill="url(#roseGradient1)"
              opacity="0.65"
            />
            <circle
              cx="80"
              cy="200"
              r="42"
              fill="url(#roseGradient1)"
              opacity="0.7"
            />
            <circle
              cx="60"
              cy="110"
              r="40"
              fill="url(#roseGradient1)"
              opacity="0.6"
            />
            {/* Center */}
            <circle cx="200" cy="150" r="50" fill="rgba(230, 160, 190, 0.5)" />
            <circle cx="200" cy="150" r="30" fill="rgba(210, 140, 170, 0.6)" />
          </svg>

          {/* Bottom Right Peony Pattern */}
          <svg
            className="flower-bg-bottom-right"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="peonGradient">
                <stop offset="0%" stopColor="rgba(220, 140, 170, 0.7)" />
                <stop offset="100%" stopColor="rgba(190, 100, 130, 0.2)" />
              </radialGradient>
            </defs>
            {/* Layered petals */}
            <circle
              cx="120"
              cy="100"
              r="50"
              fill="url(#peonGradient)"
              opacity="0.8"
            />
            <circle
              cx="200"
              cy="80"
              r="55"
              fill="url(#peonGradient)"
              opacity="0.7"
            />
            <circle
              cx="280"
              cy="120"
              r="52"
              fill="url(#peonGradient)"
              opacity="0.75"
            />
            <circle
              cx="320"
              cy="200"
              r="48"
              fill="url(#peonGradient)"
              opacity="0.8"
            />
            <circle
              cx="280"
              cy="280"
              r="54"
              fill="url(#peonGradient)"
              opacity="0.7"
            />
            <circle
              cx="180"
              cy="310"
              r="50"
              fill="url(#peonGradient)"
              opacity="0.75"
            />
            <circle
              cx="80"
              cy="280"
              r="48"
              fill="url(#peonGradient)"
              opacity="0.8"
            />
            <circle
              cx="40"
              cy="180"
              r="52"
              fill="url(#peonGradient)"
              opacity="0.7"
            />
            {/* Dense center */}
            <circle cx="200" cy="180" r="65" fill="rgba(230, 160, 190, 0.4)" />
            <circle cx="200" cy="180" r="45" fill="rgba(220, 150, 180, 0.5)" />
            <circle cx="200" cy="180" r="25" fill="rgba(210, 140, 170, 0.6)" />
          </svg>

          {/* Center Right Botanical Pattern */}
          <svg
            className="flower-bg-center-right"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="botanicalGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(200, 100, 140, 0.6)" />
                <stop offset="100%" stopColor="rgba(170, 80, 120, 0.3)" />
              </linearGradient>
            </defs>
            {/* Stems and leaves style */}
            <path
              d="M 200 400 Q 150 300 140 200 Q 130 100 160 50"
              stroke="url(#botanicalGrad)"
              strokeWidth="8"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M 200 400 Q 250 300 260 200 Q 270 100 240 50"
              stroke="url(#botanicalGrad)"
              strokeWidth="8"
              fill="none"
              opacity="0.5"
            />
            {/* Flower clusters */}
            <circle cx="160" cy="50" r="30" fill="rgba(200, 80, 110, 0.4)" />
            <circle cx="145" cy="65" r="20" fill="rgba(220, 100, 130, 0.5)" />
            <circle cx="175" cy="65" r="22" fill="rgba(210, 90, 120, 0.45)" />
            <circle cx="240" cy="50" r="32" fill="rgba(200, 80, 110, 0.4)" />
            <circle cx="225" cy="68" r="22" fill="rgba(220, 100, 130, 0.5)" />
            <circle cx="255" cy="65" r="24" fill="rgba(210, 90, 120, 0.45)" />
          </svg>

          {/* Bottom Left Accent Botanical */}
          <svg
            className="flower-accent-bottom"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="accentGrad">
                <stop offset="0%" stopColor="rgba(230, 160, 190, 0.6)" />
                <stop offset="100%" stopColor="rgba(200, 130, 160, 0.2)" />
              </radialGradient>
            </defs>
            {/* Small delicate flowers */}
            <circle cx="100" cy="100" r="25" fill="url(#accentGrad)" />
            <circle cx="200" cy="80" r="28" fill="url(#accentGrad)" />
            <circle cx="280" cy="120" r="26" fill="url(#accentGrad)" />
            <circle cx="320" cy="200" r="24" fill="url(#accentGrad)" />
            <circle cx="240" cy="280" r="27" fill="url(#accentGrad)" />
            {/* Center details */}
            <circle cx="150" cy="150" r="18" fill="rgba(210, 140, 170, 0.5)" />
            <circle cx="250" cy="180" r="16" fill="rgba(210, 140, 170, 0.5)" />
          </svg>
        </div>

        {/* Slide Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative z-10 w-full h-screen flex items-center justify-center overflow-y-auto"
          >
            {SECTIONS[currentSection].component === Hero && (
              <Hero onOpenInvitation={handleOpenInvitation} />
            )}
            {SECTIONS[currentSection].component === Countdown && <Countdown />}
            {SECTIONS[currentSection].component === OurStory && <OurStory />}
            {SECTIONS[currentSection].component === Gallery && <Gallery />}
            {SECTIONS[currentSection].component === EventDetails && (
              <EventDetails />
            )}
            {SECTIONS[currentSection].component === RSVP && <RSVP />}
            {SECTIONS[currentSection].component === GiftRegistry && (
              <GiftRegistry />
            )}
            {SECTIONS[currentSection].component === FinalMessage && (
              <FinalMessage />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Progress Indicator */}
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 rounded-full border border-[#f0d79a]/20 bg-[rgba(41,4,13,0.42)] px-4 py-2 backdrop-blur-sm">
            <p
              style={{
                color: "#f0d79a",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.85rem",
                fontWeight: "bold",
              }}
            >
              {currentSection + 1} / {SECTIONS.length}
            </p>
            <div className="flex gap-1.5">
              {SECTIONS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    if (!invitationOpened && currentSection === 0 && i > 0)
                      return;
                    setDirection(i > currentSection ? 1 : -1);
                    setCurrentSection(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentSection
                      ? "w-7 bg-[#e1bf72]"
                      : "w-2.5 bg-[#c88e9d] hover:bg-[#dfadc0]"
                  }`}
                  whileHover={{ scale: 1.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
