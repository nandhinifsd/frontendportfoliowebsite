import { useState } from "react";
import { motion } from "motion/react";
import { CheckIcon, CodeIcon, ExternalIcon } from "./Icons";
import { isPlaceholder, withProtocol } from "../utils/links";

function ProjectImage({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`Screenshot placeholder for ${title}`}
        className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-soft p-4 text-center"
      >
        <span className="font-display text-xl font-semibold text-accent">{title}</span>
        <span className="text-xs text-muted">Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Screenshot of the ${title} project`}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

function LinkButton({ href, label, title, variant, Icon }) {
  if (isPlaceholder(href)) {
    return (
      <span aria-disabled="true" title="Link not added yet" className="btn btn-disabled flex-1 sm:flex-none">
        <Icon />
        {label}
      </span>
    );
  }

  return (
    <motion.a
      href={withProtocol(href)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${title} (opens in new tab)`}
      className={`btn ${variant} flex-1 sm:flex-none`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <Icon />
      {label}
    </motion.a>
  );
}

export default function ProjectCard({ project, index = 0, inSlider = false }) {
  const featured = project.category === "featured";

  // Inside a slider, Swiper handles movement, so skip entrance/hover motion
  const motionProps = inSlider
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (index % 3) * 0.08 } },
        whileHover: { y: -4, scale: 1.01, transition: { duration: 0.2 } },
        viewport: { once: true, amount: 0.15 },
      };

  return (
    // Mobile: one column (image, text, tech, buttons).
    // lg and up: two columns. Left = image + tech + buttons, right = text.
    <motion.article
      className={`grid h-full min-w-0 grid-cols-1 overflow-hidden rounded-2xl border bg-card lg:grid-cols-[5fr_7fr] lg:grid-rows-[auto_auto_1fr] ${
        featured ? "border-gold/60 shadow-sm" : "border-line"
      }`}
      {...motionProps}
    >
      {/* 1. Screenshot (landscape 16:9) */}
      <div className="lg:col-start-1 lg:row-start-1 lg:p-6 lg:pb-0">
        <div className="relative aspect-video w-full overflow-hidden bg-soft lg:rounded-xl">
          <ProjectImage src={project.image} title={project.title} />
        </div>
      </div>

      {/* 2. Text block */}
      <div className="min-w-0 p-5 pb-0 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:p-7">
        {project.badge && (
          <p className="mb-2 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            {project.badge}
          </p>
        )}

        <h4 className={`break-words font-display font-semibold text-ink ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h4>
        {project.subtitle && <p className="mt-1 text-sm font-medium text-accent">{project.subtitle}</p>}

        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <h5 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-widest text-ink">Highlights</h5>
        <ul className="grid gap-1.5 text-sm text-muted sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0 text-gold">
                <CheckIcon />
              </span>
              <span className="min-w-0">{feature}</span>
            </li>
          ))}
        </ul>

        {featured && project.demonstrates && (
          <>
            <h5 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-widest text-ink">
              Demonstrates experience with
            </h5>
            <p className="text-sm text-muted">{project.demonstrates.join(" · ")}</p>
          </>
        )}
      </div>

      {/* 3. Technologies */}
      <div className="px-5 pt-4 lg:col-start-1 lg:row-start-2 lg:px-6">
        <ul aria-label={`Technologies used in ${project.title}`} className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Buttons */}
      <div className="flex flex-wrap gap-3 p-5 pt-6 lg:col-start-1 lg:row-start-3 lg:self-end lg:p-6 lg:pt-4">
        <LinkButton
          href={project.github}
          label="View Code"
          title={project.title}
          variant="btn-outline"
          Icon={CodeIcon}
        />
        <LinkButton
          href={project.live}
          label="Live Demo"
          title={project.title}
          variant="btn-primary"
          Icon={ExternalIcon}
        />
      </div>
    </motion.article>
  );
}