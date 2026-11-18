import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { typeWriterJsonObject } from "@data/Data.json";

const portfolioData = typeWriterJsonObject;

function buildText(data) {
  const contactMeText = Object.entries(data.contactMe)
    .map(([key, value]) => `    "${key}": "${value}"`)
    .join(",\n");

  const body = Object.entries(data)
    .map(([key, value]) =>
      key === "contactMe"
        ? `  "${key}": {\n${contactMeText}\n  }`
        : `  "${key}": "${value}"`
    )
    .join(",\n");

  return `{\n${body}\n}`;
}

// Lightweight JSON highlighting for the typed text
function highlight(text) {
  const tokens = [];
  const re = /("(?:[^"\\]|\\.)*"?)(\s*:)?/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) tokens.push({ t: text.slice(last, m.index), c: "text-zinc-500" });
    tokens.push({ t: m[1], c: m[2] ? "text-indigo-300" : "text-emerald-300" });
    if (m[2]) tokens.push({ t: m[2], c: "text-zinc-500" });
    last = re.lastIndex;
  }
  if (last < text.length) tokens.push({ t: text.slice(last), c: "text-zinc-500" });
  return tokens;
}

export const TypewriterEffect = () => {
  const fullText = useMemo(() => buildText(portfolioData), []);
  const totalLines = useMemo(() => fullText.split("\n").length, [fullText]);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    if (index >= fullText.length) return;
    const ch = fullText[index];
    const delay = ch === "\n" ? 90 : ch === " " ? 15 : Math.random() * 25 + 15;
    timeoutRef.current = setTimeout(() => setIndex((i) => i + 1), delay);
    return () => clearTimeout(timeoutRef.current);
  }, [index, fullText]);

  const text = fullText.slice(0, index);
  const isComplete = index >= fullText.length;
  const tokens = useMemo(() => highlight(text), [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/40 via-transparent to-cyan-400/30 opacity-70 blur-sm"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-indigo-950/40 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-zinc-500">about-me.json</span>
        </div>

        <div className="flex overflow-x-auto p-4 font-mono text-[12.5px] leading-6 sm:text-sm">
          <div aria-hidden className="select-none pr-4 text-right text-zinc-600">
            {Array.from({ length: totalLines }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="whitespace-pre">
            <code aria-label={fullText}>
              {tokens.map((tok, i) => (
                <span key={i} className={tok.c}>
                  {tok.t}
                </span>
              ))}
            </code>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-0.5 inline-block h-4 w-2 bg-indigo-400 align-middle"
            />
          </pre>
        </div>

        <div className="flex h-11 items-center justify-end gap-4 border-t border-white/10 px-4">
          {isComplete && (
            <>
              <motion.a
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                href={portfolioData.contactMe.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-zinc-400 transition-colors hover:text-white"
              >
                github →
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                href={portfolioData.contactMe.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-zinc-400 transition-colors hover:text-white"
              >
                linkedin →
              </motion.a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
