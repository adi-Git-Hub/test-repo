import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SolivaLogo } from "./SolivaLogo";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Wind,
  Activity,
  Zap,
  Users,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { ease, easeGsap, useIsMobile, viewportOnceEarly } from "@/design-system";

gsap.registerPlugin(ScrollTrigger);

const problemPoints = [
  {
    id: 1,
    tag: "SLIPS",
    title: "SLIPS",
    desc: "Traditional scarves shift constantly during 60kmph motion. Improvised protection that demands your attention.",
    image: "/constant-slipping.webp",
    micro: "Adjustment isn’t protection.",
  },
  {
    id: 2,
    tag: "SUFFOCATES",
    title: "SUFFOCATES",
    desc: "Heavy layers trap heat. In 47°C summers, traditional wraps create stifling air pockets and fatigue.",
    image: "/heate-sufacation.webp",
    micro: "Protection should feel wearable.",
  },
  {
    id: 3,
    tag: "EXPOSES",
    title: "EXPOSES",
    desc: "Most coverings leave exposure zones around neck and wrists. Damage happens quietly in the gaps.",
    image: "/incompelete-protection.webp",
    micro: "Small gaps create everyday exposure.",
  },
];

export function UrbanStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: true,
            start: "top top",
            end: "+=350%",
            anticipatePin: 1,
            pinSpacing: false,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        });

        // Horizontal scroll animation
        tl.to(containerRef.current, { xPercent: -75, duration: 4, ease: "none" });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <>
      <section
        ref={sectionRef}
        id="urban-storytelling"
        className="relative bg-transparent w-full z-10 overflow-hidden min-h-screen md:h-screen"
      >
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,var(--cream),transparent)] blur-[120px]"
          />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div
          ref={containerRef}
          className="flex flex-col md:flex-row md:flex-nowrap md:w-[400%] md:h-full items-start z-10 relative"
        >
          {/* ═══ PANEL 1: SECTION 2 — PROBLEM SECTION ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-6 md:px-12 lg:px-20 pt-[110px] md:pt-[130px] pb-12 flex-shrink-0 overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
              {/* WhatsApp CTA Strip — Fixed below Navbar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: ease.smooth }}
                className="mb-6 w-full max-w-xl"
              >
                <div className="bg-white/40 backdrop-blur-md border border-[#3a2a22]/5 rounded-[1.25rem] p-3 md:px-5 md:py-3 flex items-center justify-between gap-4 shadow-soft group hover:bg-white/60 transition-all duration-700">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-700">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-[12px] md:text-[13px] font-display text-[#3a2a22] leading-tight">
                        Talk to Soliva on WhatsApp
                      </h4>
                      <p className="text-[10px] text-[#7b6a5f] font-light leading-tight">
                        Direct support for fit & wear.
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#3a2a22] text-[#f7f3ee] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wide hover:bg-[#c76600] transition-colors duration-500 shadow-sm active:scale-95">
                    Chat Now →
                  </button>
                </div>
              </motion.div>

              <div className="max-w-4xl mx-auto text-center mb-4">
                <h2
                  className="font-display text-[#3a2a22] leading-[1.1] tracking-tight mb-2"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Most solutions don’t actually protect you.
                </h2>
                <div className="space-y-1 max-w-2xl mx-auto px-4">
                  <p className="text-[0.9375rem] md:text-[1rem] text-[#3a2a22] font-medium leading-relaxed italic">
                    Everyday exposure doesn’t feel harmful. Until it becomes everyday.
                  </p>
                  <p className="text-[0.8125rem] md:text-[0.875rem] text-[#7b6a5f] font-light leading-relaxed max-md:hidden">
                    Indian movement is constant exposure. Between the dust, the exhaust, and 47°C
                    heat, we settled for fabrics built for static shade, not 60kmph motion.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 px-4 md:px-0 w-full">
                {problemPoints.map((point) => (
                  <div
                    key={point.id}
                    className="group relative bg-white/40 border border-[#3a2a22]/5 p-4 md:p-5 rounded-[1.25rem] backdrop-blur-md shadow-soft transition-all duration-700 hover:bg-white/50"
                  >
                    <div className="aspect-[16/9] md:aspect-[16/8] rounded-lg overflow-hidden mb-3 border border-[#3a2a22]/5 bg-[#3a2a22]/5">
                      <img
                        src={point.image}
                        className="w-full h-full object-cover grayscale-[0.3] brightness-[0.9] transition-transform duration-[2000ms] group-hover:scale-105"
                        alt={point.title}
                      />
                    </div>
                    <h3 className="font-display text-md md:text-lg text-[#3a2a22] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-[#7b6a5f] font-light leading-tight mb-3">
                      {point.desc}
                    </p>
                    <div className="border-t border-[#3a2a22]/5 pt-2">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-[#c76600] uppercase font-black block">
                        {point.micro}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between w-full border-t border-[#3a2a22]/5 pt-3 opacity-40 px-4 md:px-0">
                <p className="font-mono text-[9px] tracking-[0.2em] text-[#3a2a22] uppercase font-bold">
                  Makeshift solutions fail.
                </p>
                <div className="flex gap-4">
                  {["☀️ UV", "🌫 Dust", "⚠️ Damage"].map((t) => (
                    <span key={t} className="font-mono text-[8px] uppercase font-black">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL 2: SECTION 3 — BRAND INSIGHT ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-12 lg:px-20 flex-shrink-0 bg-[#3a2a22] border-l border-[#c76600]/20 overflow-hidden">
            {/* Ambient Background Glow for Dark Section */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,130,13,0.03),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-[1320px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span className="font-mono text-[9px] tracking-[0.4em] text-[#c76600] uppercase font-bold mb-4 block text-left">
                  RETHOUGHT PROTECTION →
                </span>
                <h2
                  className="font-display text-[#FAF7F3] leading-[1.1] tracking-tight mb-6 text-left"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                >
                  Everyday protection shouldn’t demand adjustment.
                </h2>
                <div className="space-y-4 text-[0.9375rem] md:text-[1rem] text-white/60 font-light leading-relaxed text-left">
                  <p>We learned to adjust. Pull it back. Fix it again. Cover again.</p>
                  <p className="italic text-[#FAF7F3]">
                    Protection should move naturally with life.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-10 rounded-[2.5rem] border border-white/5 shadow-cinematic">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#a08f84] uppercase font-black mb-4 block">
                  THE INSIGHT
                </span>
                <h4 className="font-display text-xl md:text-2xl text-[#3a2a22] mb-3">
                  Built for movement.
                </h4>
                <p className="text-[0.875rem] text-[#7b6a5f] font-light leading-relaxed mb-6">
                  Thoughtfully designed coverage for commuting, work, college, and outdoor hours.
                </p>
                <div className="flex gap-4 border-t border-[#3a2a22]/5 pt-4">
                  {["Move freely", "Commute", "Stay protected"].map((l) => (
                    <span
                      key={l}
                      className="font-mono text-[9px] tracking-[0.2em] text-[#c76600] uppercase font-black italic"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL 3: SECTION 6 — MOVEMENT STORY ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-12 lg:px-20 flex-shrink-0 border-l border-[#c76600]/20">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2">
                  <span className="font-mono text-[9px] tracking-[0.4em] text-[#c76600] uppercase font-bold mb-4 block">
                    MOVEMENT STORY
                  </span>
                  <h2
                    className="font-display text-[#3a2a22] leading-[1.1] tracking-tight mb-4"
                    style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
                  >
                    Protection became habit.{" "}
                    <span className="italic text-[#c76600]/90">But never design.</span>
                  </h2>
                  <p className="text-[0.9375rem] text-[#7b6a5f] font-light leading-relaxed mb-6">
                    Soliva rethought protection as something engineered for real daily exposure.
                  </p>
                </div>
                <div className="lg:w-1/2 aspect-[4/5] max-h-[40vh] rounded-[2rem] overflow-hidden shadow-cinematic border border-[#3a2a22]/5">
                  <img
                    src="/2.webp"
                    className="w-full h-full object-cover"
                    alt="Movement Story"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL 4: SECTION 7 — REAL WORLD UTILITY ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-12 lg:px-24 bg-[#3a2a22] overflow-hidden flex-shrink-0 border-l border-[#c76600]/20">
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,130,13,0.04),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
                <div className="flex flex-col gap-10">
                  <div className="max-w-4xl text-left">
                    <div className="space-y-4">
                      <h2
                        className="font-display text-[#FAF7F3] leading-[1.05] tracking-tight"
                        style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
                      >
                        Built for <span className="italic text-[#c76600]/90 font-light">everyday life.</span>
                      </h2>
                      <p className="text-[0.9375rem] md:text-[1rem] text-white/60 font-light leading-relaxed">
                        Designed for women commuters, college routines, and urban movement.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/5 pt-8">
                    {[
                      {
                        title: "Daily Commutes",
                        tag: "RIDES",
                        desc: "Protection during harsh afternoon exposure.",
                      },
                      {
                        title: "Long Hours",
                        tag: "STAMINA",
                        desc: "Breathable comfort through city streets.",
                      },
                      {
                        title: "Exposure",
                        tag: "URBAN",
                        desc: "Built for sunlight, dust, and movement.",
                      },
                    ].map((block, i) => (
                      <div key={i} className="group flex flex-col text-left">
                        <span className="font-mono text-[9px] tracking-[0.3em] text-[#c76600] uppercase font-black mb-2 opacity-40 group-hover:opacity-100 transition-opacity">
                          {block.tag}
                        </span>
                        <h3 className="font-display text-lg text-[#FAF7F3] mb-1 group-hover:text-[#c76600] transition-colors">
                          {block.title}
                        </h3>
                        <p className="text-[12px] text-white/50 font-light leading-tight">
                          {block.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-square w-full max-w-[160px] md:max-w-[220px] mx-auto">
                  <img
                    src="/soliva_logo_optimized.webp"
                    alt="Soliva Brand Mark"
                    className="w-full h-auto object-contain opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer matching the horizontal scroll budget */}
      <div className="hidden md:block md:h-[350vh] w-full pointer-events-none bg-transparent" />
    </>
  );
}
