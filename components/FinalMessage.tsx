"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Animated circular floral wreath SVG
const FloralWreath = () => (
  <svg
    viewBox="0 0 300 300"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    {/* Main stem circle */}
    <circle
      cx="150"
      cy="150"
      r="100"
      stroke="rgba(212,175,55,0.2)"
      strokeWidth="0.5"
      strokeDasharray="4 4"
    />
    <circle
      cx="150"
      cy="150"
      r="80"
      stroke="rgba(212,175,55,0.15)"
      strokeWidth="0.5"
    />

    {/* Petals around the ring */}
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 150 + 90 * Math.cos(angle);
      const y1 = 150 + 90 * Math.sin(angle);
      const x2 = 150 + 110 * Math.cos(angle);
      const y2 = 150 + 110 * Math.sin(angle);
      return (
        <g key={i}>
          <ellipse
            cx={x1}
            cy={y1}
            rx="10"
            ry="16"
            transform={`rotate(${i * 30 + 90}, ${x1}, ${y1})`}
            fill="rgba(255,182,193,0.15)"
            stroke="rgba(255,182,193,0.3)"
            strokeWidth="0.5"
          />
          <circle cx={x2} cy={y2} r="3" fill="rgba(212,175,55,0.25)" />
        </g>
      );
    })}

    {/* Leaves */}
    {Array.from({ length: 8 }, (_, i) => {
      const angle = ((i * 45 + 22) * Math.PI) / 180;
      const x = 150 + 98 * Math.cos(angle);
      const y = 150 + 98 * Math.sin(angle);
      return (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="5"
          ry="12"
          transform={`rotate(${i * 45 + 22}, ${x}, ${y})`}
          fill="rgba(128,0,32,0.2)"
          stroke="rgba(128,0,32,0.3)"
          strokeWidth="0.5"
        />
      );
    })}
  </svg>
);

const CREDITS = [
  { role: "Photography", name: "Lumière Studios" },
  { role: "Videography", name: "Cinematic Hearts" },
  { role: "Florals", name: "Bloom & Blossom Co." },
  { role: "Catering", name: "The Grand Table" },
  { role: "Live Music", name: "Strings of Gold Quartet" },
];

export default function FinalMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const wreathRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="final-message"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(212,175,55,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(128,0,32,0.15) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Animated wreath */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-10"
        >
          {/* Rotating wreath */}
          <motion.div
            className="absolute inset-0"
            style={{ rotate: wreathRotate }}
          >
            <FloralWreath />
          </motion.div>

          {/* Center monogram */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                color: "#3a2a2a",
                lineHeight: 1,
                textShadow: "0 0 30px rgba(212,175,55,0.4)",
              }}
            >
              M & S
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.4em",
                color: "#D4AF37",
                opacity: 0.7,
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Forever
            </motion.p>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-8"
        >
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.5em",
              color: "#D4AF37",
              opacity: 0.7,
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            From Our Hearts
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#3a2a2a",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            With Gratitude
          </motion.h2>
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto"
          style={{
            background: "rgba(128,0,32,0.1)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(212,175,55,0.15)",
            borderRadius: "20px",
            padding: "2.5rem 2rem",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.65 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 2.5vw, 1.3rem)",
              color: "#3a2a2a",
              lineHeight: 1.9,
            }}
          >
            To every soul who has filled our lives with love, laughter, and
            light — thank you. Your presence on our wedding day means the world
            to us. We cannot wait to dance, feast, and celebrate with you as we
            begin the most beautiful chapter of our lives together.
          </motion.p>
          <div className="mt-6 flex justify-center items-center gap-3">
            <span style={{ color: "rgba(212,175,55,0.5)" }}>✦</span>
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "1.6rem",
                color: "#D4AF37",
              }}
            >
              Marcelito & Daisy
            </p>
            <span style={{ color: "rgba(212,175,55,0.5)" }}>✦</span>
          </div>
        </motion.div>

        {/* Vendor credits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.35em",
              color: "#D4AF37",
              opacity: 0.6,
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            The Dream Team
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {CREDITS.map((credit, i) => (
              <motion.div
                key={credit.role}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <p
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "rgba(212,175,55,0.6)",
                    textTransform: "uppercase",
                    marginBottom: "0.2rem",
                  }}
                >
                  {credit.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                    color: "rgba(250,240,230,0.55)",
                  }}
                >
                  {credit.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="ornament-divider max-w-xs mx-auto">
            <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "1rem" }}>
              ✦ ✦ ✦
            </span>
          </div>

          {/* Date stamp */}
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center"
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "rgba(250,240,230,0.4)",
                letterSpacing: "0.08em",
              }}
            >
              August 28, 2026
            </p>
          </motion.div>

          {/* Subtle heart */}
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ fontSize: "1.5rem" }}
          >
            🌹
          </motion.span>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-20 text-center border-t"
        style={{ borderColor: "rgba(212,175,55,0.1)", paddingTop: "2rem" }}
      >
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(250,240,230,0.25)",
          }}
        >
          Made with love for Marcelito & Daisy · 2026 · All rights reserved
        </p>
      </motion.footer>
    </section>
  );
}
