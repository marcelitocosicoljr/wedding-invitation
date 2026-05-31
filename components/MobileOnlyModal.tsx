"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function MobileOnlyModal() {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      // Check if screen is tablet or larger (768px and up)
      setIsTabletOrDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isTabletOrDesktop) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-[480px] rounded-3xl border-2 p-8 sm:p-10"
        style={{
          borderColor: "#f5ddb0",
          backgroundColor: "#3a000b",
          boxShadow:
            "0 20px 80px rgba(91, 21, 25, 0.6), 0 0 60px rgba(245, 221, 176, 0.2)",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Decorative Top Element */}
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon
            icon="mdi:phone-iphone"
            style={{
              fontSize: "3rem",
              color: "#f5ddb0",
              filter: "drop-shadow(0 0 10px rgba(245, 221, 176, 0.5))",
            }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="text-center mt-6">
          <motion.p
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "2rem",
              color: "#f7e3c0",
              marginBottom: "1rem",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Best Viewed on Mobile
          </motion.p>

          <motion.p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
              color: "#f5ddb0",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We have designed this RSVP invitation to be experienced on your
            mobile phone for the best and most interactive view.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#f5ddb0",
                opacity: 0.5,
              }}
            ></div>
          </motion.div>

          {/* Info Box */}
          <motion.div
            className="rounded-xl border p-4 mb-6"
            style={{
              borderColor: "#f5ddb0",
              borderWidth: "1px",
              backgroundColor: "rgba(245, 221, 176, 0.05)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.9rem",
                color: "#f7e3c0",
                lineHeight: "1.5",
              }}
            >
              📱{" "}
              <span style={{ fontWeight: "600" }}>
                Open this link on your mobile device
              </span>{" "}
              to enjoy the full experience with animations, gallery, and
              interactive elements.
            </p>
          </motion.div>

          {/* QR or Link Section */}
          <motion.p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.85rem",
              color: "#f5dfbe",
              opacity: 0.7,
              marginTop: "1.5rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {"💌 Tap the"} link on your phone to continue
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Icon
            icon="mdi:heart"
            style={{ fontSize: "2rem", color: "#f5ddb0" }}
          />
        </motion.div>
        <motion.div
          className="absolute top-4 right-6 opacity-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Icon
            icon="mdi:flower"
            style={{ fontSize: "1.5rem", color: "#f5ddb0" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
