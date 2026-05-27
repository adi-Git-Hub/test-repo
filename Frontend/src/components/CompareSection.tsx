import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ease, hover, viewportOnce, viewportOnceWhenPartial } from "@/design-system";

const oldWay = [
  "Slips while riding",
  "Needs constant adjusting",
  "Leaves gaps (nose, ears, neck)",
  "Traps heat → uncomfortable",
  "Not designed for protection",
];

const newWay = [
  "Stays in place",
  "Full coverage design",
  "No exposed gaps",
  "Breathable for long wear",
  "Designed for daily protection",
];

const marqueeItems = [
  "Designed for Indian conditions",
  "Built for daily use",
  "Tested for real-life scenarios",
  "Engineered Mobility",
  "Advanced UV Defense",
];

export function CompareSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const leftMouseX = useMotionValue(0);
  const leftMouseY = useMotionValue(0);
  const leftSpringX = useSpring(leftMouseX, { stiffness: 100, damping: 30 });
  const leftSpringY = useSpring(leftMouseY, { stiffness: 100, damping: 30 });

  const rightMouseX = useMotionValue(0);
  const rightMouseY = useMotionValue(0);
  const rightSpringX = useSpring(rightMouseX, { stiffness: 100, damping: 30 });
  const rightSpringY = useSpring(rightMouseY, { stiffness: 100, damping: 30 });

  function handleLeftMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    leftMouseX.set(e.clientX - rect.left);
    leftMouseY.set(e.clientY - rect.top);
  }

  function handleRightMouseMove(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect();
    rightMouseX.set(e.clientX - rect.left);
    rightMouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-luxury-beige/60 pt-4 sm:pt-6 md:pt-8 pb-0 z-20"
    >
      {/* PREMIUM ATMOSPHERIC TRANSITION ZONE */}
      <div className="absolute top-0 inset-x-0 h-48 pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-luxury-beige/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,130,13,0.04),transparent_70%)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,rgba(245,130,13,0.04),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(252,231,243,0.5),transparent_60%)] opacity-80 will-change-transform animate-[compare-drift-a_40s_linear_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_80%,rgba(243,236,226,1),transparent_50%),radial-gradient(circle_at_30%_90%,rgba(245,130,13,0.06),transparent_40%)] opacity-70 will-change-transform animate-[compare-drift-b_45s_linear_infinite]" />
      </div>

      <div className="relative mx-auto max-w-[90rem] px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: ease.luxe }}
          className="relative bg-surface-panel border border-line-soft rounded-panel-sm sm:rounded-panel-lg md:rounded-shell xl:rounded-shell-lg p-4 sm:p-6 md:px-10 md:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12 backdrop-blur-medium shadow-editorial inset-shadow-cream overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(245,130,13,0.02),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(252,231,243,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="mb-3 sm:mb-4 flex items-center gap-4 sm:gap-6"
            >
              <div className="h-px w-10 sm:w-16 bg-brown/20" />
              <span className="text-micro-sm sm:text-micro-md tracking-eyebrow sm:tracking-luxe text-orange-glow uppercase font-bold">
                THE COMPARISON
              </span>
              <div className="h-px w-10 sm:w-16 bg-brown/20" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 1.5, ease: ease.luxe }}
              className="font-display text-brown-deep leading-tight mb-4 sm:mb-6 tracking-tighter text-display-lg md:text-display-xl"
            >
              Still using a dupatta or regular scarf?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="max-w-2xl text-ink-muted text-body-xs sm:text-sm md:text-lg font-light italic leading-relaxed"
            >
              It feels like protection. <br /> But it’s not designed for it.
            </motion.p>
          </div>

          <div className="relative flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 z-10">
            {/* Left Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={viewportOnceWhenPartial}
              transition={{ duration: 1.4, delay: 0.2, ease: ease.luxe }}
              onMouseMove={handleLeftMouseMove}
              whileHover={hover.liftSoft}
              className="flex-1 relative bg-[#EBE5DE]/60 border border-line-strong rounded-panel-sm sm:rounded-panel-lg p-4 sm:p-6 lg:p-8 xl:p-10 transition-colors duration-700 group/old shadow-floating overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent)] opacity-50 pointer-events-none rounded-panel-sm sm:rounded-panel-lg" />
              <motion.div
                style={{ left: leftSpringX, top: leftSpringY }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-brown/5 rounded-full blur-[50px] pointer-events-none z-0"
              />
              <div className="relative z-10">
                <header className="mb-4 sm:mb-5 lg:mb-6">
                  <span className="mb-2 sm:mb-3 block font-mono text-micro-xs sm:text-micro-sm uppercase font-bold tracking-eyebrow sm:tracking-luxe text-ink-muted">
                    WHAT YOU USE TODAY
                  </span>
                  <h3 className="mb-2 sm:mb-3 font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-brown-deep/70 transition-colors duration-700 group-hover/old:text-brown-deep">
                    Borrowed protection.
                  </h3>
                </header>
                <ul className="mb-4 sm:mb-5 lg:mb-6 space-y-4">
                  {oldWay.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.2 + 0.1 * i }}
                      className="flex items-start gap-4 text-ink-soft text-body-xs md:text-body-sm font-medium group/item"
                    >
                      <span className="mt-[8px] h-[1px] w-4 bg-brown/30 group-hover/item:w-6 transition-all duration-500" />
                      <span className="group-hover/item:text-brown-deep transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnceWhenPartial}
              transition={{ duration: 1.4, ease: ease.luxe }}
              onMouseMove={handleRightMouseMove}
              whileHover={hover.lift}
              className="flex-[1.1] relative bg-[#FDFBF7]/80 border border-line-accent rounded-panel-sm sm:rounded-panel-lg p-4 sm:p-7 lg:p-9 xl:p-11 shadow-editorial inset-shadow-cream group/card overflow-hidden transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-orange-glow/5 pointer-events-none" />
              <motion.div
                style={{ left: rightSpringX, top: rightSpringY }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-faint rounded-full blur-[60px] pointer-events-none z-0"
              />
              <div className="relative z-10">
                <header className="mb-4 sm:mb-6 lg:mb-8">
                  <span className="mb-3 sm:mb-4 block text-micro-sm sm:text-micro-md uppercase font-bold tracking-eyebrow sm:tracking-luxe text-orange-glow">
                    SOLIVA RIDERPROTECTION
                  </span>
                  <h3 className="mb-3 sm:mb-4 font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-brown-deep">
                    Engineered <br />protection.
                  </h3>
                </header>
                <ul className="mb-8 sm:mb-10 space-y-4">
                  {newWay.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.3 + 0.1 * i, duration: 0.8, ease: "easeOut" }}
                      className="flex items-start gap-6 text-brown-deep text-body-sm md:text-body-lg font-medium group/item"
                    >
                      <div className="mt-2.5 h-1.5 w-5 bg-orange-glow rounded-full group-hover/item:w-10 transition-all duration-700" />
                      <span className="group-hover/item:text-orange-glow transition-colors duration-500">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-6 sm:pt-8 border-t border-line-accent">
                  <button className="w-full py-5 rounded-full bg-[#3a2a22] text-[#f7f3ee] font-mono text-[0.625rem] tracking-[0.25em] uppercase font-black transition-all duration-500 hover:bg-[#4a3a32] hover:-translate-y-0.5 shadow-soft">
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-6 sm:mt-10 text-center">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2 }}
              className="font-display text-brown-deep tracking-tighter font-bold text-display-sm"
            >
              Protection shouldn't depend on <span className="italic text-orange-glow">adjustment.</span>
            </motion.h4>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-10 border-y border-line-medium bg-surface-glass py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex whitespace-nowrap items-center justify-center">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-14 sm:gap-20 items-center pr-14 sm:pr-20"
          >
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={`${item}-${i}`} className="flex items-center gap-14 sm:gap-20">
                <span className="text-xs sm:text-sm md:text-body tracking-luxe text-brown-deep/80 uppercase font-black">
                  {item}
                </span>
                <span className="text-orange-glow/70 text-xl font-serif">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes compare-drift-a {
          0%, 100% { transform: translate(-10px, -5px); }
          50% { transform: translate(10px, 5px); }
        }
        @keyframes compare-drift-b {
          0%, 100% { transform: translate(10px, 5px); }
          50% { transform: translate(-10px, -5px); }
        }
      `}} />
    </section>
  );
}
