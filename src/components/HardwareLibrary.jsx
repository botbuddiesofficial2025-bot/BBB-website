import { ArrowRight } from "lucide-react";
import { HARDWARE_CATEGORIES } from "../data/siteData.js";
import Reveal from "./ui/Reveal.jsx";
import Card from "./ui/Card.jsx";

export default function HardwareLibrary() {
  return (
    <section id="hardware" className="py-24 lg:py-28 bg-white/70 border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <Reveal>
            <h2 className="font-display text-[34px] sm:text-[42px] leading-[1.1] text-black max-w-[480px]">
              Your hardware. Your ideas. Your playground.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="text-[15.5px] leading-relaxed text-black/55 max-w-[520px] lg:ml-auto">
              Stop waiting until you can afford every component. BBB&rsquo;s
              Hardware Library gives members access to a growing collection of
              development boards, sensors, motors, power components, and
              prototyping equipment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HARDWARE_CATEGORIES.map((category, i) => (
            <Card key={category.title} delay={i * 60} className="rounded-lg border border-black/10 bg-white p-5">
              <category.icon size={18} className="text-bbb-green" />
              <p className="mt-3 text-[13.5px] font-medium text-black">{category.title}</p>
              <ul className="mt-3 space-y-1.5">
                {category.items.map((item) => (
                  <li key={item} className="text-[12.5px] text-black/50 leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Reveal delay={180} className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12.5px] text-black/40 max-w-md">
            Available to members for hands-on projects and experimentation.
            The library is always evolving, so availability may vary by
            schedule.
          </p>
          <a
            href="#membership"
            className="link-underline inline-flex items-center gap-2 text-[14px] font-medium text-bbb-green"
          >
            Explore Membership <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
