import { WINGS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Card from "./ui/Card.jsx";

export default function Wings() {
  return (
    <section id="wings" className="py-24 lg:py-28 bg-bbb-bg-soft border-y border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading title="Four wings. One mission." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WINGS.map((wing, i) => {
            const accent = wing.accent === "green" ? "#008A5A" : "#E8494D";
            return (
              <Card
                key={wing.code}
                delay={i * 70}
                className="relative rounded-xl border border-black/10 bg-white/80 p-6"
                style={{ borderTopColor: accent, borderTopWidth: "3px" }}
              >
                <p className="font-display text-[26px] text-black">{wing.code}</p>
                <p className="mt-1 text-[13.5px] font-medium text-black/70">{wing.name}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-black/50">{wing.line}</p>
                <div className="mt-6 flex gap-3">
                  {wing.icons.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 bg-white"
                    >
                      <Icon size={15} style={{ color: accent }} />
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
