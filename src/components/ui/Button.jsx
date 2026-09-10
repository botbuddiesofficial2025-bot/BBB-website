const VARIANTS = {
  primary:
    "bg-bbb-red text-white hover:shadow-[0_12px_28px_-10px_rgba(232,73,77,0.6)]",
  outline:
    "border border-bbb-green/40 bg-white/60 text-black/75 hover:border-bbb-green hover:text-bbb-green",
  ghost:
    "border border-black/15 text-black/80 hover:border-bbb-green/50 hover:text-bbb-green",
  "ghost-dark":
    "border border-white/20 text-white/85 hover:border-white/40 hover:text-white",
};


export default function Button({
  href = "#",
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  return (
    <a
      href={href}
      className={`btn rounded-md px-5 py-3 text-[14.5px] font-medium ${VARIANTS[variant] || VARIANTS.primary} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
