"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web App",
    description:
      "Plateforme e-commerce complète avec paiements Stripe, gestion des stocks et analytics avancés.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop&q=80",
    stats: [
      { label: "Utilisateurs", value: "10K+" },
      { label: "Revenu", value: "$500K+" },
    ],
  },
  {
    title: "AI Dashboard",
    category: "SaaS",
    description:
      "Dashboard d'intelligence artificielle pour l'analyse prédictive et la visualisation de données.",
    technologies: ["React", "Python", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    stats: [
      { label: "Précision", value: "95%" },
      { label: "Vitesse", value: "2x" },
    ],
  },
  {
    title: "Social Network",
    category: "Mobile App",
    description:
      "Réseau social nouvelle génération avec messagerie temps réel, stories et livestreaming.",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
    stats: [
      { label: "Downloads", value: "50K+" },
      { label: "Note", value: "4.8/5" },
    ],
  },
  {
    title: "Crypto Exchange",
    category: "FinTech",
    description:
      "Plateforme d'échange crypto avec trading algorithmique et portefeuille sécurisé.",
    technologies: ["Next.js", "Web3", "Solidity", "Redis"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80",
    stats: [
      { label: "Volume", value: "$2M+" },
      { label: "Trades", value: "100K+" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold tracking-wider text-violet-600 dark:text-violet-400">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] md:text-5xl">
            Nos{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              réalisations
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
            Des projets qui repoussent les limites, de la conception au déploiement.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-[var(--foreground)]/5 bg-[var(--surface)] transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute right-3 top-3 rounded-md bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {project.category}
                </span>

                {/* Stats */}
                <div className="absolute bottom-3 left-3 flex gap-3">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="rounded-md bg-white/10 px-2.5 py-1.5 backdrop-blur-md">
                      <div className="text-[10px] text-white/70">{stat.label}</div>
                      <div className="text-xs font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-[var(--foreground)]/5 px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
