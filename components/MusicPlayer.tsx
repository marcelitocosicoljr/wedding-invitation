"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Music note SVG icon
const MusicNoteIcon = ({ playing }: { playing: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {playing ? (
      // Pause icon
      <>
        <rect x="6"  y="5" width="4" height="14" rx="1" fill="#D4AF37" />
        <rect x="14" y="5" width="4" height="14" rx="1" fill="#D4AF37" />
      </>
    ) : (
      // Play icon (music note style)
      <path
        d="M9 8.5L9 15.5M9 8.5C9 8.5 13 7 15 6V13M15 6V13M15 13C15 14.1046 14.1046 15 13 15C11.8954 15 11 14.1046 11 13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13Z"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    )}
  </svg>
);

// Animated sound waves
const SoundWaves = ({ playing }: { playing: boolean }) => (
  <div className="flex items-center gap-0.5 h-4">
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-0.5 rounded-full"
        style={{ background: "#D4AF37", opacity: playing ? 1 : 0.3 }}
        animate={
          playing
            ? {
                height: ["4px", `${4 + i * 3}px`, "4px"],
              }
            : { height: "4px" }
        }
        transition={{
          duration: 0.6 + i * 0.1,
          repeat: playing ? Infinity : 0,
          ease: "easeInOut",
          delay: i * 0.1,
        }}
      />
    ))}
  </div>
);

export default function MusicPlayer() {
  const [isPlaying,  setIsPlaying]  = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [volume,     setVolume]     = useState(0.4);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Use a royalty-free romantic instrumental from a public source
  // (users can replace with their own audio file at /audio/wedding-music.mp3)
  const AUDIO_SRC = "/audio/wedding-music.mp3";

  useEffect(() => {
    const audio = new Audio();
    audio.src          = AUDIO_SRC;
    audio.loop         = true;
    audio.volume       = volume;
    audio.preload      = "none";
    audioRef.current   = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasStarted(true);
      } catch {
        // Autoplay blocked — user interaction required
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  // Auto-play on first user interaction with the page
  useEffect(() => {
    if (hasStarted) return;
    const handleFirst = () => {
      if (!hasStarted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(() => {});
      }
      window.removeEventListener("click", handleFirst);
      window.removeEventListener("scroll", handleFirst);
    };
    window.addEventListener("click",  handleFirst, { once: true });
    window.addEventListener("scroll", handleFirst, { once: true });
    return () => {
      window.removeEventListener("click",  handleFirst);
      window.removeEventListener("scroll", handleFirst);
    };
  }, [hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      transition={{ delay: 3, duration: 0.6, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Volume slider (shown on hover) */}
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl"
            style={{
              background: "rgba(13,4,8,0.9)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
          >
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: "rgba(212,175,55,0.7)",
                textTransform: "uppercase",
              }}
            >
              Vol
            </p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="h-24 cursor-pointer"
              style={{
                writingMode: "vertical-lr",
                direction: "rtl",
                WebkitAppearance: "slider-vertical",
                width: "4px",
                accentColor: "#D4AF37",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main music button */}
      <motion.div
        className="relative"
        onHoverStart={() => setShowVolume(true)}
        onHoverEnd={() => setShowVolume(false)}
      >
        {/* Outer pulse ring (when playing) */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              key="pulse"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: "rgba(212,175,55,0.2)" }}
            />
          )}
        </AnimatePresence>

        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="music-btn relative w-14 h-14 flex flex-col items-center justify-center gap-1"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <MusicNoteIcon playing={isPlaying} />
          <SoundWaves playing={isPlaying} />
        </motion.button>
      </motion.div>

      {/* Tooltip on first load */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="absolute bottom-full right-0 mb-3 whitespace-nowrap py-2 px-3 rounded-xl pointer-events-none"
            style={{
              background: "rgba(13,4,8,0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212,175,55,0.2)",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(250,240,230,0.7)",
              letterSpacing: "0.1em",
            }}
          >
            🎵 Click to play music
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
