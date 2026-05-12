"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef    = useRef<HTMLDivElement>(null);
  const followerRef  = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const onMouseDown = () => {
      cursorRef.current?.classList.add("scale-75");
      followerRef.current?.classList.add("scale-150");
    };
    const onMouseUp = () => {
      cursorRef.current?.classList.remove("scale-75");
      followerRef.current?.classList.remove("scale-150");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Hide cursor when outside window
    document.addEventListener("mouseleave", () => {
      if (cursorRef.current)   cursorRef.current.style.opacity   = "0";
      if (followerRef.current) followerRef.current.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      if (cursorRef.current)   cursorRef.current.style.opacity   = "1";
      if (followerRef.current) followerRef.current.style.opacity = "1";
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none"
        style={{ willChange: "transform", transition: "transform 0.05s linear, opacity 0.3s ease" }}
      />
      {/* Follower ring */}
      <motion.div
        ref={followerRef}
        className="custom-cursor-follower pointer-events-none"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
