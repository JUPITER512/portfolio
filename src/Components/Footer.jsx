import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { name, typeWriterJsonObject } from "@data/Data.json";

const { contactMe } = typeWriterJsonObject;

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          <SocialLink href={contactMe.github} label="GitHub">
            <FaGithub className="size-4" />
          </SocialLink>
          <SocialLink href={contactMe.linkedin} label="LinkedIn">
            <FaLinkedin className="size-4" />
          </SocialLink>
          <SocialLink href={`mailto:${contactMe.email}`} label="Email">
            <Mail className="size-4" />
          </SocialLink>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid size-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// eslint-disable-next-line react/prop-types
export function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-zinc-400 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}
