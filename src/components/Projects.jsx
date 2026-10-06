import SectionHeading from "./SectionHeading";
import ProjectSlider from "./ProjectSlider";
import projects from "../data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.category === "featured");
  const javascript = projects.filter((p) => p.category === "javascript");

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 overflow-x-clip py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Things I've built"
          subtitle={`${projects.length} projects: full-stack and API-driven React projects first, followed by smaller JavaScript projects that show my fundamentals.`}
        />

        <ProjectSlider
          id="featured"
          title="Featured Projects"
          projects={featured}
          widthClass="max-w-5xl"
        />

        <div className="mt-16">
          <ProjectSlider
            id="javascript"
            title="JavaScript Projects"
            description="Smaller projects built with plain HTML, CSS and JavaScript."
            projects={javascript}
            widthClass="max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
}