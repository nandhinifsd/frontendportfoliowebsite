import { motion, useReducedMotion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCube, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

export default function ProjectSlider({ id, title, description, projects, widthClass = "max-w-xl" }) {
  const reduceMotion = useReducedMotion();
  const prevClass = `${id}-prev`;
  const nextClass = `${id}-next`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold text-ink">
            {title} ({projects.length})
          </h3>
          {description && <p className="mt-2 text-sm text-muted">{description}</p>}
        </div>

        <div className="flex shrink-0 gap-2">
          <button type="button" className={`slider-btn ${prevClass}`} aria-label={`Previous ${title}`}>
            <ChevronLeftIcon />
          </button>
          <button type="button" className={`slider-btn ${nextClass}`} aria-label={`Next ${title}`}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/* Width is capped and centered so the cube has room to rotate */}
      <div className={`mx-auto w-full px-3 sm:px-0 ${widthClass}`}>
        <Swiper
          className="project-swiper"
          modules={[EffectCube, Navigation, Pagination, Keyboard, A11y]}
          effect="cube"
          grabCursor
          cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
          speed={reduceMotion ? 0 : 600}
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{ enabled: true }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} index={i} inSlider />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}