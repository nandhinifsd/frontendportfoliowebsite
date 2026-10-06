import { motion } from "motion/react";

export default function SectionHeading({ id, eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      )}
      <h2 id={id} className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </motion.div>
  );
}