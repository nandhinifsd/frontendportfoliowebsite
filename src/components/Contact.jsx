import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { isPlaceholder } from "../utils/links";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: "GitHub", value: profile.github, href: profile.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin, Icon: LinkedInIcon, external: true },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's connect"
          subtitle="I'm always happy to talk about frontend development, React projects or opportunities. Feel free to get in touch."
        />

        <motion.ul
          className="grid gap-5 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contacts.map(({ label, value, href, Icon, external }) => {
            const body = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-soft text-accent">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                 
                  <span className="block text-xs font-semibold uppercase tracking-widest text-accent">{label}</span>
                   {label==="Email" ? (
                  <span className="block break-all text-sm text-ink">{value}</span>
                   ) : (
                    <span className="block break-all text-sm text-ink">Visit my {label} page</span>
                   )}
                </span>
              </>
            );
            const base = "flex items-center gap-4 rounded-2xl border border-line bg-card p-5";

            return (
              <motion.li key={label} variants={item} className="min-w-0">
                {isPlaceholder(value) ? (
                  <div className={`${base} opacity-70`} title={`${label} not added yet`}>
                    {body}
                  </div>
                ) : (
                  <a
                    href={href}
                    className={`${base} transition-colors hover:border-accent`}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={external ? `${label} (opens in new tab)` : `Send an email to ${value}`}
                  >
                    {body}
                  </a>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}