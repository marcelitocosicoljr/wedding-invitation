"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailsPreview() {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push("/details");
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-x-hidden">
      <div
        className="fixed inset-0 w-full"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, rgba(179, 27, 47, 0.45) 0%, rgba(86, 0, 14, 0.2) 30%, transparent 55%), radial-gradient(circle at 85% 72%, rgba(94, 16, 29, 0.16) 0%, transparent 52%), linear-gradient(145deg, #2b0008 0%, #4b000d 35%, #5a000f 58%, #2d0008 100%)",
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
          className="object-contain opacity-60"
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
          className="object-contain opacity-60 -rotate-90 scale-x-[-1]"
        />
      </motion.div>

      <motion.div
        className="relative mt-[16vh] z-40 mx-auto flex w-full max-w-[1220px] flex-col items-center px-3 pb-16 pt-2 sm:px-8 sm:pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-full max-w-[1120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <motion.div
            className="relative z-20 mx-auto h-[460px] w-full sm:h-[560px] md:h-[850px]"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/wedding/open-envelope1.png"
              alt="Open envelope"
              fill
              priority
              className="object-contain drop-shadow-[0_16px_38px_rgba(17,4,10,0.44)]"
            />

            <motion.button
              type="button"
              onClick={handleDetailsClick}
              aria-label="Click here to view details"
              className="absolute right-[8%] -bottom-[30%] h-[72%] w-[34%] sm:right-[3%] sm:w-[30%] md:right-[0%] md:w-[58%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.52 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
            >
              <Image
                src="/images/wedding/clickhere1.png"
                alt="Click here to view details"
                fill
                className="object-contain scale-[1.7]"
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
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full rounded-[0.85rem]  ">
                <Image
                  src="/images/wedding/us1.png"
                  alt="Marcelito and Daisy portrait one"
                  fill
                  className="object-contain -mt-[6px] -ml-[60px] z-10  mt-[50px] "
                />
              </div>
            </motion.div>

            <motion.div
              className="relative h-[340px]  rotate-[5deg] rounded-[1.25rem]  p-3  sm:mt-10 sm:h-[700px]"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 6.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative h-full w-full rounded-[0.85rem] ">
                <Image
                  src="/images/wedding/us2.png"
                  alt="Marcelito and Daisy portrait two"
                  fill
                  className="object-contain -mt-[150px] ml-[60px] z-10 "
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
            <div className="relative mt-6 overflow-hidden rounded-[1.7rem] px-5 py-8  sm:px-10 sm:py-11">
              <p
                className="text-center text-[85px]  mt-[100px]"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  lineHeight: 0.95,
                  color: "#f7e3c0",
                  textShadow: "0 12px 28px rgba(37, 0, 9, 0.45)",
                }}
              >
                Marcelito <small className="block text-[50px] mb-4">&</small>{" "}
                Daisy
              </p>

              <p
                className="mt-8 text-center text-[25px] text-center pl-4"
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
