"use client";

import { useEffect, useRef, useState } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right";
  distance?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export function RevealSection({
  children,
  delay = 0,
  from = "bottom",
  distance = 28,
  threshold = 0.12,
  className,
  style,
  as: Tag = "div",
}: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform =
    from === "left" ? `translateX(-${distance}px)` :
    from === "right" ? `translateX(${distance}px)` :
    `translateY(${distance}px)`;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : hiddenTransform,
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
