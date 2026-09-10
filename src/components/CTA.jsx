import { ArrowRight } from "lucide-react";
import Reveal from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden border-y border-black/20 bg-bbb-green-dark">
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display text-[32px] sm:text-[44px] leading-[1.1] text-white">
            Ready to build something real?
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-5 text-[16px] text-white/65 max-w-lg mx-auto">
            Join a community where ideas become prototypes, prototypes become
            projects, and projects become experience.
          </p>
        </Reveal>
        <Reveal delay={130} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="#membership">
            Join BBB <ArrowRight size={17} className="btn-arrow" />
          </Button>
          <Button href="#contact" variant="ghost-dark">
            Talk to Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
