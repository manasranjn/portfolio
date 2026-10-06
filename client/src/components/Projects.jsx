import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        projects.js
      </motion.p>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Things I've built.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className="group card-surface p-0 overflow-hidden hover:border-amber/40 transition-colors duration-300"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-base-line bg-base-panel">
              <span className="font-mono text-xs text-ink-faint">
                {project.file}
              </span>
              {/* <div className="flex gap-3 text-ink-muted">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source on GitHub`}
                  className="hover:text-teal transition-colors focus-ring rounded"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="hover:text-amber transition-colors focus-ring rounded"
                >
                  <HiOutlineExternalLink />
                </a>
              </div> */}
            </div>

            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-amber transition-colors">
                {project.title}
              </h3>
              <p className="text-ink-muted mt-2.5 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm text-ink-muted flex gap-2">
                    <span className="text-teal mt-1">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
