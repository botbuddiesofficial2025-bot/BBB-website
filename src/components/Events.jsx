import { ArrowRight } from "lucide-react";
import { EVENTS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Card from "./ui/Card.jsx";

export default function Events() {
  return (
    <section id="events" className="py-24 lg:py-28 bg-bbb-bg-soft border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading title="From learning to doing." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <Card
              key={event.title}
              delay={i * 70}
              className="flex flex-col rounded-xl border border-black/10 bg-white/80 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11.5px] tracking-wide text-bbb-red">{event.category}</span>
                <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10.5px] text-black/45">
                  Upcoming
                </span>
              </div>
              <p className="mt-4 text-[17px] font-medium text-black">{event.title}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-black/50 flex-1">{event.text}</p>
              <p className="mt-5 text-[12.5px] text-black/40">{event.date}</p>
              <a
                href="#contact"
                className="link-underline mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-bbb-green w-fit"
              >
                Learn more <ArrowRight size={14} className="btn-arrow" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
