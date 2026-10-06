import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolioData';

const categoryMeta = {
  frontend: { label: 'frontend', color: 'bg-amber' },
  backend: { label: 'backend', color: 'bg-teal' },
  database: { label: 'database', color: 'bg-amber' },
  tooling: { label: 'tooling', color: 'bg-teal' },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-base-panel/40 border-y border-base-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          skills.json
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tools I reach for.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="card-surface p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`h-2 w-2 rounded-full ${categoryMeta[group.category].color}`} />
                <h3 className="font-mono text-sm text-ink-muted">
                  "{categoryMeta[group.category].label}"
                </h3>
              </div>

              <div className="space-y-4">
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-mono text-xs text-ink-muted mb-1.5">
                      <span className="text-ink">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-base-line overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${categoryMeta[group.category].color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 + si * 0.08, ease: 'easeOut' }}
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
