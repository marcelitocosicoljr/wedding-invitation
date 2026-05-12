"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type AttendStatus = "yes" | "no" | "";

interface FormData {
  name: string;
  email: string;
  attending: AttendStatus;
  guests: string;
  dietary: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  attending?: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  attending: "",
  guests: "1",
  dietary: "",
  message: "",
};

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  as = "input",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  error?: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "#D4AF37",
          textTransform: "uppercase",
          opacity: 0.9,
        }}
      >
        {label} {required && <span style={{ color: "#E8899A" }}>*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className="rsvp-input px-4 py-3 resize-none"
          style={{
            background: "#ffffff",
            border: `2px solid ${error ? "#e89a9a" : "rgba(153, 51, 76, 0.3)"}`,
            borderRadius: "8px",
            color: "#2d1016",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.85rem",
            fontWeight: "500",
          }}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={as === "input" && type === "number" ? "1" : undefined}
          max={as === "input" && type === "number" ? "10" : undefined}
          className="rsvp-input px-4 py-3"
          style={{
            background: "#ffffff",
            border: `2px solid ${error ? "#e89a9a" : "rgba(153, 51, 76, 0.3)"}`,
            borderRadius: "8px",
            color: "#2d1016",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.85rem",
            fontWeight: "500",
          }}
        />
      )}

      {error && (
        <p
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            color: "#E8899A",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function RSVP() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    if (!form.attending)
      newErrors.attending = "Please let us know if you can attend.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 2000));
    setStatus("success");
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(128,0,32,0.2) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
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
            Join Us
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              color: "#FAF0E6",
              textShadow: "0 2px 20px rgba(212,175,55,0.2)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            RSVP
          </h2>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              color: "rgba(250,240,230,0.6)",
            }}
          >
            Please respond by May 14, 2026
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-8">
            <span style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.2rem" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            background: "rgba(128,0,32,0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(212,175,55,0.2)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.05)",
          }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="text-center py-8"
              >
                {/* Success heart */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.3, 1] }}
                  transition={{ duration: 0.6, times: [0, 0.7, 1] }}
                  className="mb-6 flex justify-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(128,0,32,0.3))",
                      border: "1px solid rgba(212,175,55,0.4)",
                      boxShadow: "0 0 30px rgba(212,175,55,0.3)",
                    }}
                  >
                    🌹
                  </div>
                </motion.div>

                <h3
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2.5rem",
                    color: "#D4AF37",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank You, {form.name.split(" ")[0]}!
                </h3>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "rgba(250,240,230,0.7)",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                  }}
                >
                  {form.attending === "yes"
                    ? "We are so excited to celebrate with you! We will be in touch with more details soon."
                    : "We are sorry you cannot make it, but we appreciate you letting us know. You will be in our hearts."}
                </p>
                <button
                  onClick={handleReset}
                  className="btn-burgundy px-6 py-2.5 rounded-lg text-xs cursor-pointer"
                  style={{
                    background: "rgba(128,0,32,0.4)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontSize: "0.65rem",
                  }}
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <InputField
                    label="Full Name"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                {/* Attending */}
                <div className="flex flex-col gap-2.5">
                  <label
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      color: "#D4AF37",
                      textTransform: "uppercase",
                      opacity: 0.9,
                    }}
                  >
                    Will you attend? <span style={{ color: "#E8899A" }}>*</span>
                  </label>
                  <div className="flex gap-4">
                    {(["yes", "no"] as const).map((opt) => (
                      <motion.button
                        key={opt}
                        type="button"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setForm((p) => ({ ...p, attending: opt }));
                          setErrors((p) => ({ ...p, attending: undefined }));
                        }}
                        className="flex-1 py-3 rounded-lg transition-all duration-300 cursor-pointer"
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          background:
                            form.attending === opt
                              ? opt === "yes"
                                ? "linear-gradient(135deg, #800020, #a81744)"
                                : "rgba(250,240,230,0.1)"
                              : "rgba(250,240,230,0.04)",
                          border:
                            form.attending === opt
                              ? opt === "yes"
                                ? "1px solid rgba(212,175,55,0.6)"
                                : "1px solid rgba(250,240,230,0.3)"
                              : "1px solid rgba(212,175,55,0.2)",
                          color:
                            form.attending === opt
                              ? opt === "yes"
                                ? "#D4AF37"
                                : "rgba(250,240,230,0.8)"
                              : "rgba(250,240,230,0.4)",
                        }}
                      >
                        {opt === "yes"
                          ? "🌹 Joyfully Accept"
                          : "✦ Regretfully Decline"}
                      </motion.button>
                    ))}
                  </div>
                  {errors.attending && (
                    <p
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.72rem",
                        color: "#E8899A",
                      }}
                    >
                      {errors.attending}
                    </p>
                  )}
                </div>

                {/* Number of guests (only if attending) */}
                <AnimatePresence>
                  {form.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid sm:grid-cols-2 gap-5 pt-1">
                        <InputField
                          label="Number of Guests"
                          name="guests"
                          type="number"
                          placeholder="1"
                          value={form.guests}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Dietary Restrictions"
                          name="dietary"
                          placeholder="Vegetarian, Vegan, Halal..."
                          value={form.dietary}
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message */}
                <InputField
                  label="Message to the Couple"
                  name="message"
                  placeholder="Share your wishes, a memory, or a message of love..."
                  value={form.message}
                  onChange={handleChange}
                  as="textarea"
                />

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                  whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                  className="w-full py-4 rounded-lg relative overflow-hidden cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #800020, #a81744, #800020)",
                    backgroundSize: "200% 200%",
                    border: "1px solid rgba(212,175,55,0.4)",
                    color: "#D4AF37",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    opacity: status === "submitting" ? 0.8 : 1,
                  }}
                >
                  {status === "submitting" ? (
                    <span className="flex items-center justify-center gap-3">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ display: "inline-block" }}
                      >
                        ✦
                      </motion.span>
                      Sending your RSVP...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <span>✦</span>
                      Send RSVP
                      <span>✦</span>
                    </span>
                  )}
                </motion.button>

                <p
                  className="text-center"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.68rem",
                    color: "rgba(250,240,230,0.35)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Kindly reply by August 14, 2026. For inquiries, contact us at
                  marcelito.daisy.wedding@gmail.com
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
