/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Lock, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Reveal } from "@components/Section";
import { cards } from "@data/ProjectsData";

const URL_RE = /(https?:\/\/[^\s)]+)/g;

// Turn plain URLs inside project descriptions into links
function Linkify({ text }) {
  return text.split(URL_RE).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-300 underline decoration-indigo-300/30 underline-offset-2 hover:decoration-indigo-300"
      >
        {part.replace(/^https?:\/\//, "")}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function TechList({ items, max }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = items.length - shown.length;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
      {rest > 0 && <span className="chip text-zinc-500">+{rest}</span>}
    </div>
  );
}

function ProjectLink({ project, className = "" }) {
  if (project.isPrivate) {
    return (
      <span className={`btn-ghost cursor-not-allowed opacity-60 ${className}`}>
        <Lock className="size-4" />
        Private repository
      </span>
    );
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      <FaGithub className="size-4" />
      View repository
      <ArrowUpRight className="size-4" />
    </a>
  );
}

export function ProjectCards() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e) => e.key === "Escape" && setActive(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={(i % 3) * 0.06}>
            <button
              type="button"
              onClick={() => setActive(card)}
              className="card group flex h-full w-full flex-col overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
                <img
                  src={card.src}
                  alt={card.title}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-zinc-100">{card.title}</h3>
                  <ArrowUpRight className="size-4 text-zinc-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                  {card.content}
                </p>
                <div className="mt-auto pt-5">
                  <TechList items={card.tech} max={4} />
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex h-full w-full max-w-2xl flex-col overflow-hidden border border-white/10 bg-zinc-900 sm:h-auto sm:max-h-[90vh] sm:rounded-2xl"
            >
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-zinc-950/70 text-zinc-300 backdrop-blur transition hover:text-white"
              >
                <X className="size-4" />
              </button>
              <div className="overflow-y-auto">
                <img
                  src={active.src}
                  alt={active.title}
                  className="aspect-video w-full border-b border-white/10 object-cover object-top"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {active.title}
                  </h3>
                  <div className="mt-4">
                    <TechList items={active.tech} />
                  </div>
                  <p className="mt-6 leading-relaxed text-zinc-300">
                    <Linkify text={active.content} />
                  </p>
                  <div className="mt-8">
                    <ProjectLink project={active} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
