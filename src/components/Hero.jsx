import { useState } from "react";
import { motion } from "motion/react";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const hover = { y: -2 };
const tap = { scale: 0.97 };

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-20 pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.p variants={item} className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            {profile.location}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className="break-words font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-accent">{profile.firstName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 text-xl font-medium text-ink sm:text-2xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build responsive, easy-to-use web interfaces with React and JavaScript. I enjoy turning practical
            ideas into working applications, from API-connected dashboards to AI-assisted tools.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <motion.a href="#projects" className="btn btn-primary" whileHover={hover} whileTap={tap}>
              View My Projects
            </motion.a>
            <motion.a href="#contact" className="btn btn-outline" whileHover={hover} whileTap={tap}>
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="order-first mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:order-last lg:max-w-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl border-2 border-gold" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-soft">
              {imgFailed ? (
                <div
                  role="img"
                  aria-label={`Placeholder for a portrait of ${profile.name}`}
                  className="flex h-full w-full items-center justify-center font-display text-6xl font-semibold text-accent"
                >
                  NS
                </div>
              ) : (
                <img
                  src={profile.image}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setImgFailed(true)}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}