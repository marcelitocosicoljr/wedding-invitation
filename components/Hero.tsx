"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onOpenInvitation?: () => void;
}

export default function Hero({ onOpenInvitation }: HeroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 650);

    setTimeout(() => {
      onOpenInvitation?.();
    }, 1800);
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 15%, rgba(179, 27, 47, 0.45) 0%, rgba(86, 0, 14, 0.2) 30%, transparent 55%), radial-gradient(circle at 85% 72%, rgba(255, 178, 185, 0.2) 0%, transparent 52%), linear-gradient(145deg, #2b0008 0%, #4b000d 35%, #5a000f 58%, #2d0008 100%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,0,24,0.06)_0%,rgba(20,0,4,0.46)_75%)]" />

        <motion.div
          className="absolute -left-16 top-10 h-64 w-64 rounded-full blur-[90px]"
          style={{ background: "rgba(219, 57, 88, 0.25)" }}
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-8 h-72 w-72 rounded-full blur-[100px]"
          style={{ background: "rgba(255, 191, 176, 0.2)" }}
          animate={{
            x: [0, -35, 0],
            y: [0, 28, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.25, 0.34, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/wedding/effects1.png"
            alt="Golden glow"
            fill
            priority
            className="object-contain blur-[1px]"
          />
        </motion.div>

        <motion.div
          className="absolute left-0 top-0 h-full w-[200px] sm:w-[240px]"
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.02, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/wedding/effects2.png"
            alt="Romantic texture"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 top-0 h-full w-[200px] sm:w-[240px]"
          animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.02, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.35,
          }}
        >
          <Image
            src="/images/wedding/effects2.png"
            alt="Romantic texture right"
            fill
            priority
            className="object-contain rotate-180"
          />
        </motion.div>

        <motion.div
          className="absolute -left-12 -bottom-8 h-[52vh] w-[52vh] max-h-[520px] max-w-[520px]"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.38, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/wedding/flower-effects1.png"
            alt="Floral corner"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute -top-12 -right-10 h-[56vh] w-[56vh] max-h-[560px] max-w-[560px]"
          animate={{ y: [0, 9, 0], opacity: [0.28, 0.36, 0.28] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/wedding/flower-effects1.png"
            alt="Floral corner"
            fill
            priority
            className="object-contain -rotate-90 scale-x-[-1]"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-3 z-10 rounded-lg border border-[#f0d79a]/30 md:inset-6" />
      <div className="pointer-events-none absolute inset-6 z-10 rounded-md border border-[#e0b859]/25 md:inset-10" />

      <motion.div
        className="relative z-20 mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center rounded-2xl sm:px-6 md:px-8">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.85 }}
          >
            <h1
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#f8e7ba",
                fontSize: "clamp(2.6rem, 8.6vw, 4.3rem)",
                lineHeight: 0.96,
                textShadow:
                  "0 3px 14px rgba(0,0,0,0.34), 0 0 18px rgba(236, 198, 120, 0.27)",
              }}
            >
              {"You're"} {" Invited"}
            </h1>
          </motion.div>

          <motion.div
            className="mb-4 h-px w-[82%] max-w-[620px]"
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{
              background:
                "linear-gradient(90deg, rgba(245,215,150,0), rgba(245,215,150,0.75), rgba(245,215,150,0))",
            }}
          />

          <motion.div
            className="relative w-full max-w-[840px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            <motion.div
              className="relative mx-auto w-[min(92vw,680px)]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[46px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255, 197, 142, 0.38) 0%, rgba(188, 40, 68, 0.24) 45%, rgba(18, 0, 5, 0) 100%)",
                }}
                animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="pointer-events-none absolute left-1/2 top-[56%] h-14 w-[74%] -translate-x-1/2 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.08) 72%, rgba(0, 0, 0, 0) 100%)",
                }}
                animate={{ opacity: [0.5, 0.75, 0.5] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-4 h-8 w-[82%] -translate-x-1/2 rounded-full blur-xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.02) 70%)",
                }}
              />

              <motion.div
                className="relative mx-auto h-[235px] w-full sm:h-[310px] md:h-[360px]"
                animate={isOpened ? { scale: [1, 1.02, 1], y: [0, -3, 0] } : {}}
                transition={{ duration: 1.6, ease: "easeOut" }}
                onClick={handleOpen}
                role="button"
                tabIndex={0}
                aria-label="Open invitation envelope"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleOpen();
                }}
                style={{
                  cursor: isOpening || isOpened ? "default" : "pointer",
                }}
              >
                <Image
                  src="/images/wedding/envelope-final.png"
                  alt="Envelope"
                  fill
                  priority
                  className="object-cover"
                />

                <motion.div
                  className="absolute left-1/2 top-[56%] -translate-x-1/2 -ml-5 -translate-y-1/2 rounded-full border border-[#f2d696]/60 bg-[radial-gradient(circle,rgba(89,0,24,1)_0%,rgba(126,9,33,1)_65%,rgba(73,0,18,1)_100%)] p-2 shadow-[0_0_18px_rgba(0,0,0,0.4)]"
                  animate={{
                    scale: isOpened ? 0.82 : 1.24,
                    opacity: isOpened ? 0.85 : 1,
                  }}
                  transition={{ duration: 0.55 }}
                >
                  <Image
                    src="/images/marsdais.png"
                    alt="M and D monogram seal"
                    width={56}
                    height={56}
                    className="h-11 w-11  object-contain"
                  />
                </motion.div>

                {Array.from({ length: 7 }).map((_, idx) => (
                  <motion.span
                    key={`spark-${idx}`}
                    className="absolute z-20 h-[5px] w-[5px] rounded-full bg-[#f5d89a]"
                    style={{
                      left: `${18 + idx * 10}%`,
                      top: "45%",
                      opacity: isOpened ? 1 : 0,
                    }}
                    animate={
                      isOpened
                        ? {
                            y: [-4, -25 - idx * 3, -8],
                            x: [0, (idx % 2 === 0 ? -1 : 1) * 8, 0],
                            opacity: [0, 1, 0],
                            scale: [0.3, 1, 0.4],
                          }
                        : { opacity: 0 }
                    }
                    transition={{
                      duration: 1.4,
                      delay: idx * 0.08,
                      repeat: isOpened ? Infinity : 0,
                      repeatDelay: 1.3,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>
              <p
                className="mx-auto text-center  pl-6 mt-4"
                style={{
                  color: "#f7dfb0",
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.82rem, 2.8vw, 3.08rem)",
                  letterSpacing: "0.05em",
                  textShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  opacity: 0.88,
                }}
              >
                - Marcelito & Daisy -
              </p>

              <p
                className="mx-auto  text-center mt-4 pl-6"
                style={{
                  color: "#f7dfb0",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.82rem, 2.8vw, 1.08rem)",
                  letterSpacing: "0.05em",
                  textShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  opacity: 0.88,
                }}
              >
                Click the envelope to open
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(32, 0, 8, 0), rgba(23, 0, 6, 0.85) 65%, rgba(15, 0, 4, 0.98) 100%)",
        }}
      />
    </section>
  );
}
