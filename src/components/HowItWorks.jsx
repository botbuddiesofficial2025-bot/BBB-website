import { HOW_IT_WORKS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-28 border-y border-black/10 bg-bbb-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="THE BBB JOURNEY" title="How BBB works." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-xl border border-black/15 bg-black/10">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.number} delay={i * 60} className="bg-bbb-bg-soft p-6 lg:p-7">
              <p className="font-display text-[28px] text-bbb-green">{step.number}</p>
              <p className="mt-8 text-[17px] font-semibold text-black">{step.title}</p>
              <p className="mt-2 max-w-[13rem] text-[13.5px] leading-relaxed text-black/55">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
