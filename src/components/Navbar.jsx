import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../data/siteData.js";
import logoImage from "../assets/bbb-logo.jpeg";
import Button from "./ui/Button.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bbb-bg/95 backdrop-blur-sm border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 h-[76px] flex items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center"
          aria-label="BOT Buddies Bangladesh home"
        >
          <span className="relative block h-14 w-40 overflow-hidden rounded-md border border-black/10 bg-white sm:h-16 sm:w-48 lg:h-14 lg:w-40 xl:h-16 xl:w-48">
            <img
              src={logoImage}
              alt="BOT Buddies Bangladesh"
              className="absolute left-1/2 top-1/2 w-[125%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-[14px] text-black/65"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#membership" className="hidden lg:inline-flex">
          Join BBB <ArrowRight size={15} className="btn-arrow" />
        </Button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-black/80"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden mobile-menu ${open ? "mobile-menu-open" : ""}`}
      >
        <div className="bg-bbb-bg border-t border-black/10 px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] text-black/75"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href="#membership"
            onClick={() => setOpen(false)}
            className="mt-6"
          >
            Join BBB <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </header>
  );
}
