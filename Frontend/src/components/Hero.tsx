import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero({ isRevealed = false }: { isRevealed?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-transparent"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
        <div className="absolute inset-0">
          <img
            src="/hero-image.webp"
            alt="Soliva SunWrap — Engineered Sun Protection"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Cinematic scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-beige/20 via-transparent to-luxury-beige/10 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(58,42,34,0.04)_100%)] pointer-events-none z-10" />
      </div>
    </section>
  );
}
