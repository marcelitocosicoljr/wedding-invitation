"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const STORY_EVENTS = [
  {
    year: "2019",
    month: "March",
    title: "First Meeting",
    subtitle: "Where it all began",
    story:
      "It was a rainy Tuesday evening at a small jazz café in the heart of the city. Marcelito walked in shaking the rain from his coat, and there she was — Daisy, laughing at something in a worn paperback. Their eyes met for just a second, but the universe took note.",
    img: "/images/DSC03805.jpg",
    alt: "Two people meeting at a café",
    side: "left",
  },
  {
    year: "2020",
    month: "December",
    title: "First Date",
    subtitle: "An evening to remember",
    story:
      "Six months of exchanged glances and borrowed books led to that magical first date — a candlelit dinner that stretched past midnight. They talked about everything: dreams, fears, favorite songs. By the time they left, the world had quietly changed.",
    img: "/images/DSC03831.jpg",
    alt: "Romantic dinner date",
    side: "right",
  },
  {
    year: "2022",
    month: "July",
    title: "Our First Trip Together",
    subtitle: "Adventures as one",
    story:
      "Cobblestone streets, lavender fields, and wine that tasted like summer — their first trip through the south of France cemented what they already knew: life was simply better together. They promised to see the whole world, hand in hand.",
    img: "/images/DSC03841.jpg",
    alt: "Couple traveling together",
    side: "left",
  },
  {
    year: "2025",
    month: "February",
    title: "The Proposal",
    subtitle: "Yes, forever.",
    story:
      "On Valentine's evening, beneath a canopy of a thousand fairy lights in their favorite rooftop garden, Marcelito knelt down and asked the question that had been living in his heart for years. Daisy said yes before he could finish the sentence. The rest is a love story still being written.",
    img: "/images/IMG_1960.JPG",
    alt: "The proposal moment",
    side: "right",
  },
];

function StoryCard({
  event,
  index,
}: {
  event: (typeof STORY_EVENTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = event.side === "left";

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* ── Content Card ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        className="w-full md:w-5/12"
      >
        <div
          className="glass-burgundy p-6 md:p-8 rounded-2xl relative overflow-hidden hover-lift"
          style={{
            background: "rgba(128,0,32,0.12)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          {/* Background number */}
          <span
            className="absolute -bottom-4 -right-2 font-serif font-bold opacity-[0.04] select-none pointer-events-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "8rem",
              color: "#D4AF37",
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Year badge */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(212,175,55,0.15)",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              {event.month} {event.year}
            </span>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              color: "#3a2a2a",
              marginBottom: "0.25rem",
            }}
          >
            {event.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "#D4AF37",
              marginBottom: "1rem",
              opacity: 0.8,
            }}
          >
            {event.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              color: "#3a2a2a",
            }}
          >
            {event.story}
          </motion.p>
        </div>
      </motion.div>

      {/* ── Center dot  ──────────────────────────────────── */}
      <div className="hidden md:flex w-2/12 justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="relative"
        >
          {/* Outer ring pulse */}
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{
              background: "rgba(212,175,55,0.3)",
              transform: "translate(-25%, -25%)",
              width: "150%",
              height: "150%",
            }}
          />
          <div
            className="w-5 h-5 rounded-full relative z-10"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              boxShadow: "0 0 15px rgba(212,175,55,0.6)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Image ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-5/12 mt-4 md:mt-0"
      >
        <div
          className="relative overflow-hidden rounded-2xl group"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={event.img}
            alt={event.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          {/* Gold overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "rgba(212,175,55,0.08)" }}
          />
          {/* Corner frame lines */}
          <div
            className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold-500/40 pointer-events-none"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          />
          <div
            className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold-500/40 pointer-events-none"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          />
          <div
            className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold-500/40 pointer-events-none"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          />
          <div
            className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold-500/40 pointer-events-none"
            style={{ borderColor: "rgba(212,175,55,0.5)" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 50%, rgba(128,0,32,0.15) 0%, transparent 70%),
                            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
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
            Chapter One
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#3a2a2a",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Our Story
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#3a2a2a",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Every love story is beautiful — but ours is our favorite.
          </p>

          {/* Ornamental divider */}
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "rgba(212,175,55,0.6)",
                fontSize: "1.2rem",
              }}
            >
              ✦
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(212,175,55,0.4), rgba(128,0,32,0.4), rgba(212,175,55,0.4), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {STORY_EVENTS.map((event, index) => (
              <StoryCard key={event.title} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="text-center mt-24"
        >
          <div className="ornament-divider max-w-sm mx-auto mb-8">
            <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "0.8rem" }}>
              ✦ ✦ ✦
            </span>
          </div>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#3a2a2a",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {"You are my today and all of my tomorrows."}
          </blockquote>
          <cite
            className="block mt-3"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#D4AF37",
              opacity: 0.7,
              textTransform: "uppercase",
            }}
          >
            — Marcelito
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
