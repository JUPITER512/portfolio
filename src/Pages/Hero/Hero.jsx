import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypewriterEffect } from "@components/TypeWriterEffect";
import { SocialLink } from "@components/Footer";
import { handleDownload } from "@utils/CvDownloader";
import DATA from "@data/Data.json";

const { contactMe } = DATA.typeWriterJsonObject;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-white/[0.035] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] [&>*]:min-w-0">
        <div className="text-center lg:text-left">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="text-gradient">Hi, I&apos;m {DATA.name}.</span>
            <br />
            <span className="text-accent-gradient">{DATA.jobTitle}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg lg:mx-0"
          >
            {DATA.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a href="#projects" className="btn-primary group">
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button onClick={handleDownload} className="btn-ghost">
              <Download className="size-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="mt-8 flex items-center justify-center gap-1 lg:justify-start"
          >
            <SocialLink href={contactMe.github} label="GitHub">
              <FaGithub className="size-5" />
            </SocialLink>
            <SocialLink href={contactMe.linkedin} label="LinkedIn">
              <FaLinkedin className="size-5" />
            </SocialLink>
            <SocialLink href={`mailto:${contactMe.email}`} label="Email">
              <Mail className="size-5" />
            </SocialLink>
          </motion.div>
        </div>

        <TypewriterEffect />
      </div>
    </section>
  );
}
