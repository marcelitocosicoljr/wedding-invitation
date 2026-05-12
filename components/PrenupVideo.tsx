"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function PrenupVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="prenup-video"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0408 0%, #150a0e 50%, #0d0408 100%)",
      }}
    >
      {/* Background ambient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(128,0,32,0.15) 0%, transparent 70%)",
          y: parallaxY,
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
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
            A Love Film
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
            Our Prenup Story
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "#3a2a2a",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Before the wedding bells ring, we captured our love in motion.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(212,175,55,0.2)",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.05)",
          }}
        >
          {/* Cinematic letterbox bars */}
          <div
            className="absolute top-0 left-0 right-0 h-12 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-12 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            }}
          />

          {/* Video embed */}
          <div
            className="relative"
            style={{ paddingBottom: "56.25%" /* 16:9 ratio */ }}
          >
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1621217038661-5e0ed6d8e30d?w=1200&q=80')`,
                  }}
                >
                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(128,0,32,0.5) 0%, rgba(0,0,0,0.4) 50%, rgba(212,175,55,0.15) 100%)",
                    }}
                  />
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center cursor-pointer"
                  >
                    {/* Outer pulse rings */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute w-24 h-24 rounded-full"
                      style={{ background: "rgba(212,175,55,0.3)" }}
                    />
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                      className="absolute w-24 h-24 rounded-full"
                      style={{ background: "rgba(212,175,55,0.2)" }}
                    />

                    {/* Main button */}
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #800020, #a81744)",
                        border: "2px solid rgba(212,175,55,0.6)",
                        boxShadow:
                          "0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(128,0,32,0.4)",
                      }}
                    >
                      {/* Play triangle */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ marginLeft: "4px" }}
                      >
                        <path d="M5 3L19 12L5 21V3Z" fill="#D4AF37" />
                      </svg>
                    </div>
                  </motion.button>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.25em",
                      color: "rgba(250,240,230,0.7)",
                      textTransform: "uppercase",
                      marginTop: "1.5rem",
                    }}
                  >
                    Play our story
                  </motion.p>
                </div>

                {/* Corner ornaments */}
                <div
                  className="absolute top-4 left-4 w-8 h-8 border-t border-l z-20"
                  style={{ borderColor: "rgba(212,175,55,0.5)" }}
                />
                <div
                  className="absolute top-4 right-4 w-8 h-8 border-t border-r z-20"
                  style={{ borderColor: "rgba(212,175,55,0.5)" }}
                />
                <div
                  className="absolute bottom-4 left-4 w-8 h-8 border-b border-l z-20"
                  style={{ borderColor: "rgba(212,175,55,0.5)" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 border-b border-r z-20"
                  style={{ borderColor: "rgba(212,175,55,0.5)" }}
                />
              </>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Prenuptial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Caption below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 flex flex-col items-center gap-2"
        >
          <div className="ornament-divider max-w-xs mx-auto">
            <span style={{ color: "rgba(212,175,55,0.5)", fontSize: "0.8rem" }}>
              ✦
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(250,240,230,0.55)",
              maxWidth: "480px",
              marginTop: "0.5rem",
            }}
          >
            &ldquo;In every frame, in every second — our forever begins.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
