"use client";

import { Reveal } from "@/components/Reveal";

type StackItem = { name: string; src: string; alt: string };

const stack: StackItem[] = [
  { name: "WORDPRESS",   src: "https://cdn.simpleicons.org/wordpress/21759B",  alt: "WordPress logo" },
  { name: "WEBFLOW",     src: "https://cdn.simpleicons.org/webflow/4353FF",    alt: "Webflow logo" },
  { name: "SHOPIFY",     src: "https://cdn.simpleicons.org/shopify/95BF47",    alt: "Shopify logo" },
  { name: "SQUARESPACE", src: "https://cdn.simpleicons.org/squarespace/FFFFFF",alt: "Squarespace logo" },
  { name: "WIX",         src: "https://cdn.simpleicons.org/wix/FFFFFF",        alt: "Wix logo" },
  { name: "HUBSPOT",     src: "https://cdn.simpleicons.org/hubspot/FF7A59",    alt: "HubSpot logo" },
  { name: "GITHUB",      src: "https://cdn.simpleicons.org/github/FFFFFF",     alt: "GitHub logo" },
  { name: "NEXT.JS",     src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",  alt: "Next.js logo" },
  { name: "VERCEL",      src: "https://cdn.simpleicons.org/vercel/FFFFFF",     alt: "Vercel logo" },
  { name: "HUBSPOT",     src: "https://cdn.simpleicons.org/hubspot/FF7A59",    alt: "HubSpot logo" },
  { name: "ZAPIER",      src: "https://cdn.simpleicons.org/zapier/FF4F00",     alt: "Zapier logo" },
  { name: "SUPABASE",    src: "https://cdn.simpleicons.org/supabase/3ECF8E",   alt: "Supabase logo" },
  { name: "XAMMP",       src: "https://cdn.simpleicons.org/xampp/FB7A24",      alt: "XAMPP logo" },
  { name: "POSTGRESQL",  src: "https://cdn.simpleicons.org/postgresql/4169E1", alt: "PostgreSQL logo" },
  { name: "MYSQL",       src: "https://cdn.simpleicons.org/mysql/4479A1",      alt: "MySQL logo" },
];

export default function Ecosystem() {
  return (
    <section id="platforms" className="py-24 lg:px-margin-desktop bg-surface-container-lowest border-y-2 px-margin-mobile border-primary/10">
      <div className="max-w-container-max mx-auto relative z-10 w-[100%]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
          <div>
            <Reveal>
              <h2 className="font-headline-lg text-headline-lg uppercase mb-4">
                Development <span className="text-primary">Platforms</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-body-lg max-w-xl">
                Ed Paulo Pedro is a full-stack web developer specializing in WordPress, Shopify, Webflow, and Next.js. He creates modern, responsive, and high-performing websites and web applications tailored for businesses and brands.
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={150}>
            <span className="font-code-sm text-primary">MODULE_02 // STACK</span>
          </Reveal>
        </div>

        {/* Marquee — no entrance animation, it auto-scrolls */}
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max gap-12 py-8 px-margin-desktop">
            {[...stack, ...stack].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 group transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-label-caps text-[10px] text-on-surface-variant whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
