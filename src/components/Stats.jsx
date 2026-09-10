import { STATS } from "../data/siteData.js";
import Reveal from "./ui/Reveal.jsx";
import CountUp from "./ui/CountUp.jsx";

export default function Stats() {
  return (
    <section className="relative border-y border-black/10 bg-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 50}
            className={`py-9 px-4 text-center md:text-left ${i !== 0 ? "border-l border-black/10" : ""}`}
          >
            <p className="font-display text-[26px] sm:text-[30px] text-black">
              <CountUp value={stat.value} />
            </p>
            <p className="mt-1 text-[13px] text-black/50">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
