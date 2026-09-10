import { useState } from "react";
import { User } from "lucide-react";

const ICON_SIZE = { lg: 56, md: 34, sm: 26 };

/**
 * Renders a member photo, or a neutral placeholder icon if no image is
 * set yet or the image fails to load. Keeps the team grid visually
 * consistent while real photos are still being collected.
 */
export default function ProfilePhoto({ src, alt, size = "md" }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-bbb-bg-soft">
      {showPlaceholder ? (
        <div className="flex h-full w-full items-center justify-center">
          <User size={ICON_SIZE[size]} strokeWidth={1.4} className="text-bbb-green/40" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
    </div>
  );
}
