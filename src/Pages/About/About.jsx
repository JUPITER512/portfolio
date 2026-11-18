import { Section, Reveal } from "@components/Section";
import DATA from "@data/Data.json";
import { skillGroups } from "@data/SkillsData";

const stats = [
  { value: "1+", label: "Years of experience" },
  { value: `${DATA.project_cards.length}`, label: "Featured projects" },
  { value: `${skillGroups.reduce((n, g) => n + g.skills.length, 0)}+`, label: "Technologies" },
  { value: "3", label: "Companies & clients" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering with data in mind.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-zinc-300">
            {DATA.descriptionAboutYourSelf}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="card p-5">
              <div className="text-accent-gradient text-3xl font-semibold tracking-tight md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
