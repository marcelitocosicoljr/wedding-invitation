"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CEREMONY = {
  label: "Ceremony",
  icon: "💍",
  time: "4:00 PM",
  venue: "Palawan Cathedral",
  address: "Nepo Beachfront, Puerto Princesa City, Palawan",
  dress: "Black Tie Optional",
  note: "Guests are kindly requested to arrive 30 minutes before the ceremony begins.",
  mapLink: "https://maps.google.com/?q=Palawan+Cathedral+Palawan",
};

const RECEPTION = {
  label: "Reception",
  icon: "🥂",
  time: "7:00 PM",
  venue: "Astorias Palawan",
  address: "Puerto Princesa City, Palawan",
  dress: "Black Tie Required",
  note: "Dinner, dancing, and a night filled with memories await you.",
  mapLink: "https://maps.google.com/?q=Astorias+Palawan",
};

const EXTRAS = [
  {
    icon: "🌹",
    title: "Dress Code",
    desc: "Ladies in formal gowns, Gentlemen in suits or tuxedos",
  },
  {
    icon: "📸",
    title: "Photography",
    desc: "Please respect the unplugged ceremony — phones away during vows",
  },
  {
    icon: "🚗",
    title: "Parking",
    desc: "Complimentary valet parking available at The Palace from 6:30 PM",
  },
  {
    icon: "🏨",
    title: "Accommodation",
    desc: "Special rates available at The Palace Hotel for out-of-town guests",
  },
];

function EventCard({ data, delay }: { data: typeof CEREMONY; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className="relative group hover-lift"
    >
      <div
        className="relative overflow-hidden rounded-2xl p-8 md:p-10"
        style={{
          background: "rgba(128,0,32,0.1)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08), transparent 70%)",
          }}
        />

        {/* Icon */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(128,0,32,0.3))",
              border: "1px solid rgba(212,175,55,0.35)",
            }}
          >
            {data.icon}
          </motion.div>
          <div>
            <p
              className="section-label mb-0.5"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.4em",
                color: "#D4AF37",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              {data.label}
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem",
                color: "#3a2a2a",
              }}
            >
              {data.time}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
          }}
        />

        {/* Venue info */}
        <div className="space-y-4 mb-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delay + 0.2 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.2rem",
                color: "#3a2a2a",
                marginBottom: "0.25rem",
                fontWeight: "600",
              }}
            >
              {data.venue}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: delay + 0.3 }}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.85rem",
                color: "#5a4a4a",
                lineHeight: 1.8,
                fontWeight: "500",
              }}
            >
              {data.address}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: delay + 0.4 }}
            className="flex items-center gap-2"
          >
            <span style={{ fontSize: "0.75rem", color: "#D4AF37" }}>✦</span>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(212,175,55,0.8)",
                letterSpacing: "0.1em",
              }}
            >
              {data.dress}
            </p>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: delay + 0.5 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "#4a3a3a",
            lineHeight: 1.8,
            marginBottom: "1.5rem",
            fontWeight: "500",
          }}
        >
          {data.note}
        </motion.p>

        {/* Map button */}
        <a
          href={data.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-burgundy px-5 py-2.5 rounded-lg text-xs transition-all duration-300 cursor-pointer"
          style={{
            background:
              "linear-gradient(135deg, rgba(128,0,32,0.6), rgba(168,23,68,0.4))",
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#D4AF37",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontSize: "0.65rem",
            textDecoration: "none",
          }}
        >
          <span>📍</span> View on Map
        </a>
      </div>
    </motion.div>
  );
}

export default function EventDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="event-details"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 15% 60%, rgba(128,0,32,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 85% 40%, rgba(212,175,55,0.06) 0%, transparent 60%)
          `,
        }}
      />

      {/* Top decorative border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
            The Big Day
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#3a2a2a",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Event Details
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "#3a2a2a",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            We cannot wait to celebrate with you.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.2rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <EventCard data={CEREMONY} delay={0.1} />
          <EventCard data={RECEPTION} delay={0.25} />
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl overflow-hidden mb-12"
          style={{
            border: "1px solid rgba(212,175,55,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <div className="relative w-full" style={{ paddingBottom: "40%" }}>
            <iframe
              className="absolute inset-0 w-full h-full map-container"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.197765491!2d-122.40588708468236!3d37.78840007975664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d2bfa0989%3A0x91e9b6a7e9d9d099!2sThe+Palace+Hotel!5e0!3m2!1sen!2sus!4v1620000000000"
              style={{ border: 0 }}
              title="Event Location"
              allowFullScreen
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 40px rgba(0,0,0,0.5)",
                background:
                  "linear-gradient(to bottom, rgba(13,4,8,0.15), transparent 30%, transparent 70%, rgba(13,4,8,0.15))",
              }}
            />
          </div>
        </motion.div>

        {/* Extra info cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {EXTRAS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-5 rounded-xl hover-lift"
              style={{
                background: "rgba(212,175,55,0.05)",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
            >
              <p className="text-2xl mb-3">{item.icon}</p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.9rem",
                  color: "#3a2a2a",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.72rem",
                  color: "#3a2a2a",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
