import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <motion.p
        className="eyebrow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        about.md
      </motion.p>
      <motion.h2
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        A developer who ships.
      </motion.h2>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          className="lg:col-span-2 space-y-4 text-ink-muted leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>
            I'm a full stack developer focused on the MERN stack - MongoDB,
            Express, React, and Node.js. I care about clean data models, APIs
            that hold up under real traffic, and interfaces that feel instant.
          </p>
          <p>
            Over the past few years I've shipped e-commerce platforms, real-time
            collaboration tools, ERP systems, and internal dashboards, working
            across the entire stack from schema design to deployment.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Problem solver",
              "Detail-oriented",
              "Fast learner",
              "Team player",
            ].map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-3 relative pl-8">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-base-line"
            aria-hidden="true"
          />
          <ul className="space-y-6">
            {experience.map((job, i) => (
              <motion.li
                key={i}
                className="relative"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-base border-2 border-amber" />
                <p className="font-mono text-xs text-ink-faint">{job.period}</p>
                <h3 className="font-display text-lg font-semibold text-ink mt-1">
                  {job.role}{" "}
                  <span className="text-ink-muted font-normal">
                    · {job.company}
                  </span>
                </h3>
                <p className="text-ink-muted mt-1.5">{job.summary}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
