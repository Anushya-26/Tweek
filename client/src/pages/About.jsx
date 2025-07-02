import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Features shown on the page
const features = [
  {
    title: "Decoded Experiences",
    description:
      "Real stories from students and job seekers — discover how they cracked the matrix of placements.",
  },
  {
    title: "Real-World Algorithms",
    description:
      "No fluff. Just the tricks, rounds, and resume hacks that worked in actual placement drives.",
  },
  {
    title: "The Collective Mind",
    description:
      "You're not alone. Tweek connects thousands of minds for a shared knowledge mission.",
  },
];

// Typewriter effect
const useTypewriter = (text, speed = 50) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
};

const About = () => {
  const quote = useTypewriter("You don’t find the path... you debug it.", 50);

  return (
    <>
      {/* Matrix-style slow rain animation */}
      <style>{`
        @keyframes rain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 0.5;
          }
          60% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-black via-[#011d11] to-[#001b0e] text-green-300 px-6 py-20 relative overflow-hidden font-mono">

        {/* Matrix Glyph Rain (slower speed) */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <span
              key={`glyph-${i}`}
              className="absolute text-[#00ff88] text-xl md:text-2xl opacity-10 select-none"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `rain ${6 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            >
              {["0", "1", "λ", "ψ", "Σ", "π", "µ", "∞"][
                Math.floor(Math.random() * 8)
              ]}
            </span>
          ))}
        </div>

        {/* Page Header */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#39ff14] drop-shadow-md mb-6">
            About <span className="text-green-400">Tweek</span>
          </h1>
          <p className="text-green-200 max-w-3xl mx-auto text-lg leading-relaxed">
            The neural interface for your placement prep. Share your insights. Sync your interviews. Evolve as a community.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="relative z-10 mt-20 max-w-5xl mx-auto flex flex-col space-y-14">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="min-w-[50px] min-h-[50px] bg-green-500 rounded-full shadow-[0_0_30px_#00ff88aa] animate-pulse" />
              <div className="w-full p-6 md:p-8 rounded-3xl border border-green-800 bg-gradient-to-br from-[#0a1f18] to-[#102820] shadow-[0_0_20px_rgba(0,255,128,0.1)] hover:shadow-[0_0_30px_rgba(0,255,128,0.3)] transition-transform hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-[#39ff14] mb-3">{feature.title}</h3>
                <p className="text-green-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typewriter Quote */}
        <motion.div
          className="relative z-10 mt-24 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <blockquote className="text-xl md:text-2xl italic text-green-300 min-h-[60px]">
            {quote}
          </blockquote>
          <p className="mt-2 text-sm text-green-600">– The Tweek System</p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
