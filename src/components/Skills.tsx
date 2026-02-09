"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 78 },
      { name: "Nginx", level: 72 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    title: "Tools & Other",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 75 },
      { name: "REST API", level: 88 },
      { name: "GraphQL", level: 72 },
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-violet-600 dark:text-violet-400">
            COMPÉTENCES
          </span>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] md:text-5xl">
            Notre{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              stack technique
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Technologies que nous maîtrisons au quotidien.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="rounded-2xl border border-[var(--foreground)]/5 bg-[var(--surface)] p-6 transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5"
            >
              {/* Title */}
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-lg">
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold text-[var(--foreground)]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3.5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium text-[var(--foreground)]">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-[var(--muted)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[var(--foreground)]/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: catIndex * 0.1 + i * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
