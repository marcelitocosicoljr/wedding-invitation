"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Wedding date: August 28, 2026
const WEDDING_DATE = new Date("2026-08-28T16:00:00");

interface TimeUnit {
  value: number;
  label: string;
}

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: "Days" },
    { value: 0, label: "Hours" },
    { value: 0, label: "Minutes" },
    { value: 0, label: "Seconds" },
  ]);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) {
        setIsOver(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };

    calculate();
    const id = setInterval(calculate, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return { timeLeft, isOver };
}

function DigitCard({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setFlip(false);
        setPrev(value);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  const formatted = String(value).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="flex flex-col items-center"
    >
      {/* Digit block */}
      <div
        className="countdown-digit relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(212,175,55,0.12) 0%, rgba(128,0,32,0.18) 100%)",
          border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: "12px",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(212,175,55,0.15)",
        }}
      >
        {/* Background shine */}
        <div
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), transparent)",
          }}
        />

        {/* Number */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: flip ? -40 : 0, opacity: flip ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 700,
              color: "#3a2a2a",
              textShadow: "0 2px 10px rgba(212,175,55,0.3)",
              lineHeight: 1,
            }}
          >
            {formatted}
          </motion.span>
        </AnimatePresence>

        {/* Gold glow on second tick */}
        {label === "Seconds" && (
          <motion.div
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15), transparent 70%)",
            }}
          />
        )}
      </div>

      {/* Label */}
      <p
        className="mt-3"
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.3em",
          color: "#D4AF37",
          opacity: 0.7,
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const { timeLeft, isOver } = useCountdown(WEDDING_DATE);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="countdown"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden text-center"
    >
      {/* Background animated gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(128,0,32,0.2) 0%, transparent 70%)
          `,
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <p
            className="section-label mb-4"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.5em",
              color: "#D4AF37",
              opacity: 0.7,
              textTransform: "uppercase",
            }}
          >
            Time Until We Say
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#3a2a2a",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            I Do
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "#3a2a2a",
            }}
          >
            August 28, 2026 · 4:00 PM · Palawan
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.2rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {isOver ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#D4AF37",
                textShadow: "0 0 30px rgba(212,175,55,0.5)",
              }}
            >
              We Are Married! 🎊
            </p>
          </motion.div>
        ) : (
          <>
            {/* Countdown digits */}
            <div className="flex items-start justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
              {timeLeft.map((unit, i) => (
                <div
                  key={unit.label}
                  className="flex items-start gap-4 sm:gap-6 md:gap-8"
                >
                  <DigitCard value={unit.value} label={unit.label} index={i} />
                  {i < timeLeft.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        color: "rgba(212,175,55,0.6)",
                        marginTop: "1.5rem",
                        lineHeight: 1,
                      }}
                    >
                      :
                    </motion.span>
                  )}
                </div>
              ))}
            </div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "rgba(250,240,230,0.5)",
              }}
            >
              Every second brings us closer to forever.
            </motion.p>

            {/* Decorative hearts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 flex justify-center gap-3"
            >
              {["❤️", "💛", "❤️"].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ fontSize: "1.2rem", opacity: 0.7 }}
                >
                  {h}
                </motion.span>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />
    </section>
  );
}
