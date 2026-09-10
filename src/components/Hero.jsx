import { ArrowRight, ArrowDown } from "lucide-react";
import circleLogoImage from "../assets/bbb-circle-logo.png";
import Reveal from "./ui/Reveal.jsx";
import Button from "./ui/Button.jsx";

function CircuitVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[440px] mx-auto">
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(0,138,90,0.16)" strokeWidth="1" />
        <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(232,73,77,0.12)" strokeWidth="1" />
        <g stroke="rgba(5,5,5,0.16)" strokeWidth="1.4" fill="none">
          <path className="circuit-draw" d="M60 180 H160 V140" />
          <path className="circuit-draw" d="M60 320 H150 V360 H210" style={{ animationDelay: "0.15s" }} />
          <path className="circuit-draw" d="M440 160 H360 V210" style={{ animationDelay: "0.3s" }} />
          <path className="circuit-draw" d="M440 340 H350 V300 H300" style={{ animationDelay: "0.45s" }} />
        </g>
        <g fill="var(--bbb-green)">
          <circle cx="60" cy="180" r="4" />
          <circle cx="60" cy="320" r="4" />
        </g>
        <g fill="var(--bbb-red)">
          <circle cx="440" cy="160" r="4" />
          <circle cx="440" cy="340" r="4" />
        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[170px] w-[170px] rounded-full border border-black/10 bg-white/85 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <img
            src={circleLogoImage}
            alt="BOT Buddies Bangladesh emblem"
            className="h-full w-full rounded-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-[10%] left-[2%] rounded-lg border border-black/10 bg-white/95 px-3 py-2 shadow-sm">
        <p className="font-mono text-[10px] tracking-wide text-bbb-green">SENSOR.IR</p>
        <p className="font-mono text-[13px] text-black">04.2 cm</p>
      </div>

      <div className="absolute bottom-[10%] right-[0%] rounded-lg border border-black/10 bg-white/95 px-3 py-2 shadow-sm">
        <p className="font-mono text-[10px] tracking-wide text-black/60">STATUS</p>
        <p className="font-mono text-[13px] text-bbb-green flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-bbb-green status-dot" aria-hidden="true" />
          ONLINE
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[150px] pb-20 lg:pt-[190px] lg:pb-28">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-bbb-green/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-bbb-green/25 bg-white/65 px-3.5 py-1.5 text-[11.5px] tracking-[0.12em] text-black/65">
              <span className="h-1.5 w-1.5 rounded-full bg-bbb-green status-dot" aria-hidden="true" />
              ROBOTICS · ENGINEERING · INNOVATION
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[40px] leading-[1.05] sm:text-[52px] lg:text-[62px] text-black">
              Build. Learn. Create.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-black/65">
              Building the next generation of robotics and technology
              innovators. BOT Buddies Bangladesh is a hands-on community where
              students learn, build real projects, experiment with hardware,
              and prepare for competitions.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#membership">
              Become a Member <ArrowRight size={17} className="btn-arrow" />
            </Button>
            <Button href="#about" variant="outline">
              Explore BBB <ArrowDown size={16} />
            </Button>
          </Reveal>
        </div>

        <Reveal delay={120} className="flex justify-center">
          <CircuitVisual />
        </Reveal>
      </div>
    </section>
  );
}
