"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/#platforms", label: "Platforms" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

// Extract section id from a hash link (e.g. "/#hero" → "hero"), or null for page links
const sectionId = (href: string) => href.includes("#") ? href.split("#")[1] : null;

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll-based section tracking — only meaningful on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = navLinks.map((l) => sectionId(l.href)).filter(Boolean) as string[];

    const handleScroll = () => {
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (href: string) => {
    const id = sectionId(href);
    if (id) return pathname === "/" && activeSection === id;
    return pathname === href;
  };

  const activeClass = "text-primary border-b-2 border-primary pb-1";
  const inactiveClass = "text-on-surface-variant hover:text-on-surface transition-colors";

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/80 px-margin-mobile lg:px-margin-desktop backdrop-blur-3xl border-b-2 border-primary/20 z-50">
        <div className="h-16 max-w-container-max mx-auto flex justify-between items-center">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="XZVL // WEB DEV"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-gutter font-label-caps text-label-caps">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? activeClass : inactiveClass}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <button
              type="button"
              onClick={() => window.open("/assets/resume-2026.pdf", "_blank")}
              className="hidden md:block bg-primary-container text-on-primary-container font-label-caps px-6 py-2 transition-all duration-200 hover:bg-primary/90 active:scale-95"
            >
              RESUME
            </button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            >
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col pt-16 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-10 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-label-caps text-label-caps transition-colors ${
                isActive(link.href) ? "text-primary" : "text-on-surface hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-margin-mobile">
          <button
            type="button"
            onClick={() => window.open("/assets/resume-2026.pdf", "_blank")}
            className="w-full bg-primary-container text-on-primary-container font-label-caps px-6 py-3 transition-all duration-200 hover:bg-primary/90 active:scale-95"
          >
            RESUME
          </button>
        </div>
      </div>
    </>
  );
}
