import {
  founder,
  coFounders,
  directors,
  executiveMembers,
} from "../data/siteData.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import FounderCard from "./team/FounderCard.jsx";
import CoFounderCard from "./team/CoFounderCard.jsx";
import DirectorCard from "./team/DirectorCard.jsx";
import ExecutiveMemberCard from "./team/ExecutiveMemberCard.jsx";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 lg:py-28 border-y border-black/10 bg-bbb-bg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="MEET THE PEOPLE"
          title={<>Behind BBB</>}
          description="Meet the people leading and building BOT Buddies Bangladesh."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FounderCard person={founder} />
          {coFounders[0] && <CoFounderCard person={coFounders[0]} delay={60} />}
        </div>

        {directors.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-black/45">
                DIRECTORS
              </p>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {directors.map((person, i) => (
                <DirectorCard
                  key={person.name + i}
                  person={person}
                  delay={i * 50}
                />
              ))}
            </div>
          </div>
        )}

        {executiveMembers.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-black/45">
                EXECUTIVE MEMBERS
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {executiveMembers.map((person, i) => (
                <ExecutiveMemberCard
                  key={person.name + i}
                  person={person}
                  delay={i * 35}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
