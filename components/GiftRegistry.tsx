"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const BANK_ACCOUNTS = [
  {
    type: "GCash",
    icon: "📱",
    name: "Marcelito Cosicol",
    number: "09XX XXX XXXX",
    note: "Include your name as reference",
  },
  {
    type: "BDO",
    icon: "🏦",
    name: "Marcelito C. Cosicol",
    number: "XXXX XXXX XXXX",
    note: "Bank Transfer · Savings Account",
  },
  {
    type: "BPI",
    icon: "🏛️",
    name: "Daisy Joy Alegrado",
    number: "XXXX XXXX XXXX",
    note: "Bank Transfer · Savings Account",
  },
];

// Minimal QR placeholder SVG
const QRPlaceholder = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" fill="#1a0810" rx="8" />
    {/* QR pattern simulation */}
    <rect
      x="10"
      y="10"
      width="30"
      height="30"
      fill="none"
      stroke="rgba(212,175,55,0.6)"
      strokeWidth="2"
      rx="2"
    />
    <rect
      x="15"
      y="15"
      width="20"
      height="20"
      fill="rgba(212,175,55,0.3)"
      rx="1"
    />
    <rect
      x="60"
      y="10"
      width="30"
      height="30"
      fill="none"
      stroke="rgba(212,175,55,0.6)"
      strokeWidth="2"
      rx="2"
    />
    <rect
      x="65"
      y="15"
      width="20"
      height="20"
      fill="rgba(212,175,55,0.3)"
      rx="1"
    />
    <rect
      x="10"
      y="60"
      width="30"
      height="30"
      fill="none"
      stroke="rgba(212,175,55,0.6)"
      strokeWidth="2"
      rx="2"
    />
    <rect
      x="15"
      y="65"
      width="20"
      height="20"
      fill="rgba(212,175,55,0.3)"
      rx="1"
    />
    {/* Dots in middle */}
    {[45, 50, 55, 50, 55, 60, 55, 55, 60, 55, 65, 60]
      .reduce<number[][]>((acc, _, i, arr) => {
        if (i % 2 === 0) acc.push([arr[i], arr[i + 1]]);
        return acc;
      }, [])
      .map(([x, y], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="5"
          height="5"
          fill="rgba(212,175,55,0.4)"
          rx="1"
        />
      ))}
    <text
      x="50"
      y="95"
      textAnchor="middle"
      fill="rgba(212,175,55,0.4)"
      fontSize="5"
      fontFamily="sans-serif"
    >
      QR Code
    </text>
  </svg>
);

function AccountCard({
  account,
  delay,
}: {
  account: (typeof BANK_ACCOUNTS)[0];
  delay: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(account.number.replace(/\s/g, ""))
      .catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
      className="hover-lift"
    >
      <div
        className="relative rounded-2xl p-6 overflow-hidden"
        style={{
          background: "rgba(128,0,32,0.1)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        {/* Background shimmer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 100% 0%, rgba(212,175,55,0.08), transparent 60%)",
          }}
        />

        <div className="flex items-start gap-4 relative z-10">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(128,0,32,0.25))",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            {account.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Type badge */}
            <span
              className="inline-block px-2 py-0.5 rounded-full mb-2"
              style={{
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "#D4AF37",
                textTransform: "uppercase",
              }}
            >
              {account.type}
            </span>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                color: "#3a2a2a",
                marginBottom: "0.25rem",
              }}
            >
              {account.name}
            </p>

            {/* Account number + copy */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.85rem",
                  color: "#3a2a2a",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {account.number}
              </span>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-2 py-0.5 rounded cursor-pointer transition-all duration-300"
                style={{
                  background: copied
                    ? "rgba(212,175,55,0.2)"
                    : "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.6rem",
                  color: "#D4AF37",
                  letterSpacing: "0.1em",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={copied ? "copied" : "copy"}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                color: "rgba(250,240,230,0.4)",
                marginTop: "0.5rem",
              }}
            >
              {account.note}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GiftRegistry() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="gifts"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
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
            With Love
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#FAF0E6",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Gift Registry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "rgba(250,240,230,0.6)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Your presence is the greatest gift of all. But if you wish to bless
            us further, we are deeply grateful.
          </motion.p>
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.2rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-1 flex flex-col gap-4"
          >
            <div
              className="rounded-2xl p-6 flex flex-col items-center gap-4"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  color: "#D4AF37",
                  textTransform: "uppercase",
                  opacity: 0.8,
                }}
              >
                GCash QR Code
              </p>
              <div className="w-36 h-36">
                <QRPlaceholder />
              </div>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(250,240,230,0.45)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                Scan to send a monetary gift via GCash
              </p>
            </div>
          </motion.div>

          {/* Bank accounts */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {BANK_ACCOUNTS.map((account, i) => (
              <AccountCard
                key={account.type}
                account={account}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>

        {/* Wishlist note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="text-center rounded-2xl p-8"
          style={{
            background: "rgba(128,0,32,0.08)",
            border: "1px solid rgba(212,175,55,0.12)",
          }}
        >
          <p className="text-2xl mb-3">🎁</p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              color: "#3a2a2a",
              marginBottom: "0.5rem",
            }}
          >
            Physical Gifts
          </p>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(250,240,230,0.5)",
              lineHeight: 1.7,
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            If you prefer to bring a physical gift, we would love kitchen
            essentials, home décor, travel vouchers, or anything that helps us
            build our home together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
