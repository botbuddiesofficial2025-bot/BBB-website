import { ABOUT_FEATURES } from "../data/siteData.js";
import Reveal from "./ui/Reveal.jsx";
import Card from "./ui/Card.jsx";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.1] text-black max-w-[440px]">
            More than a community. A place to build.
          </h2>
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-bbb-green to-transparent" />
        </Reveal>

        <div>
          <Reveal delay={60}>
            <p className="text-[16px] leading-relaxed text-black/60 max-w-[560px]">
              BBB exists to turn theoretical knowledge into practical
              experience. We bring students, hardware, and mentorship into the
              same room, so ideas stop staying ideas and start becoming working
              systems.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-4 text-[16px] leading-relaxed text-black/60 max-w-[560px]">
              From hands-on technical education and robotics builds to
              competitions and real project development, everything we run is
              designed to get you closer to the workbench &mdash; not further
              from it.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {ABOUT_FEATURES.map((feature, i) => (
              <Card
                key={feature.title}
                delay={140 + i * 60}
                className="rounded-lg border border-black/10 bg-white/70 p-5 hover:border-bbb-green/50"
              >
                <feature.icon size={20} className="text-bbb-green" />
                <p className="mt-3 text-[15px] font-medium text-black">
                  {feature.title}
                </p>
                <p className="mt-1 text-[13.5px] text-black/55 leading-relaxed">
                  {feature.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
