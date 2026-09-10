import ProfilePhoto from "./ProfilePhoto.jsx";
import Card from "../ui/Card.jsx";
import { Mail } from "lucide-react";

export default function FounderCard({ person }) {
  return (
    <Card className="rounded-xl border border-black/10 bg-white p-5 sm:p-7 lg:p-8">
      <ProfilePhoto
        src={person.image}
        alt={`Portrait of ${person.name}, Founder of BOT Buddies Bangladesh`}
        size="lg"
      />
      <div className="pt-5 text-center">
        <h3 className="font-display text-[24px] leading-tight text-black sm:text-[28px]">
          {person.name}
        </h3>
        <p className="mt-1 text-[14px] font-semibold text-bbb-green">
          {person.role}
        </p>
        <a
          className="mt-4 inline-flex items-center gap-2 text-[13px] text-black/65 transition-colors hover:text-bbb-green"
          href={`mailto:${person.email}`}
        >
          <Mail size={15} aria-hidden="true" />
          <span>{person.email}</span>
        </a>
      </div>
    </Card>
  );
}
