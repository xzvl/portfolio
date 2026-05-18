"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#platforms", label: "Platforms" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-3xl border-b-2 border-primary/20 flex justify-between items-center h-16 px-margin-mobile lg:px-margin-desktop z-50">
        <Link href="#" aria-label="Home" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="EPP // 2026"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-gutter font-label-caps text-label-caps">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">terminal</span>
          <button
            type="button"
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
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
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
              className="font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-margin-mobile">
          <button
            type="button"
            className="w-full bg-primary-container text-on-primary-container font-label-caps px-6 py-3 transition-all duration-200 hover:bg-primary/90 active:scale-95"
          >
            RESUME
          </button>
        </div>
      </div>
    </>
  );
}
