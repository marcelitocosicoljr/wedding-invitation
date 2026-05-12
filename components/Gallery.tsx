"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/IMG_1960.JPG",
    alt: "Marcelito & Daisy - Proposal moment",
    span: "tall",
  },
  {
    src: "/images/IMG_1961.JPG",
    alt: "Beautiful moment together",
    span: "normal",
  },
  { src: "/images/IMG_1962.JPG", alt: "Romantic moment", span: "normal" },
  {
    src: "/images/DJI_20260410094304_0003_D.jpg",
    alt: "Aerial view - Celebration",
    span: "wide",
  },
  { src: "/images/IMG_1963.JPG", alt: "Couple embrace", span: "tall" },
  { src: "/images/DSC03857.jpg", alt: "Wedding celebration", span: "normal" },
  { src: "/images/DSC03859.jpg", alt: "Precious moment", span: "normal" },
  { src: "/images/DSC04032.jpg", alt: "Joy and laughter", span: "normal" },
  { src: "/images/IMG_1964.JPG", alt: "Cherished memory", span: "tall" },
  { src: "/images/DSC03869.jpg", alt: "Special moment", span: "normal" },
  {
    src: "/images/DJI_20260410094553_0010_D.jpg",
    alt: "Aerial celebration",
    span: "wide",
  },
  { src: "/images/DSC04237.jpg", alt: "Golden hour portrait", span: "normal" },
];

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

function LightboxModal({
  image,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(13,4,8,0.97)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      {/* Image container */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative max-w-4xl max-h-[85vh] w-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div className="relative" style={{ aspectRatio: "3/2" }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />
          {/* Gold vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.5)" }}
          />
        </div>

        {/* Caption */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 text-center"
          style={{
            background:
              "linear-gradient(to top, rgba(13,4,8,0.9), transparent)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "rgba(250,240,230,0.8)",
            }}
          >
            {image.alt}
          </p>
          <p
            className="section-label mt-1"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "#D4AF37",
              opacity: 0.6,
            }}
          >
            {index + 1} / {total}
          </p>
        </div>
      </motion.div>

      {/* Prev / Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{
          background: "rgba(128,0,32,0.5)",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "#D4AF37",
          fontSize: "1.2rem",
        }}
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
        style={{
          background: "rgba(128,0,32,0.5)",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "#D4AF37",
          fontSize: "1.2rem",
        }}
      >
        →
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: "rgba(13,4,8,0.8)",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#D4AF37",
        }}
      >
        ✕
      </button>
    </motion.div>
  );
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: "easeOut" }}
      className="image-frame group relative overflow-hidden"
      onClick={onClick}
      style={{
        aspectRatio:
          image.span === "tall" ? "3/4" : image.span === "wide" ? "4/3" : "1/1",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="relative w-full h-full min-h-[200px] bg-gradient-to-br from-pink-50 to-white"
        style={{ aspectRatio: "inherit" }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center backdrop-blur-sm"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.3), rgba(153,51,76,0.2))",
          }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #f0d060)",
              color: "#1a0810",
              fontSize: "1.5rem",
            }}
          >
            🔍
          </motion.div>
        </div>
        {/* Decorative frame corners */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: "#D4AF37" }}
          />
          <div
            className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: "#D4AF37" }}
          />
          <div
            className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: "#D4AF37" }}
          />
          <div
            className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderColor: "#D4AF37" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const openLightbox = (i: number) => setSelectedIndex(i);
  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0,
    );
  const nextImage = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : 0));

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(128,0,32,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
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
            Moments
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
            Our Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "#3a2a2a",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Pieces of our journey, frozen in time.
          </motion.p>
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.2rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {GALLERY_IMAGES.map((image, i) => (
            <GalleryItem
              key={i}
              image={image}
              index={i}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>

        {/* View more hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            color: "rgba(250,240,230,0.4)",
            textTransform: "uppercase",
          }}
        >
          Click any photo to view
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <LightboxModal
            image={GALLERY_IMAGES[selectedIndex]}
            index={selectedIndex}
            total={GALLERY_IMAGES.length}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
