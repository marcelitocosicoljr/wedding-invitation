"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function DetailsPage() {
  const imageTopOffset = 100;
  const weddingDate = new Date("2026-08-28T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#3a000b]">
      <div
        className="fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, rgba(179, 27, 47, 0.45) 0%, rgba(86, 0, 14, 0.2) 30%, transparent 55%), radial-gradient(circle at 85% 72%, rgba(255, 178, 185, 0.2) 0%, transparent 52%), linear-gradient(145deg, #2b0008 0%, #4b000d 35%, #5a000f 58%, #2d0008 100%)",
        }}
      />

      <motion.div
        className="fixed inset-0"
        animate={{ opacity: [0.22, 0.36, 0.22] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/wedding/effects1.png"
          alt="Golden glow"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="fixed -left-10 -bottom-12 h-[42vh] w-[42vh] max-h-[420px] max-w-[420px]"
        animate={{ y: [0, -8, 0], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/wedding/flower-effects1.png"
          alt="Floral corner"
          fill
          className="object-contain opacity-40"
        />
      </motion.div>

      <motion.div
        className="fixed -right-10 -top-12 h-[44vh] w-[44vh] max-h-[460px] max-w-[460px]"
        animate={{ y: [0, 9, 0], opacity: [0.22, 0.32, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/wedding/flower-effects1.png"
          alt="Floral corner"
          fill
          className="object-contain -rotate-90 scale-x-[-1] opacity-40"
        />
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full flex-col -mt-[100px]  pt-0 sm:pt-0">
        <motion.div
          className="mx-auto w-full overflow-hidden px-0 "
          style={{
            height: `calc(120dvh - ${imageTopOffset}px)`,
            marginTop: `${imageTopOffset}px`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="relative h-full w-full">
            <div className="relative -mt-12 h-full w-full pb-24 flex justify-center items-center">
              <Image
                src="/images/IMG_1960.JPG"
                alt="Marcelito and Daisy"
                fill
                priority
                className="object-cover object-center "
              />

              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(27,8,8,0.34),transparent_40%),radial-gradient(circle_at_80%_22%,rgba(27,8,8,0.3),transparent_35%)]" /> */}
              <div className="absolute inset-x-0 -bottom-[460px] h-[100%] bg-[linear-gradient(to_bottom,rgba(91,21,25,0)_0%,rgba(91,21,25,0.25)_20%,rgba(91,21,25,1)_45%,rgba(91,21,25,1)_55%,rgba(91,21,25,0.25)_80%,rgba(91,21,25,0)_100%)]" />
              <div
                className="  inset-0 mt-[600px] flex items-end justify-center text-center"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                <div className=" sm:-translate-y-10">
                  <p
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      lineHeight: 0.9,
                      color: "#f6e2bf",
                      textShadow: "0 10px 28px rgba(34, 0, 7, 0.5)",
                    }}
                    className="text-[80px] -ml-4 text-left"
                  >
                    Marcelito
                  </p>
                  <p
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      lineHeight: 0.9,
                      color: "#f6e2bf",
                      textShadow: "0 10px 28px rgba(34, 0, 7, 0.5)",
                    }}
                    className="text-[50px] mt-4 mb-4"
                  >
                    <small className="text-[50px]">&</small>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      lineHeight: 0.9,
                      color: "#f6e2bf",
                      textShadow: "0 10px 28px rgba(34, 0, 7, 0.5)",
                    }}
                    className="text-[80px] pr-0 pt-4  text-right "
                  >
                    Daisy
                  </p>
                  <p
                    className="mt-10 text-[20px] "
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "0.35em",
                      color: "#fff",
                      textTransform: "uppercase ",
                    }}
                  >
                    IS GETTING MARRIED
                  </p>
                  <p
                    className="mt-2 text-[30px] -mb-[100px]"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "0.35em",
                      color: "#f1d2a5",
                      textTransform: "uppercase",
                    }}
                  >
                    08.28.2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto -mt-12 pt-20 pb-20 w-full max-w-[1000px] overflow-x-hidden px-6 pb-14 pt-10 sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          data-aos="fade-up"
          data-aos-delay="140"
        >
          <div className="absolute  inset-x-0 -top-[80px]  h-[68%] bg-[linear-gradient(to_bottom,rgba(91,21,25,0)_0%,rgba(91,21,25,0.25)_20%,rgba(91,21,25,1)_45%,rgba(91,21,25,1)_55%,rgba(91,21,25,0.25)_80%,rgba(91,21,25,0)_100%)]" />
          <div className="relative -mt-[80px] mb-12 text-center">
            <div className="mb-6 flex items-end justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <p
                  className="text-5xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Days
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-5xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Hours
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-5xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Minutes
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-5xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Seconds
                </p>
              </div>
            </div>
            <p
              className="text-center italic text-3xl"
              style={{
                color: "#f5dfbe",
                fontFamily: "'Great Vibes', cursive",
                opacity: 0.88,
              }}
            >
              ...days left until we say I Do
            </p>
          </div>

          <div className="relative grid gap-8 text-[#f5dfbe] sm:grid-cols-2">
            <div data-aos="fade-right" data-aos-delay="180">
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.5rem, 3.1vw, 2.3rem)",
                  lineHeight: 1.12,
                }}
                className="text-center"
              >
                With joyful hearts, we&apos;re inviting you to be part of a day
                woven with love, laughter and forever.
              </p>
            </div>
            <div
              className="sm:text-right"
              data-aos="fade-left"
              data-aos-delay="220"
            >
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(2rem, 4.6vw, 3.6rem)",
                  lineHeight: 1.02,
                  color: "#f8e6c5",
                }}
                className="text-center"
              >
                Join us as we begin our next chapter together.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto -mt-16 w-full max-w-[1000px] flex flex-col gap-10 px-4 py-12 sm:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: "easeOut" }}
        >
          <motion.div
            className="relative h-[400px] w-full rounded-[1.2rem] overflow-hidden  sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/images/wedding/us1.png"
              alt="Marcelito and Daisy moment"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 4vw, 2.8rem)",
                letterSpacing: "0.15em",
                color: "#f5ddb0",
                textTransform: "uppercase",
                textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              Save The Date
            </p>
          </motion.div>

          <motion.div
            className="relative h-72 w-full rounded-[1.2rem] overflow-hidden sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="280"
          >
            <Image
              src="/images/wedding/wedding-date.png"
              alt="Wedding date announcement"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="text-center my-8"
            data-aos="fade-up"
            data-aos-delay="320"
          >
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                lineHeight: 0.95,
                color: "#f7e3c0",
                textShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              Our Love Story
            </p>
          </motion.div>

          <motion.div
            className="relative h-[400px] w-full rounded-[1.2rem] overflow-hidden  sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="360"
          >
            <Image
              src="/images/wedding/us2.png"
              alt="Marcelito and Daisy love story moment"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="relative h-[600px] w-full rounded-[1.2rem] overflow-hidden sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Image
              src="/images/wedding/wedding-story.png"
              alt="Wedding story details"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
