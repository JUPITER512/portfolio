import { Section, Reveal } from "@components/Section";
import { skillGroups } from "@data/SkillsData";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My toolkit."
      subtitle="The languages, frameworks and tools I reach for day to day."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08} className="card p-6">
            <h3 className="font-semibold text-zinc-100">{group.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map(({ Icon, name, color }) => (
                <li
                  key={name}
                  style={{ "--c": color }}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-[color:var(--c)] hover:text-white"
                >
                  <Icon
                    className="size-4 transition-[filter] duration-300 group-hover:drop-shadow-[0_0_6px_var(--c)]"
                    style={{ color }}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
