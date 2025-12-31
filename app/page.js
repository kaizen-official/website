"use client";

import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import BlurText from "@/components/BlurText";
import FadeIn from "@/components/FadeIn";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";
import Spotlight from "@/components/Spotlight";
import { useState, useEffect, useRef } from "react";

const Hyperspeed = dynamic(() => import("@/components/Hyperspeed"), {
  ssr: false,
});

const services = [
  {
    title: "WEB DEV",
    description: "Custom websites & web applications ",
    icon: "</>",
    code: "0x01",
  },
  {
    title: "CRM SYS",
    description: "Customer relationship management solutions",
    icon: "[#]",
    code: "0x02",
  },
  {
    title: "ERP INT",
    description: "Enterprise resource planning integration",
    icon: "{=}",
    code: "0x03",
  },
  {
    title: "MOB APP",
    description: "Native & cross-platform mobile development",
    icon: "[+]",
    code: "0x04",
  },
  {
    title: "CLOUD",
    description: "Scalable cloud infrastructure & DevOps",
    icon: "///",
    code: "0x05",
  },
  {
    title: "AI ML",
    description: "Machine learning & automation systems",
    icon: ":::",
    code: "0x06",
  },
];

const stats = [
  { value: 150, label: "PROJECTS DEPLOYED", suffix: "+" },
  { value: 50, label: "ACTIVE CLIENTS", suffix: "+" },
  { value: 99, label: "UPTIME PERCENT", suffix: "%" },
  { value: 24, label: "RESPONSE HRS", suffix: "*7" },
];

const techStack = [
  "REACT",
  "NEXT.JS",
  "NODE",
  "PYTHON",
  "AWS",
  "MONGODB",
  "POSTGRES",
  "TYPESCRIPT",
  "DOCKER",
  "K8S",
  "GRAPHQL",
  "REDIS",
];

const testimonials = [
  {
    name: "ANURAJ ANTIL",
    role: "CEO // KRONUS",
    quote: "Kaizen transformed our entire digital infrastructure. Their team delivered beyond expectations.",
    id: "USR 001",
  },
  {
    name: "VIKAS SIWACH",
    role: "CEO // VERTICAL ELEVATORS",
    quote: "The CRM solution increased our sales efficiency by 300%. Incredible execution.",
    id: "USR 002",
  },
  {
    name: "HARDEEP SINGH GUJRAL",
    role: "CEO // Savvy Chauffeurs",
    quote: "From concept to launch in 8 weeks. Speed and quality unmatched. Highly recommend Kaizen.",
    id: "USR 003",
  },
];

