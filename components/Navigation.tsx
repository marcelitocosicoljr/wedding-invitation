"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SECTIONS = [
  { label: "Home", id: 0 },
  { label: "Countdown", id: 1 },
  { label: "Story", id: 2 },
  { label: "Gallery", id: 3 },
  { label: "Details", id: 4 },
  { label: "RSVP", id: 5 },
  { label: "Gifts", id: 6 },
  { label: "Gratitude", id: 7 },
];

interface NavigationProps {
  currentSection: number;
}

export default function Navigation({ currentSection }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 py-4 bg-[rgba(13,4,8,0.85)] backdrop-blur-xl border-b border-gold-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <Image
              src="/images/marsdais.png"
              alt="M&D"
              width={50}
              height={50}
              className="w-10 h-10"
            />
          </motion.div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 + 0.1 * section.id }}
              >
                <span
                  className={`text-xs font-600 tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer relative group ${
                    currentSection === section.id
                      ? "text-gold-500"
                      : "text-cream-200/70 hover:text-gold-500"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {section.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      currentSection === section.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "#D4AF37" }}
                  />
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-px block"
              style={{ background: "#D4AF37" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px block"
              style={{ background: "#D4AF37" }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-px block"
              style={{ background: "#D4AF37" }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center pt-24"
            style={{
              background: "rgba(13,4,8,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="mb-10 text-center">
              <Image
                src="/images/marsdais.png"
                alt="Marcelito & Daisy"
                width={100}
                height={100}
                className="w-20 h-20 mx-auto"
              />
            </div>

            <ul className="flex flex-col items-center gap-6">
              {SECTIONS.map((section) => (
                <motion.li
                  key={section.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * section.id }}
                >
                  <span
                    onClick={() => setMenuOpen(false)}
                    className={`cursor-pointer text-2xl transition-colors ${
                      currentSection === section.id
                        ? "text-gold-500"
                        : "text-cream-200/70"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            <p className="mt-10 section-label opacity-40">August 28, 2026</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
