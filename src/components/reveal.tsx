"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  blur?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = false,
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={
        {
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      className={cn(
        "reveal-base",
        direction === "up" && "reveal-up",
        direction === "down" && "reveal-down",
        direction === "left" && "reveal-left",
        direction === "right" && "reveal-right",
        blur && "reveal-soft",
        visible && "reveal-visible",
        className,
      )}
    >
      {children}
    </div>
  );
}