export default function Home() {
  const [hoveredService, setHoveredService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const heroRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kaizen.official.hub@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "Not provided",
          phone: formData.phone,
          message: formData.message || "Not provided",
          _subject: "New Contact from Kaizen Website",
        }),
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModals = () => {
    setIsModalOpen(false);
    setShowThankYou(false);
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        closeModals();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden font-jetbrains">
      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && !showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-black border border-cyan-400 p-8"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-cyan-400 transition-colors font-orbitron text-xl"
              >
                [X]
              </button>

              {/* Header */}
              <div className="mb-8">
                <div className="text-xs text-cyan-400 mb-2 font-share-tech">
                  // CONTACT_FORM.init()
                </div>
                <h3 className="text-2xl font-orbitron font-black text-white">
                  INITIALIZE<span className="text-cyan-400">_CONNECTION</span>
                </h3>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-share-tech">
                    NAME <span className="text-fuchsia-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="ENTER_NAME"
                    className="w-full bg-black border border-gray-800 p-4 text-white font-jetbrains text-sm focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-share-tech">
                    EMAIL <span className="text-gray-700">[OPTIONAL]</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ENTER_EMAIL"
                    className="w-full bg-black border border-gray-800 p-4 text-white font-jetbrains text-sm focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-share-tech">
                    PHONE <span className="text-fuchsia-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="ENTER_PHONE"
                    className="w-full bg-black border border-gray-800 p-4 text-white font-jetbrains text-sm focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-share-tech">
                    MESSAGE <span className="text-gray-700">[OPTIONAL]</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="ENTER_MESSAGE"
                    rows={4}
                    className="w-full bg-black border border-gray-800 p-4 text-white font-jetbrains text-sm focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-700 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px #00f0ff" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-cyan-400 text-black font-orbitron font-bold text-sm tracking-widest border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "[TRANSMITTING...]" : "[SEND_TRANSMISSION]"}
                </motion.button>
              </form>

              <div className="mt-6 text-center text-xs text-gray-700 font-share-tech">
                // SECURE_CHANNEL // ENCRYPTED_TRANSMISSION
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModals}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-black border border-cyan-400 p-12 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cyan-400" />

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-6xl font-orbitron text-cyan-400 mb-6 neon-text"
              >
                [OK]
              </motion.div>

              <div className="text-xs text-cyan-400 mb-4 font-share-tech">
                // TRANSMISSION_COMPLETE
              </div>

              <h3 className="text-3xl font-orbitron font-black text-white mb-4">
                THANK<span className="text-cyan-400">_YOU</span>
              </h3>

              <p className="text-gray-400 font-jetbrains text-sm mb-8">
                Your message has been received. We will respond within 24 hours.
              </p>

              <motion.button
                onClick={closeModals}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px #00f0ff" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-transparent text-cyan-400 border border-cyan-400 font-orbitron font-bold text-sm tracking-widest"
              >
                [CLOSE]
              </motion.button>

              <div className="mt-6 text-xs text-gray-700 font-share-tech">
                // AUTO_CLOSE: 5s
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 30,
              lightPairsPerRoadWay: 50,
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0x00f0ff, 0x00f0ff, 0x00f0ff],
                rightCars: [0xff00ff, 0xff00ff, 0xff00ff],
                sticks: 0x00f0ff,
              },
            }}
          />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-bg z-5" />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Corner Brackets */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-400 z-20" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-400 z-20" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-cyan-400 z-20" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-400 z-20" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 font-share-tech text-cyan-400 text-sm tracking-widest"
          >
            [SYS STATUS: ONLINE] // [INIT: COMPLETE] // [READY]
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-8xl md:text-[12rem] font-orbitron font-black tracking-tighter mb-4 text-cyan-400 neon-text">
              KAIZEN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 mb-4 font-share-tech tracking-[0.3em]"
          >
            改善 // CONTINUOUS IMPROVEMENT
          </motion.div>

          <BlurText
            text="TECH ENABLED BUSINESS SOLUTIONS"
            className="text-lg md:text-xl text-gray-400 mb-14 justify-center tracking-widest"
            delay={80}
            animateBy="letters"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px #00f0ff" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-cyan-400 text-black font-bold text-sm tracking-widest border-0"
            >
              [INITIALIZE PROJECT]
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px #ff00ff" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent text-fuchsia-500 border-2 border-fuchsia-500 font-bold text-sm tracking-widest"
            >
              [VIEW PORTFOLIO]
            </motion.button>
          </motion.div>

          {/* Terminal Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden sm:block absolute bottom-20 left-1/2 -translate-x-1/2 font-share-tech text-gray-600 text-base"
          >
            <span className="text-cyan-400">root@kaizen</span>:<span className="text-fuchsia-500">~</span>$ awaiting input
            <span className="animate-pulse"> </span>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4 border-y border-cyan-400/20">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border border-cyan-400/20 p-8 bg-black/80 hover:border-cyan-400 transition-colors group">
                  <div className="text-xs text-gray-600 mb-2 font-share-tech">
                    [{String(index + 1).padStart(2, "0")}]
                  </div>
                  <div className="text-5xl md:text-6xl font-orbitron font-black text-cyan-400 group-hover:neon-text transition-all">
                    <AnimatedCounter value={stat.value} duration={2 + index * 0.3} />
                    <span className="text-fuchsia-500">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-500 mt-2 text-xs tracking-widest">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <Spotlight className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-16">
              <div className="text-xs text-cyan-400 mb-4 font-share-tech">
                // SERVICES MODULE
              </div>
              <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4">
                WHAT WE
                <span className="text-cyan-400"> BUILD</span>
              </h2>
              <div className="w-32 h-1 bg-cyan-400" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className={`border p-8 bg-black/90 transition-all duration-300 cursor-pointer ${hoveredService === index
                    ? "border-cyan-400 bg-cyan-400/5"
                    : "border-gray-800"
                    }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-orbitron text-cyan-400">
                      {service.icon}
                    </span>
                    <span className="text-xs text-gray-600 font-share-tech">
                      {service.code}
                    </span>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredService === index ? "100%" : 0 }}
                    className="h-0.5 bg-cyan-400 mt-6"
                  />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </Spotlight>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-16 border-y border-cyan-400/20 bg-black">
        <div className="mb-4 text-center text-2xl text-gray-400 font-share-tech">
          // TECH STACK v2.0
        </div>
        <Marquee speed={25} className="py-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl font-orbitron font-black text-gray-900 hover:text-cyan-400 transition-colors cursor-default px-8"
            >
              {tech}
            </span>
          ))}
        </Marquee>
        <Marquee speed={20} direction="right" className="py-4">
          {[...techStack].reverse().map((tech, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl font-orbitron font-black text-gray-900 hover:text-fuchsia-500 transition-colors cursor-default px-8"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-20">
              <div className="text-xs text-fuchsia-500 mb-4 font-share-tech">
                // EXECUTION PROTOCOL
              </div>
              <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white">
                OUR <span className="text-fuchsia-500">PROCESS</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-1">
            {[
              { step: "01", title: "ANALYZE", desc: "Requirements gathering & system analysis" },
              { step: "02", title: "ARCHITECT", desc: "Technical design & infrastructure planning" },
              { step: "03", title: "DEVELOP", desc: "Agile development & continuous integration" },
              { step: "04", title: "DEPLOY", desc: "Launch, monitor & ongoing optimization" },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border border-gray-800 p-8 bg-black/90 hover:border-fuchsia-500 transition-all group"
                >
                  <div className="text-7xl font-orbitron font-black text-gray-700 group-hover:text-fuchsia-500/30 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mt-4 text-white group-hover:text-fuchsia-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4 border-y border-cyan-400/20">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="mb-16">
              <div className="text-xs text-cyan-400 mb-4 font-share-tech">
                // CLIENT FEEDBACK.log
              </div>
              <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white">
                TRUST <span className="text-cyan-400">VERIFIED</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-1">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="border border-gray-800 p-8 bg-black/90 hover:border-cyan-400 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-cyan-400 text-2xl font-orbitron">"</span>
                    <span className="text-xs text-gray-700 font-share-tech">
                      {testimonial.id}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="font-orbitron font-bold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600 font-share-tech">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="text-xs text-fuchsia-500 mb-8 font-share-tech">
              // INITIALIZE CONNECTION
            </div>

            <h2 className="text-5xl md:text-8xl font-orbitron font-black mb-8">
              READY TO
              <br />
              <span className="text-cyan-400 neon-text">UPGRADE</span>
              <span className="text-fuchsia-500">?</span>
            </h2>

            <BlurText
              text="LET'S BUILD THE FUTURE TOGETHER"
              className="text-lg text-gray-400 mb-12 justify-center tracking-[0.2em]"
              delay={60}
            />

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.02, boxShadow: "0 0 50px #00f0ff" }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-6 bg-cyan-400 text-black font-orbitron font-bold text-lg tracking-widest border-0"
            >
              [START TRANSMISSION]
            </motion.button>

            <div className="mt-8 text-base text-gray-400 font-share-tech">
              response time: &lt;24hrs // availability: global
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/20 py-8 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-orbitron font-black text-cyan-400">
              KAIZEN
            </div>
            {/* <div className="flex gap-8 text-xs text-gray-600 font-share-tech">
              <a href="#" className="hover:text-cyan-400 transition-colors">[ABOUT]</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">[SERVICES]</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">[WORK]</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">[CONTACT]</a>
            </div> */}
            <div className="text-lg text-white font-share-tech">
              © 2026 KAIZEN // ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
