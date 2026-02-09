"use client";

import { motion } from "framer-motion";

const developers = [
  {
    name: "Mohammed",
    role: "Lead Developer",
    description:
      "Architecte logiciel passionné par les technologies web modernes. Expert React, Next.js et cloud computing.",
    skills: ["React", "Next.js", "TypeScript", "AWS"],
    avatar: "https://ui-avatars.com/api/?name=M&background=7c3aed&color=fff&size=200&bold=true&font-size=0.45&format=svg",
    experience: "5+ ans",
    projects: "30+",
  },
  {
    name: "Hamza",
    role: "Senior Developer",
    description:
      "Expert en architecture backend et optimisation de performances. Spécialisé systèmes distribués et DevOps.",
    skills: ["Python", "Node.js", "Docker", "PostgreSQL"],
    avatar: "https://ui-avatars.com/api/?name=H&background=a78bfa&color=fff&size=200&bold=true&font-size=0.45&format=svg",
    experience: "4+ ans",
    projects: "25+",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-violet-600 dark:text-violet-400">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] md:text-5xl">
            Deux développeurs,{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              une vision
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Créer des solutions digitales qui marquent les esprits.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group rounded-2xl border border-[var(--foreground)]/5 bg-[var(--surface)] p-7 transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5"
            >
              {/* Top */}
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="h-14 w-14 rounded-xl"
                />
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {dev.name}
                  </h3>
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                    {dev.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    Dispo
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-[var(--muted)]">
                {dev.description}
              </p>

              {/* Meta */}
              <div className="mb-5 flex gap-6 text-sm">
                <div>
                  <span className="font-bold text-[var(--foreground)]">{dev.experience}</span>
                  <span className="ml-1 text-[var(--muted)]">expérience</span>
                </div>
                <div>
                  <span className="font-bold text-[var(--foreground)]">{dev.projects}</span>
                  <span className="ml-1 text-[var(--muted)]">projets</span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {dev.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-violet-500/8 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
