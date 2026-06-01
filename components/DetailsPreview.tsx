"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function DetailsPreview() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleDetailsClick = () => {
    setIsOpening(true);

    // Trigger the opened animation after initial frame
    setIsOpened(true);

    // Navigate after animation completes (1600ms for zoom animation + buffer)
    setTimeout(() => {
      router.push("/details");
    }, 1000);
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-x-hidden">
      <div
        className="fixed inset-0 w-full"
        style={{
          background:
            "linear-gradient(145deg, #2b0008 0%, #4b000d 35%, #5a000f 58%, #2d0008 100%)",
        }}
      />

      <motion.div
        className="relative mt-[16vh] z-40 mx-auto flex w-full max-w-[1220px] flex-col items-center px-3 pb-16 pt-2 sm:px-8 sm:pb-24"
        initial={{ opacity: 0 }}
        animate={
          isOpened ? { scale: [1, 1.2], opacity: [1, 0.8, 0] } : { opacity: 1 }
        }
        transition={
          isOpened ? { duration: 1, ease: "easeOut" } : { duration: 1 }
        }
      >
        <motion.div
          className="absolute inset-0 "
          animate={{ opacity: isOpened ? 0 : [0.25, 0.34, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeIn" }}
        >
          <Image
            src="/images/wedding/effects1.webp"
            alt="Golden glow"
            fill
            priority
            loading="eager"
            quality={75}
            sizes="100vw"
            className="object-cover blur-[1px]"
          />
        </motion.div>

        <motion.div
          className="absolute left-0 -top-36 h-full w-[200px] sm:w-[240px]"
          animate={{
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeIn",
          }}
          style={{
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/wedding/effects2.webp"
            alt="Romantic texture"
            fill
            priority
            loading="eager"
            quality={75}
            sizes="(max-width: 640px) 200px, 240px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 top-0 h-full w-[200px] sm:w-[240px]"
          animate={{
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeIn",
            delay: 0.35,
          }}
          style={{
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/wedding/effects2.webp"
            alt="Romantic texture right"
            fill
            priority
            loading="eager"
            quality={75}
            sizes="(max-width: 640px) 200px, 240px"
            className="object-cover rotate-180"
          />
        </motion.div>

        <motion.div
          className="fixed inset-0 hidden"
          animate={{ opacity: [0.22, 0.36, 0.22] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeIn" }}
        >
          <Image
            src="/images/wedding/effects1.webp"
            alt="Golden glow"
            fill
            priority
            loading="eager"
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="fixed -left-10 -bottom-12 h-[42vh] w-[42vh] max-h-[420px] max-w-[420px] hidden"
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeIn" }}
          style={{
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/wedding/flower-effects1.webp"
            alt="Floral corner"
            fill
            loading="lazy"
            quality={70}
            sizes="(max-width: 640px) 320px, 420px"
            className="object-contain opacity-60"
          />
        </motion.div>

        <motion.div
          className="fixed -right-10 -top-20 h-[44vh] w-[44vh] max-h-[460px] max-w-[460px] hidden"
          animate={{ opacity: [0.22, 0.32, 0.22] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeIn" }}
          style={{
            willChange: "opacity",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/images/wedding/flower-effects1.webp"
            alt="Floral corner"
            fill
            loading="lazy"
            quality={70}
            sizes="(max-width: 640px) 320px, 460px"
            className="object-contain opacity-60 -rotate-90 scale-x-[-1]"
          />
        </motion.div>
        <motion.div
          className="relative w-full max-w-[1120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.div
            className="relative z-20 -mt-[120px] mx-auto h-[460px] w-full sm:h-[560px] md:h-[850px]"
            animate={{ opacity: [0.98, 1, 0.98] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeIn" }}
            style={{
              willChange: "opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/wedding/open-envelope2.webp"
              alt="Open envelope"
              fill
              priority
              loading="eager"
              quality={85}
              sizes="(max-width: 640px) 460px, (max-width: 1024px) 560px, 850px"
              className="object-contain drop-shadow-[0_16px_38px_rgba(17,4,10,0.44)]"
            />

            <motion.button
              type="button"
              onClick={handleDetailsClick}
              disabled={isOpening}
              aria-label="Click here to view details"
              className={`absolute ${isOpened ? "right-[30%]" : "right-[8%]"} duration-[1s]  -bottom-[28%] h-[72%] w-[34%] sm:right-[3%] sm:w-[30%] md:right-[0%] md:w-[58%] disabled:cursor-not-allowed`}
              initial={{ opacity: 0 }}
              animate={
                isOpened
                  ? { scale: [1, 30], opacity: [1, 0.9, 0.9] }
                  : { opacity: 1 }
              }
              transition={
                isOpened
                  ? { duration: 1, ease: "easeInOut" }
                  : { duration: 0.8 }
              }
              whileHover={{ scale: isOpening ? 1 : 1.02 }}
              whileTap={{ scale: isOpening ? 1 : 0.99 }}
            >
              <Image
                src="/images/wedding/clickhere2.webp"
                alt="Click here to view details"
                fill
                priority
                quality={80}
                sizes="(max-width: 640px) 72%, 58%"
                className="object-contain scale-[2]"
              />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative z-10 grid grid-cols-1 z-10 gap-7 px-2 sm:px-6 md:-mt-10 md:grid-cols-1 md:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <motion.div
              className="relative h-[350px] rotate-[-4deg] rounded-[1.25rem] p-3 sm:h-[700px]"
              animate={{ opacity: [0.95, 1, 0.95] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeIn" }}
              style={{
                willChange: "opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="relative h-full w-full rounded-[0.85rem]  ">
                <Image
                  src="/images/wedding/us1.webp"
                  alt="Marcelito and Daisy portrait one"
                  fill
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 640px) 350px, 700px"
                  className="object-contain  -ml-[60px] z-10  mt-[15px] "
                />
              </div>
            </motion.div>

            <motion.div
              className="relative h-[330px]  rotate-[5deg] rounded-[1.25rem]  p-3  sm:mt-10 sm:h-[700px]"
              animate={{ opacity: [0.95, 1, 0.95] }}
              transition={{
                duration: 6.6,
                repeat: Infinity,
                ease: "easeIn",
              }}
              style={{
                willChange: "opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="relative h-full w-full rounded-[0.85rem] ">
                <Image
                  src="/images/wedding/pogi.webp"
                  alt="Marcelito and Daisy portrait two"
                  fill
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 640px) 330px, 700px"
                  className="object-contain -mt-[135px] ml-[50px] z-10 "
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-30 mx-auto  w-full max-w-[1080px] px-2 pb-10 -mt-[250px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: "easeOut" }}
          >
            <div className="relative mt-12 overflow-hidden rounded-[1.7rem] px-5 py-0 pt-10  sm:px-10 sm:py-11">
              <p
                className="text-center text-[40px]  mt-[60px]"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  lineHeight: 0.95,
                  color: "#f7e3c0",
                  textShadow: "0 12px 28px rgba(37, 0, 9, 0.45)",
                }}
              >
                Marcelito & Daisy
              </p>

              <p
                className="mt-4 text-center text-[18px]  text-center pl-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.42em",
                  color: "#f0d2a4",
                  textTransform: "uppercase",
                }}
              >
                08.28.2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
