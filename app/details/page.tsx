/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Icon } from "@iconify/react";

export default function DetailsPage() {
  const imageTopOffset = 70;
  const weddingDate = new Date("2026-08-28T00:00:00").getTime();
  const [showQRCodes, setShowQRCodes] = React.useState(false);
  const [showPhotoGallery, setShowPhotoGallery] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
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
          className="mx-auto h-full w-full overflow-hidden px-0 "
          style={{
            // height: `calc(120dvh - ${imageTopOffset}px)`,
            marginTop: `${imageTopOffset}px`,
          }}
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="relative h-full w-full">
            <div className="relative -mt-12 h-full w-full pb-20 flex justify-center items-center">
              <Image
                src="/images/IMG_1960.JPG"
                alt="Marcelito and Daisy"
                fill
                priority
                className="object-cover object-center "
              />

              {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(27,8,8,0.34),transparent_40%),radial-gradient(circle_at_80%_22%,rgba(27,8,8,0.3),transparent_35%)]" /> */}
              <div className="absolute inset-x-0 -bottom-[500px] h-[100%] bg-[linear-gradient(to_bottom,rgba(91,21,25,0)_0%,rgba(91,21,25,0.25)_20%,rgba(91,21,25,1)_45%,rgba(91,21,25,1)_55%,rgba(91,21,25,0.25)_80%,rgba(91,21,25,0)_100%)]" />
              <div
                className="  inset-0 mt-[600px] flex items-end justify-center text-center"
                data-aos="zoom-out"
                data-aos-delay="300"
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
                    className="mt-2 text-[30px]"
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
          className="relative mx-auto -mt-[50px]  pb-20 w-full max-w-[1000px] overflow-x-hidden px-6 pb-14 pt-10 sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          data-aos="fade-up"
          data-aos-delay="140"
        >
          <div className="absolute  inset-x-0 -top-[80px]  h-[68%] bg-[linear-gradient(to_bottom,rgba(91,21,25,0)_0%,rgba(91,21,25,0.25)_20%,rgba(91,21,25,1)_45%,rgba(91,21,25,1)_55%,rgba(91,21,25,0.25)_80%,rgba(91,21,25,0)_100%)]" />
          <div className="relative  mb-12 text-center">
            <div className="mb-6 flex -mt-[45px]  items-end justify-center gap-6 sm:gap-10">
              <div className="flex   flex-col items-center">
                <p
                  className="text-4xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "serif",
                  }}
                >
                  {String(timeLeft.days).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Days
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-4xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "serif",
                  }}
                >
                  {String(timeLeft.hours).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Hours
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-4xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "serif",
                  }}
                >
                  {String(timeLeft.minutes).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Minutes
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p
                  className="text-4xl font-bold sm:text-6xl"
                  style={{
                    color: "#f5ddb0",
                    fontFamily: "serif",
                  }}
                >
                  {String(timeLeft.seconds).padStart(2, "0")}
                </p>
                <p
                  className="text-sm uppercase tracking-widest"
                  style={{
                    color: "#f5dfbe",
                    fontFamily: "serif",
                    fontSize: "0.75rem",
                  }}
                >
                  Seconds
                </p>
              </div>
            </div>
            <p
              className="text-right -mt-4 italic text-xl"
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
          className="relative mx-auto -mt-[150px] w-full max-w-[1000px] flex flex-col gap-10 px-4 py-12 sm:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.0, ease: "easeOut" }}
        >
          <motion.div
            className="relative h-[300px] w-full rounded-[1.2rem]  sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src="/images/wedding/final-date2.png"
              alt="Marcelito and Daisy moment"
              fill
              className="object-contain scale-[1] -ml-2"
            />
          </motion.div>

          <div
            className="relativ -mt-16 mx-auto w-full rounded-[2rem] border-[0.01px] p-8 sm:p-12 md:p-16"
            style={{
              borderColor: "#f5ddb0",
              backgroundColor: "rgba(91, 21, 25, 0.08)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              boxShadow:
                "0 8px 32px rgba(91, 21, 25, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
          >
            <motion.div
              className="text-center pt-4"
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
              className="relative h-[500px]  w-full rounded-[1.2rem] overflow-hidden sm:h-96"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <Image
                src="/images/wedding/wedding-story1.png"
                alt="Wedding story details"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Photo Gallery Preview Section */}
        <motion.div
          className="relative w-full py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 7vw, 4rem)",
                color: "#f7e3c0",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              Our Prenup Gallery
            </p>

            {/* Grid of 4 Photos */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              {[
                "01 MARS AND DAISY-3.jpg",
                "02 MARS AND DAISY-6.jpg",
                "06 MARS AND DAISY-23.jpg",
                "09 MARS AND DAISY-7.jpg",
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setShowPhotoGallery(true);
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  data-aos="zoom-in"
                  data-aos-delay={`${100 + index * 50}`}
                >
                  <Image
                    src={`/images/wedding/invitation/${image}`}
                    alt={`Wedding photo ${index + 1}`}
                    fill
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                  {index === 3 && (
                    <div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      }}
                    >
                      <Icon
                        icon="mdi:image-multiple-outline"
                        style={{
                          fontSize: "3rem",
                          color: "#f5ddb0",
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => {
                  setCurrentImageIndex(0);
                  setShowPhotoGallery(true);
                }}
                className="px-10 py-3 rounded-full text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "#750019",
                  color: "#f5ddb0",
                  border: "2px solid #f5ddb0",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#5B1519",
                  boxShadow: "0 10px 30px rgba(245, 221, 176, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                View All Photos
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.2em",
            color: "#f5ddb0",
            textTransform: "uppercase",
          }}
          className="mx-auto text-center mt-10"
        >
          Venue
        </p>

        <motion.div
          className="relative mx-auto w-full max-w-[1000px] overflow-x-hidden px-4 py-10 sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          data-aos="fade-up"
          data-aos-delay="160"
        >
          <div
            className="relative mx-auto max-w-[900px] rounded-[2rem] border-[0.01px] py-8 px-2"
            style={{
              borderColor: "#f5ddb0",
              backgroundColor: "rgba(91, 21, 25, 0.08)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              boxShadow:
                "0 8px 32px rgba(91, 21, 25, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
            data-aos="zoom-in"
            data-aos-delay="140"
          >
            <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-12">
              <div
                className="flex flex-col justify-center text-center lg:text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    lineHeight: 0.9,
                    color: "#f7e3c0",
                    marginTop: "1rem",
                    marginBottom: "1.5rem",
                  }}
                  className=" text-[40px]"
                >
                  Ceremony
                </p>
                <div className="flex gap-4 items-center flex-row">
                  <motion.div
                    className="relative  h-[130px] w-full rounded-[1.5rem] overflow-hidden sm:h-80 lg:h-96"
                    data-aos="zoom-in"
                    data-aos-delay="260"
                  >
                    <Image
                      src="/images/wedding/wedding-church.png"
                      alt="Immaculate Conception Cathedral"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      lineHeight: 1.6,
                      color: "#f5dfbe",
                    }}
                    className="text-[14px] "
                  >
                    <strong>Immaculate Conception Cathedral </strong> <br /> 58
                    Rizal Avenue, Puerto Princesa City, Palawan
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start mt-6">
                  <a
                    href="https://maps.app.goo.gl/keYofLnYgZ1kRxG78"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      type="button"
                      className="px-8 py-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#750019",
                        color: "#f5ddb0",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        border: "2px solid #f5ddb0",
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: "#520010" }}
                      whileTap={{ scale: 0.98 }}
                      data-aos="zoom-in"
                      data-aos-delay="260"
                    >
                      View Map
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[1000px] overflow-x-hidden px-4  sm:px-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          data-aos="fade-up"
          data-aos-delay="160"
        >
          <div
            className="relative mx-auto  max-w-[900px] rounded-[2rem] border-[0.01px] py-8 px-2"
            style={{
              borderColor: "#f5ddb0",
              backgroundColor: "rgba(91, 21, 25, 0.08)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              boxShadow:
                "0 8px 32px rgba(91, 21, 25, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
            }}
            data-aos="zoom-in"
            data-aos-delay="140"
          >
            <div className="grid gap-10 items-center lg:grid-cols-2 lg:gap-12">
              <div
                className="flex flex-col justify-center text-center lg:text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <p
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    lineHeight: 0.9,
                    color: "#f7e3c0",
                    marginTop: "1rem",
                    marginBottom: "1.5rem",
                  }}
                  className=" text-[40px]"
                >
                  Reception
                </p>

                <div
                  className="flex flex-row flex-row items-center justify-center text-center lg:text-left"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <motion.div
                    className="relative h-[100px] w-full rounded-[1.5rem] overflow-hidden sm:h-80 lg:h-96"
                    data-aos="zoom-in"
                    data-aos-delay="260"
                  >
                    <Image
                      src="/images/wedding/reception.png"
                      alt="Citystate Asturias Hotel Palawan"
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      lineHeight: 1.6,
                      color: "#f5dfbe",
                    }}
                    className="text-[14px] mt-6 mb-2"
                  >
                    <strong>Citystate Asturias Hotel Palawan</strong>
                    <br />
                    South National Highway, Tiniguiban,
                    <br />
                    Puerto Princesa City, Palawan
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start mt-6">
                  <a
                    href="https://maps.app.goo.gl/tHzdtNzE8sLqefpc7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      type="button"
                      className="px-8 py-3 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#750019",
                        color: "#f5ddb0",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        border: "2px solid #f5ddb0",
                      }}
                      whileHover={{ scale: 1.05, backgroundColor: "#520010" }}
                      whileTap={{ scale: 0.98 }}
                      data-aos="zoom-in"
                      data-aos-delay="260"
                    >
                      View Map
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[500px]  w-full rounded-[1.2rem] overflow-hidden sm:h-96"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Image
            src="/images/wedding/final-timeline.png"
            alt="Wedding story details"
            fill
            className="object-contain scale-[0.95] -ml-2"
          />
        </motion.div>

        {/* Bridal Entourage Section */}
        <motion.div
          className="group relative rounded-[1.8rem] w-[94%] mx-auto border-[0.01px] overflow-hidden transition-all duration-300"
          style={{
            borderColor: "#f5ddb0",
            backgroundColor: "rgba(117, 0, 25, 0.12)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            boxShadow:
              "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          data-aos="fade-up"
          data-aos-delay="340"
        >
          <motion.div
            className="relative h-[550px] w-full rounded-[1.2rem]  sm:h-96"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/images/wedding/principal-final.png"
              alt="Marcelito and Daisy moment"
              className="object-contain w-full"
            />
          </motion.div>

          <motion.div className="relative mt-10 h-[540px] w-full rounded-[1.2rem]  sm:h-96">
            <img
              src="/images/wedding/principal2.png"
              alt="Marcelito and Daisy moment"
              className="object-contain w-full -mt-[100px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Dress Code Section */}
      <div className="relative w-full py-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-6 lg:px-8 mb-8"
        >
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              color: "#f7e3c0",
              marginBottom: "1.5rem",
            }}
          >
            Dress Code
          </p>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              letterSpacing: "0.15em",
              color: "#f5ddb0",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              fontWeight: "600",
            }}
          >
            We Encourage You to Dress According to Our Wedding Colors
          </p>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              color: "#f7e3c0",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
              fontWeight: "500",
            }}
          >
            Guests and Family
          </p>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "#f5ddb0",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Ladies and Gentlemen Have Different Assigned Colors
          </p>
        </motion.div>

        {/* Dress Code Image - Full Width */}
        <motion.div
          className="relative w-full h-[380px] sm:h-80 lg:h-96 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src="/images/wedding/dress.png"
            alt="Dress Code"
            fill
            className="object-contain p-4"
            priority={false}
          />
        </motion.div>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f5ddb0",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
          className="text-center px-6 text-[8px] -mt-3"
        >
          FRIENDLY REMINDER: <br /> PLEASE AVOID WEARING WHITE , T-SHIRTS,
          SANDO, SHORTS AND SLIPPERS.
        </p>
      </div>

      {/* Gentle Reminders Section */}
      <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              color: "#f7e3c0",
              textAlign: "center",
              marginBottom: "4rem",
            }}
            className="-mt-[50px]"
          >
            Gentle Reminders
          </p>

          {/* Reminders Grid */}
          <div className="grid w-full -mt-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Reminder 1: Gift Note */}
            <motion.div
              className="flex flex-col w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Gift Note
              </p>
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#f5ddb0",
                  }}
                ></div>
              </div>
              {/* Card Content */}
              <motion.div
                className="flex-1 rounded-2xl border-2 p-6"
                style={{
                  borderColor: "#f5ddb0",
                  backgroundColor: "rgba(91, 21, 25, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 12px 40px rgba(91, 21, 25, 0.3)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(245, 221, 176, 0.15)",
                      border: "2px solid #f5ddb0",
                    }}
                  >
                    <Icon
                      icon="mdi:gift-outline"
                      style={{ fontSize: "2.5rem", color: "#f5ddb0" }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    color: "#f5ddb0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  Your presence at our wedding is the greatest gift of all.
                  However, if you wish to honour us with a gift, a cash gift
                  would be very welcome.
                </p>
                <motion.button
                  onClick={() => setShowQRCodes(true)}
                  className="w-full py-3 px-4 rounded-lg font-semibold transition-all"
                  style={{
                    backgroundColor: "#750019",
                    color: "#f5ddb0",
                    border: "2px solid #f5ddb0",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    letterSpacing: "0.08em",
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#5B1519" }}
                  whileTap={{ scale: 0.95 }}
                >
                  GIFT OPTIONS
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Reminder 2: No Plus One */}
            <motion.div
              className="flex flex-col   w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                No Plus One
              </p>
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#f5ddb0",
                  }}
                ></div>
              </div>
              {/* Card Content */}
              <motion.div
                className="flex-1 rounded-2xl border-2 p-6"
                style={{
                  borderColor: "#f5ddb0",
                  backgroundColor: "rgba(91, 21, 25, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 12px 40px rgba(91, 21, 25, 0.3)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(245, 221, 176, 0.15)",
                      border: "2px solid #f5ddb0",
                    }}
                  >
                    <Icon
                      icon="bi:person-x"
                      style={{ fontSize: "2.5rem", color: "#f5ddb0" }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    color: "#f5ddb0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  Due to limited space & seating constraints, we are unable to
                  accommodate additional guests.
                </p>
              </motion.div>
            </motion.div>

            {/* Reminder 3: No Kids */}
            <motion.div
              className="flex flex-col w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                No Kids
              </p>
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#f5ddb0",
                  }}
                ></div>
              </div>
              {/* Card Content */}
              <motion.div
                className="flex-1 rounded-2xl border-2 p-6"
                style={{
                  borderColor: "#f5ddb0",
                  backgroundColor: "rgba(91, 21, 25, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 12px 40px rgba(91, 21, 25, 0.3)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(245, 221, 176, 0.15)",
                      border: "2px solid #f5ddb0",
                    }}
                  >
                    <Icon
                      icon="hugeicons:kid"
                      style={{ fontSize: "2.5rem", color: "#f5ddb0" }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    color: "#f5ddb0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  We respectfully request an adults-only celebration, with the
                  exception of children who are part of the entourage.
                </p>
              </motion.div>
            </motion.div>

            {/* Reminder 4: Arrival Time */}
            <motion.div
              className="flex flex-col w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Arrival Time
              </p>
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#f5ddb0",
                  }}
                ></div>
              </div>
              {/* Card Content */}
              <motion.div
                className="flex-1 rounded-2xl border-2 p-6"
                style={{
                  borderColor: "#f5ddb0",
                  backgroundColor: "rgba(91, 21, 25, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 12px 40px rgba(91, 21, 25, 0.3)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(245, 221, 176, 0.15)",
                      border: "2px solid #f5ddb0",
                    }}
                  >
                    <Icon
                      icon="mdi:clock"
                      style={{ fontSize: "2.5rem", color: "#f5ddb0" }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    color: "#f5ddb0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  The ceremony begins promptly at 2PM, with the entourage walk
                  starting at 1:45 PM. Please plan to arrive at 1:30PM to allow
                  ample time for parking and finding your seat.
                </p>
              </motion.div>
            </motion.div>

            {/* Reminder 5: Leave Time */}
            <motion.div
              className="flex flex-col w-full max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.8rem, 4.5vw, 2.4rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Leave Time
              </p>
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#f5ddb0",
                  }}
                ></div>
              </div>
              {/* Card Content */}
              <motion.div
                className="flex-1 rounded-2xl border-2 p-6"
                style={{
                  borderColor: "#f5ddb0",
                  backgroundColor: "rgba(91, 21, 25, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 8px 32px rgba(91, 21, 25, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  translateY: -8,
                  boxShadow: "0 12px 40px rgba(91, 21, 25, 0.3)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(245, 221, 176, 0.15)",
                      border: "2px solid #f5ddb0",
                    }}
                  >
                    <Icon
                      icon="mdi:logout"
                      style={{ fontSize: "2.5rem", color: "#f5ddb0" }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                    color: "#f5ddb0",
                    lineHeight: "1.8",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  Please do not eat and run. It took us months to plan our
                  wedding. Stay with us until the end of the program. Should you
                  need to leave early, we would greatly appreciate the chance to
                  thank you and bid you goodbye—perhaps after our SDE video has
                  been played.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* RSVP Section */}
      <motion.div
        className="relative w-full py-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Description */}
          <motion.p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.3rem)",
              color: "#f5ddb0",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            We Would Love <br /> to Have You There
          </motion.p>

          {/* Main RSVP Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfoUGYXMdyd5-3uRdPco8hT9o76IGiys4mQWcpNZVo8e4R3NA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (
                  !e.currentTarget.href ||
                  e.currentTarget.href === window.location.href
                ) {
                  e.preventDefault();
                  alert("RSVP link coming soon!");
                }
              }}
            >
              <motion.button
                className="px-12 sm:px-16 py-5 -mt-4 sm:py-6 rounded-full font-bold text-lg sm:text-2xl transition-all  shadow-2xl"
                style={{
                  backgroundColor: "#750019",
                  color: "#f5ddb0",
                  border: "3px solid #f5ddb0",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  boxShadow:
                    "0 10px 40px rgba(245, 221, 176, 0.3), 0 0 60px rgba(245, 221, 176, 0.1)",
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#5B1519",
                  boxShadow:
                    "0 15px 50px rgba(245, 221, 176, 0.4), 0 0 80px rgba(245, 221, 176, 0.2)",
                  letterSpacing: "0.18em",
                }}
                whileTap={{ scale: 1 }}
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                RSVP NOW
              </motion.button>
            </a>
          </motion.div>

          {/* Decorative Text */}
          <motion.p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(2.3rem, 4vw, 2.5rem)",
              color: "#f7e3c0",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We Can&apos;t Wait <br /> to Celebrate with You
          </motion.p>

          {/* Bottom Detail Text */}
          <motion.p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5dfbe",
              letterSpacing: "0.08em",
              opacity: 0.85,
            }}
            className="px-6 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Please confirm your attendance by{" "}
            <span style={{ color: "#f5ddb0", fontWeight: "600" }}>
              June 20, 2026
            </span>
            <br />
            <br />
            <span
              style={{ color: "#f5ddb0", fontWeight: "600" }}
              className="text-sm"
            >
              If we will not receive a response by this date, it will be marked
              as a {'"NO"'}.
            </span>
          </motion.p>
        </div>
      </motion.div>

      {/* Monogram Section */}
      <motion.div
        className="relative -mt-[30px] w-full py-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="relative w-20 h-20 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6">
          <Image
            src="/images/marsdais.png"
            alt="Marcelito & Daisy Monogram"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            color: "#f7e3c0",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
          className="mb-16"
        >
          Marcelito & Daisy
        </p>
      </motion.div>

      {/* QR Code Modal */}
      {showQRCodes && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowQRCodes(false)}
        >
          <motion.div
            className="relative w-full max-w-3xl rounded-3xl border-2 p-8 sm:p-10"
            style={{
              borderColor: "#f5ddb0",
              backgroundColor: "#3a000b",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              boxShadow: "0 20px 60px rgba(91, 21, 25, 0.5)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setShowQRCodes(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon
                icon="mdi:close"
                style={{ fontSize: "2rem", color: "#f5ddb0" }}
              />
            </motion.button>

            {/* Title */}
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#f7e3c0",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Gift Transfer Options
            </p>

            {/* QR Codes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* BPI QR Code */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#f5ddb0] mb-4">
                  <Image
                    src="/images/wedding/bpi.png"
                    alt="BPI QR Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    color: "#f5ddb0",
                    textAlign: "center",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                  }}
                >
                  BPI
                </p>
              </motion.div>

              {/* GCash QR Code */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#f5ddb0] mb-4">
                  <Image
                    src="/images/wedding/palpay.png"
                    alt="GCash QR Code"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    color: "#f5ddb0",
                    textAlign: "center",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                  }}
                >
                  PalawanPay
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Photo Gallery Modal - Full Width Scrollable */}
      {showPhotoGallery && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPhotoGallery(false)}
        >
          <motion.div
            className="relative w-full h-[90vh] max-w-4xl rounded-3xl overflow-hidden flex flex-col"
            style={{
              borderColor: "#f5ddb0",
              backgroundColor: "#3a000b",
              boxShadow: "0 20px 60px rgba(91, 21, 25, 0.5)",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setShowPhotoGallery(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: "rgba(91, 21, 25, 0.8)",
                padding: "0.5rem",
                borderRadius: "50%",
                border: "2px solid #f5ddb0",
              }}
            >
              <Icon
                icon="mdi:close"
                style={{ fontSize: "1rem", color: "#f5ddb0" }}
              />
            </motion.button>

            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#f5ddb0] border-opacity-30">
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  color: "#f7e3c0",
                  textAlign: "center",
                }}
              >
                Our Prenup Gallery
              </p>
            </div>

            {/* Scrollable Photos Container */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
              <div className="w-full">
                {[
                  "01 MARS AND DAISY.jpg",
                  "01 MARS AND DAISY-3.jpg",
                  "01 MARS AND DAISY-6.jpg",
                  "01 MARS AND DAISY-7.jpg",
                  "01 MARS AND DAISY-8.jpg",
                  "02 MARS AND DAISY.jpg",
                  "02 MARS AND DAISY-2.jpg",
                  "02 MARS AND DAISY-3.jpg",
                  "02 MARS AND DAISY-5.jpg",
                  "02 MARS AND DAISY-6.jpg",
                  "02 MARS AND DAISY-10.jpg",
                  "02 MARS AND DAISY-12.jpg",
                  "03 MARS AND DAISY.jpg",
                  "03 MARS AND DAISY-2.jpg",
                  "03 MARS AND DAISY-3.jpg",
                  "03 MARS AND DAISY-6.jpg",
                  "03 MARS AND DAISY-7.jpg",
                  "04 MARS AND DAISY.jpg",
                  "04 MARS AND DAISY-2.jpg",
                  "04 MARS AND DAISY-3.jpg",
                  "04 MARS AND DAISY-8.jpg",
                  "04 MARS AND DAISY-9.jpg",
                  "05 MARS AND DAISY-4.jpg",
                  "05 MARS AND DAISY-6.jpg",
                  "06 MARS AND DAISY-3.jpg",
                  "06 MARS AND DAISY-6.jpg",
                  "06 MARS AND DAISY-14.jpg",
                  "06 MARS AND DAISY-17.jpg",
                  "06 MARS AND DAISY-20.jpg",
                  "06 MARS AND DAISY-23.jpg",
                  "06 MARS AND DAISY-25.jpg",
                  "06 MARS AND DAISY-26.jpg",
                  "06 MARS AND DAISY-27.jpg",
                  "07 MARS AND DAISY.jpg",
                  "07 MARS AND DAISY-18.jpg",
                  "07 MARS AND DAISY-19.jpg",
                  "08 MARS AND DAISY.jpg",
                  "08 MARS AND DAISY-2.jpg",
                  "08 MARS AND DAISY-9.jpg",
                  "08 MARS AND DAISY-10.jpg",
                  "08 MARS AND DAISY-11.jpg",
                  "08 MARS AND DAISY-13.jpg",
                  "09 MARS AND DAISY.jpg",
                  "09 MARS AND DAISY-3.jpg",
                  "09 MARS AND DAISY-7.jpg",
                  "09 MARS AND DAISY-8.jpg",
                  "09 MARS AND DAISY-9.jpg",
                  "09 MARS AND DAISY-11.jpg",
                  "09 MARS AND DAISY-14.jpg",
                  "10 MARS AND DAISY.jpg",
                  "11 MARS AND DAISY-2.jpg",
                  "11 MARS AND DAISY-3.jpg",
                  "11 MARS AND DAISY-7.jpg",
                  "12 MARS AND DAISY-8.jpg",
                  "12 MARS AND DAISY-10.jpg",
                  "13 MARS AND DAISY.jpg",
                  "13 MARS AND DAISY-7.jpg",
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative w-full cursor-pointer hover:opacity-80 transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={`/images/wedding/invitation/${image}`}
                      alt={`Wedding photo ${index + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                      priority={index < 3}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="p-4 sm:p-6 border-t border-[#f5ddb0] border-opacity-30 text-center">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.85rem",
                  color: "#f5dfbe",
                  opacity: 0.7,
                }}
              >
                Scroll to view all photos
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Single Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full h-[90vh] max-w-5xl flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backgroundColor: "rgba(91, 21, 25, 0.8)",
                padding: "0.5rem",
                borderRadius: "50%",
                border: "2px solid #f5ddb0",
              }}
            >
              <Icon
                icon="mdi:close"
                style={{ fontSize: "12px", color: "#f5ddb0" }}
              />
            </motion.button>

            {/* Image */}
            <Image
              src={`/images/wedding/invitation/${selectedImage}`}
              alt="Full view photo"
              width={1400}
              height={1000}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
