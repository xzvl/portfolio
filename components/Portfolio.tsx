"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Project = {
  title: string;
  description: string;
  tag: string;
  src: string;
  alt: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Ruh Dental",
    description: "ruhdental.com",
    tag: "Wordpress // GM 2025",
    src: "/assets/ruhdental.png",
    alt: "Ruh Dental",
    link: "https://ruhdental.com/",
  },
  {
    title: "The Church AT Rancho BR",
    description: "www.thechurchrb.org",
    tag: "Webflow // GM 2025",
    src: "/assets/thechurchatrb.png",
    alt: "The Church AT Rancho Bernardo",
    link: "https://www.thechurchrb.org/",
  },
  {
    title: "Lyfe Fuel",
    description: "lyfefuel.com",
    tag: "Shopify // GM 2026",
    src: "/assets/lyfe-fuel.png",
    alt: "Lyfe Fuel",
    link: "https://lyfefuel.com/",
  },
  {
    title: "GemSpire",
    description: "www.gemspire.org",
    tag: "Wix // GM 2025",
    src: "/assets/gemspire.png",
    alt: "GemSpire",
    link: "https://www.gemspire.org/",
  },
  {
    title: "LandTech",
    description: "land.tech",
    tag: "Hubspot // GM 2026",
    src: "/assets/landtech.png",
    alt: "LandTech",
    link: "https://land.tech/",
  },
  {
    title: "Player X Judge",
    description: "playerxjudge.vercel.app",
    tag: "NextJS // 2025",
    src: "/assets/playerxjudge.png",
    alt: "Player X Judge",
    link: "https://playerxjudge.vercel.app/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-panel p-1 group">
      <div className="relative aspect-video bg-surface-container-high overflow-hidden">
        <Image
          src={project.src}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 font-label-caps text-[10px] bg-primary text-on-primary px-2 py-1">
          {project.tag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-md text-headline-md uppercase mb-2">{project.title}</h3>
        <p className="font-code-sm text-on-secondary-container mb-4">{project.description}</p>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-caps text-primary text-[11px] flex items-center gap-2 hover:translate-x-2 transition-transform"
        >
          INITIALIZE_LINK{" "}
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = projects.length;
  const touchStartX = useRef<number | null>(null);

  const prev = () => { setDirection("left");  setCurrent((i) => (i - 1 + total) % total); };
  const next = () => { setDirection("right"); setCurrent((i) => (i + 1) % total); };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section id="portfolio" className="py-24 px-margin-mobile lg:px-margin-desktop">
      <div className="max-w-container-max mx-auto relative z-10 w-[100%]">

        {/* Header */}
        <Reveal className="flex items-center gap-4 mb-12">
          <h2 className="font-headline-lg text-headline-lg uppercase">Portfolio</h2>
          <div className="h-[2px] flex-grow bg-primary/20" />
        </Reveal>

        {/* Mobile + Tablet: carousel — has its own slide animation */}
        <div className="lg:hidden">
          <div
            className="relative select-none overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div key={current} className={direction === "right" ? "carousel-slide-right" : "carousel-slide-left"}>
              <ProjectCard project={projects[current]} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex items-center justify-center w-10 h-10 border-2 border-primary/40 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <span className="font-label-caps text-label-caps text-on-surface-variant tabular-nums">
              {current + 1} / {total}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex items-center justify-center w-10 h-10 border-2 border-primary/40 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Desktop: 3-column grid with staggered reveal */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
