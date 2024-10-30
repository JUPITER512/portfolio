"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { BackgroundLines } from "@/components/BackgroundLines";

const portfolioData = {
  "name": "Ali Murtaza",
  "programmingLanguage": "Javascript,SQL,Python",
  "stack": "MERN",
  "experience": "1 Year",
  "contactMe": {
    "email": "syedalimurtaza36@gmail.com",
    "linkedin": "https://www.linkedin.com/in/syedalimurtaza1214/",
    "github": "https://github.com/JUPITER512"
  }
};


const TypewriterEffect = () => {
  const [displayState, setDisplayState] = useState({
    text: "",
    isComplete: false,
    lineCount: 1,
  });

  const timeoutRef = useRef();

  const typeNextCharacter = useCallback((fullText, currentIndex) => {
    if (currentIndex < fullText.length) {
      setDisplayState((prev) => ({
        ...prev,
        text: fullText.slice(0, currentIndex + 1),
        lineCount: fullText.slice(0, currentIndex + 1).split("\n").length,
      }));

      // Vary the typing speed based on the character
      const delay =
        fullText[currentIndex] === "\n"
          ? 150
          : fullText[currentIndex] === " "
          ? 50
          : Math.random() * 30 + 20; // Random delay between 20-50ms for natural feel

      timeoutRef.current = setTimeout(() => {
        typeNextCharacter(fullText, currentIndex + 1);
      }, delay);
    } else {
      setDisplayState((prev) => ({ ...prev, isComplete: true }));
    }
  }, []);

  useEffect(() => {
    // Generate the full text once
    const contactMeText = Object.entries(portfolioData.contactMe)
      .map(([key, value]) => `    "${key}": "${value}"`)
      .join(",\n");

    const fullText = Object.entries(portfolioData).reduce(
      (acc, [key, value], index, arr) => {
        const valueText =
          key === "contactMe" ? `{\n${contactMeText}\n    }` : `"${key}": "${value}"`;
        return (
          acc +
          (index === 0 ? "{\n" : "") +
          `  ${valueText}${index === arr.length - 1 ? "\n}" : ",\n"}`
        );
      },
      ""
    );

    // Start typing animation
    typeNextCharacter(fullText, 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [typeNextCharacter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="z-[1111111] w-full lg:w-[500px] bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 font-mono relative group shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Editor Controls */}
      <div className="absolute top-3 right-3 flex space-x-2">
        <motion.div
          className="w-3 h-3 rounded-full bg-red-500/20 hover:bg-red-500/40 transition-colors"
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500/40 transition-colors"
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-colors"
          whileHover={{ scale: 1.2 }}
        />
      </div>

      {/* Line Numbers */}
      <div className="absolute left-3 top-6 select-none text-neutral-400 dark:text-neutral-600 text-sm">
        {Array.from({ length: displayState.lineCount }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="h-6"
          >
            {i + 1}
          </motion.div>
        ))}
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="text-neutral-800 dark:text-neutral-200 ml-8 whitespace-pre-wrap break-words">
          <code className="block min-w-[300px]">{displayState.text}</code>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-neutral-400 dark:bg-neutral-600 ml-1 align-middle"
          />
        </pre>
      </div>

      {/* Links */}
      {displayState.isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 flex gap-4 justify-end"
        >
          <motion.a
            href={portfolioData.contactMe.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
            whileHover={{ x: 5 }}
          >
            View GitHub →
          </motion.a>
          <motion.a
            href={portfolioData.contactMe.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors flex items-center gap-1"
            whileHover={{ x: 5 }}
          >
            View LinkedIn →
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
};


export default function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full min-h-screen">
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-12 px-4 w-full max-w-7xl mx-auto"
        id="home"
      >
        <div className="flex-1 text-center lg:text-left">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Syed Ali Murtaza
            <br /> Software Engineer.
          </h2>
          <p className="max-w-xl mx-auto lg:mx-0 text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
            Innovative and detail-oriented Software Engineer with hands-on
            experience in development
          </p>
        </div>

        <TypewriterEffect />
      </div>
    </BackgroundLines>
  );
}
