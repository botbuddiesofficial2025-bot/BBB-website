import { NAV_LINKS, SOCIALS } from "../data/siteData.js";
import logoImage from "../assets/bbb-logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#04170F] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <span className="relative block h-16 w-52 overflow-hidden rounded-md bg-white">
              <img
                src={logoImage}
                alt="BOT Buddies Bangladesh"
                className="absolute left-1/2 top-1/2 w-[125%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </span>
            <p className="mt-4 text-[13px] font-semibold tracking-[0.12em] text-white">
              BOT BUDDIES BANGLADESH
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/50 max-w-xs">
              Building the next generation of robotics and technology
              innovators.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/55 transition-colors hover:border-bbb-green hover:bg-bbb-green hover:text-white"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-[12.5px] tracking-wide text-white/40">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline inline-block w-fit text-[13.5px] text-white/65"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[12.5px] tracking-wide text-white/40">Contact</p>
            <ul className="mt-4 space-y-3 text-[13.5px] text-white/65">
              <li>Contact details coming soon</li>
              <li>Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12.5px] text-white/40">
            © {year} BOT Buddies Bangladesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
