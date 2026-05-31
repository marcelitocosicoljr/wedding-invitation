"use client";

import { useRef, useEffect, createContext, useContext } from "react";

// Create a context to manage audio globally
const AudioContext = createContext<{ playMusic: () => void } | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
    }
  };

  // Make the playMusic function globally accessible
  useEffect(() => {
    (window as any).playWeddingMusic = playMusic;
  }, []);

  return (
    <AudioContext.Provider value={{ playMusic }}>
      <audio
        ref={audioRef}
        src="/audio/palagi.mp3"
        loop
        preload="auto"
        crossOrigin="anonymous"
      />
    </AudioContext.Provider>
  );
}
