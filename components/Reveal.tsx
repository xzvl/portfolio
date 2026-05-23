"use client";

import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
};

export function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const [ref, inView] = useInView();
  const hidden =
    direction === "left"  ? "opacity-0 -translate-x-8" :
    direction === "right" ? "opacity-0 translate-x-8"  :
                            "opacity-0 translate-y-8";
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
