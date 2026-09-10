import Reveal from "./Reveal.jsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className = "",
}) {
  const titleColor = dark ? "text-white" : "text-black";
  const descColor = dark ? "text-white/60" : "text-black/55";

  return (
    <Reveal className={`max-w-xl ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.16em] text-bbb-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[34px] sm:text-[42px] leading-[1.1] ${titleColor} ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
