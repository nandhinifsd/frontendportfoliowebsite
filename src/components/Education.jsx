import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { education, learning,courses } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-20 bg-soft/60 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          id="education-title"
          eyebrow="Education / Learning"
          title="What I'm learning"
          subtitle="I keep learning alongside building projects."
        />

        <motion.ul
          className="grid gap-5 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {learning.map((topic) => (
            <motion.li key={topic.title} variants={item} className="min-w-0 rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{topic.title}</h3>
              <p className="mt-2 text-sm text-muted">{topic.text}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-8 rounded-2xl border border-line bg-paper p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="font-display text-lg font-semibold text-ink">Academic background</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
            {education.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </motion.div>

         <motion.div
          className="mt-8 rounded-2xl border border-line bg-paper p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="font-display text-lg font-semibold text-ink">Courses Completed</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
            {courses.map((entry) => (
                entry.completed && (
              <li key={entry.title}>{entry.title}</li>
           ) ))}
          </ul>

          <h3 className="font-display text-lg font-semibold text-ink mt-5">Courses OnGoing</h3>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted">
            {courses.map((entry) => (
                !entry.completed && (
              <li key={entry.title}>{entry.title}</li>
           ) ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}