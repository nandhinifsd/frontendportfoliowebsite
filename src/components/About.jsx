import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { interests, profile } from "../data/profile";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Focus", value: "Frontend and React development" },
  { label: "Learning", value: "MERN stack, Next.js, Data Structures and Algorithms" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="About" title="A bit about me" />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            className="min-w-0 space-y-4 leading-relaxed text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p>
              I&apos;m a frontend developer in the making. I started out in engineering, where I enjoyed breaking
              real-world problems into smaller pieces, and I found my way back to that same kind of thinking through
              web development after a career break for family responsibilities.
            </p>
            <p>
              Right now I build with React and JavaScript and I&apos;m working through the MERN stack. My projects so
              far (a task manager, a product dashboard and a travel planner) have taught me how to connect a React
              interface to a backend, manage state with Redux Toolkit, and work with APIs, including AI APIs like
              Groq.
            </p>
            <p>
              What I care about most is making interfaces that feel clear and intuitive to use. I&apos;m also steadily
              improving my JavaScript and problem-solving through Data Structures and Algorithms practice. Outside of
              code, I paint in the Tanjore style.
            </p>
          </motion.div>

          <motion.div
            className="min-w-0 rounded-2xl border border-line bg-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <dl className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-accent">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mb-3 mt-6 text-xs font-semibold uppercase tracking-widest text-accent">Interests</h3>
            <ul className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <li key={interest} className="chip">
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}