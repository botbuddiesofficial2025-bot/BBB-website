import ProfilePhoto from "./ProfilePhoto.jsx";
import Card from "../ui/Card.jsx";
import { Mail } from "lucide-react";

export default function DirectorCard({ person, delay = 0 }) {
  return (
    <Card
      delay={delay}
      className="relative flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white p-5"
    >
      <ProfilePhoto
        src={person.image}
        alt={`Portrait of ${person.name}, Director`}
        size="md"
      />
      <h4 className="mt-4 text-[15.5px] font-semibold text-black">
        {person.name}
      </h4>
      <p className="mt-0.5 text-[12.5px] font-medium text-bbb-green">
        {person.role} — {person.wingName}
      </p>
      <a
        className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] text-black/60 transition-colors hover:text-bbb-green"
        href={`mailto:${person.email}`}
      >
        <Mail size={13} aria-hidden="true" />
        <span className="break-all">{person.email}</span>
      </a>
    </Card>
  );
}
