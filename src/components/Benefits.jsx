import { BENEFITS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Card from "./ui/Card.jsx";

export default function Benefits() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading title="Why build with BBB?" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BENEFITS.map((benefit, i) => (
            <Card
              key={benefit.title}
              delay={i * 60}
              className="rounded-lg border border-black/10 bg-white/70 p-5"
            >
              <benefit.icon size={20} className="text-bbb-red" />
              <p className="mt-4 text-[14.5px] font-medium text-black">{benefit.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/50">{benefit.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
