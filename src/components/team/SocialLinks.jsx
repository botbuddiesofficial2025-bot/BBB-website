import { Linkedin, Facebook, Github, Globe } from "lucide-react";

const LINK_TYPES = [
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "facebook", icon: Facebook, label: "Facebook" },
  { key: "github", icon: Github, label: "GitHub" },
  { key: "website", icon: Globe, label: "website" },
];

/** Only renders the social links that actually exist on the person object. */
export default function SocialLinks({ person, className = "" }) {
  const links = LINK_TYPES.filter((type) => person[type.key]);
  if (links.length === 0) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.key}
          href={person[link.key]}
          aria-label={`${person.name} on ${link.label}`}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 text-black/45 transition-colors hover:border-bbb-green hover:bg-bbb-green hover:text-white"
        >
          <link.icon size={14} />
        </a>
      ))}
    </div>
  );
}
