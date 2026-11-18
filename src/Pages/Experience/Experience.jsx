import { CheckCircle2 } from "lucide-react";
import { Section, Reveal } from "@components/Section";
import { experience } from "@data/ExperienceData";

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked."
      subtitle="A timeline of the teams and clients I've built software with."
    >
      <ol className="relative ml-2 border-l border-white/10 sm:ml-4">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
            <span className="absolute -left-[7px] top-7 size-3.5 rounded-full border-2 border-zinc-950 bg-indigo-400 ring-4 ring-indigo-400/15" />

            <article className="card p-6 md:p-8">
              <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-12 shrink-0 rounded-xl border border-white/10 bg-white object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{job.role}</h3>
                    <p className="text-sm text-zinc-400">{job.company}</p>
                  </div>
                </div>
                <span className="self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-400">
                  {job.period}
                </span>
              </header>

              <p className="mt-5 leading-relaxed text-zinc-300">{job.description}</p>

              {job.highlights.length > 0 && (
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-zinc-400">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
