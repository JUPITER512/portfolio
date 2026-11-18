/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { cn } from "@utils/utils";

export function Reveal({ children, delay = 0, className, as = "div" }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Section({ id, eyebrow, title, subtitle, children, className }) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title) && (
          <Reveal className="mb-12 max-w-2xl md:mb-16">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-gradient mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
