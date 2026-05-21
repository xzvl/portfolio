"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  step?: number;
  intervalMs?: number;
  className?: string;
};

export default function AnimatedCounter({
  value,
  suffix = "",
  step = 1,
  intervalMs = 300,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || hasAnimatedRef.current) {
      return;
    }

    const startAnimation = () => {
      hasAnimatedRef.current = true;

      setCount(0);

      timerRef.current = window.setInterval(() => {
        setCount((currentCount) => {
          const nextCount = Math.min(currentCount + step, value);

          if (nextCount >= value) {
            if (timerRef.current !== null) {
              window.clearInterval(timerRef.current);
              timerRef.current = null;
            }
          }

          return nextCount;
        });
      }, intervalMs);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [intervalMs, step, value]);

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  );
}