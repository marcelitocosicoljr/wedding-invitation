"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const PETAL_SVGS = [
  // Rose petal 1
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="20" rx="12" ry="18" fill="currentColor" opacity="0.7" transform="rotate(20 20 20)"/>
  </svg>`,
  // Rose petal 2
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5 Q32 15 28 28 Q20 35 12 28 Q8 15 20 5Z" fill="currentColor" opacity="0.6"/>
  </svg>`,
  // Small heart
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30 L8 18 A8 8 0 0 1 20 10 A8 8 0 0 1 32 18 Z" fill="currentColor" opacity="0.5"/>
  </svg>`,
  // Leaf
  `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="20" rx="8" ry="16" fill="currentColor" opacity="0.4" transform="rotate(45 20 20)"/>
  </svg>`,
];

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  svgIndex: number;
  color: string;
  swayX: number;
}

const COLORS = [
  "#FFB6C1", // blush
  "#D4AF37", // gold
  "#F4A0AE", // rose
  "#E8899A", // deeper rose
  "#800020", // burgundy
];

function generatePetals(count: number): Petal[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 12,
    size: 10 + Math.random() * 20,
    svgIndex: Math.floor(Math.random() * PETAL_SVGS.length),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    swayX: (Math.random() - 0.5) * 200,
  }));
}

interface PetalWithRepeatDelay extends Petal {
  repeatDelay: number;
}

export default function FloatingPetals({ count = 18 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(generatePetals(count));
  }, [count]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[5]"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-5%",
            width: petal.size,
            height: petal.size,
            color: petal.color,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, petal.swayX, petal.swayX * 0.5, petal.swayX * 1.2],
            rotate: [0, 180, 360, 540],
            opacity: [0, 0.8, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            repeatDelay: 2 + Math.random() * 5,
            ease: "linear",
          }}
          dangerouslySetInnerHTML={{ __html: PETAL_SVGS[petal.svgIndex] }}
        />
      ))}
    </div>
  );
}
