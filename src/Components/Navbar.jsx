import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@data/NavBarData";
import { handleDownload } from "@utils/CvDownloader";
import { cn } from "@utils/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 font-mono text-sm font-bold text-zinc-950">
            AM
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">
            Ali Murtaza
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === id ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                )}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={handleDownload} className="btn-ghost hidden !px-4 !py-2 sm:inline-flex">
            <Download className="size-4" />
            Resume
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full text-zinc-300 hover:bg-white/5 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pb-4">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm",
                      active === id ? "bg-white/[0.08] text-white" : "text-zinc-400"
                    )}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button onClick={handleDownload} className="btn-primary w-full">
                  <Download className="size-4" />
                  Download Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
