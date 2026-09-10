import { Check } from "lucide-react";
import { PLANS } from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Card from "./ui/Card.jsx";
import Button from "./ui/Button.jsx";

export default function Membership() {
  return (
    <section id="membership" className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Choose your journey."
          description="Join BBB and get access to a community built around learning, building, and experimenting."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => {
            const featured = plan.id === "1y";
            return (
              <Card
                key={plan.id}
                delay={i * 70}
                className={`relative flex flex-col rounded-xl p-7 ${
                  featured
                    ? "plan-featured border-2 border-bbb-red bg-gradient-to-b from-bbb-red/[0.06] to-transparent"
                    : "border border-black/10 bg-white/70"
                }`}
              >
                {plan.tag && (
                  <span className="absolute -top-3 left-7 rounded-full bg-bbb-red px-3 py-1 text-[10.5px] font-semibold tracking-wide text-white">
                    {plan.tag}
                  </span>
                )}
                <p className="text-[13.5px] text-black/50">{plan.duration}</p>
                <p className="mt-2 font-display text-[36px] text-black">{plan.price}</p>
                {plan.note && <p className="mt-1 text-[12.5px] text-bbb-green">{plan.note}</p>}

                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13.5px] text-black/65">
                      <Check size={15} className="mt-[2px] flex-shrink-0 text-bbb-green" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={featured ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 text-[12.5px] text-black/40">
          Membership benefits and hardware availability may be subject to BBB
          policies and scheduling.
        </p>
      </div>
    </section>
  );
}
