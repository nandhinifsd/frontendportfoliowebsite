import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 bg-soft/60 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Tech stack"
          subtitle="The tools and technologies I use to build my projects."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={card}
              className={`min-w-0 rounded-2xl p-6 ${
                group.learning ? "border border-dashed border-gold bg-paper" : "border border-line bg-card"
              }`}
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-ink">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}