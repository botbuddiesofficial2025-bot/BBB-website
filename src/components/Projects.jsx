import { PROJECTS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Card from "./ui/Card.jsx";

export default function Projects() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading title="Don't just learn robotics. Build it." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <Card
              key={project.title}
              delay={i * 50}
              className="relative overflow-hidden rounded-lg border border-black/10 bg-white/70 p-6 h-[140px] flex flex-col justify-between"
            >
              <project.icon size={20} className="text-bbb-green" />
              <p className="text-[15px] font-medium text-black">{project.title}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
