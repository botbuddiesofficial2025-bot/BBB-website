import { WING_LABELS } from "../../data/siteData.js";
import ProfilePhoto from "./ProfilePhoto.jsx";
import Card from "../ui/Card.jsx";
import { Mail } from "lucide-react";

export default function ExecutiveMemberCard({ person, delay = 0 }) {
  const wingName = WING_LABELS[person.wing] || person.wing;
  return (
    <Card
      delay={delay}
      className="flex flex-col items-center overflow-hidden rounded-lg border border-black/10 bg-white p-4 text-center"
    >
      <div className="w-[76px]">
        <ProfilePhoto
          src={person.image}
          alt={`Portrait of ${person.name}, Executive Member`}
          size="sm"
        />
      </div>
      <h4 className="mt-3 text-[13.5px] font-semibold text-black leading-snug">
        {person.name}
      </h4>
      <p
        className="mt-0.5 text-[11px] font-medium text-bbb-green"
        title={wingName}
      >
        {person.role} — {person.wing}
      </p>
      <a
        className="mt-3 inline-flex max-w-full items-center justify-center gap-1.5 text-[10.5px] text-black/60 transition-colors hover:text-bbb-green"
        href={`mailto:${person.email}`}
      >
        <Mail className="shrink-0" size={12} aria-hidden="true" />
        <span className="break-all">{person.email}</span>
      </a>
    </Card>
  );
}
