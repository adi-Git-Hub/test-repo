import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SolivaLogo } from "./SolivaLogo";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Shield, Wind, Activity, Zap, Users, MapPin } from "lucide-react";
import { ease, easeGsap, useIsMobile, viewportOnceEarly } from "@/design-system";

gsap.registerPlugin(ScrollTrigger);

const problemPoints = [
  {
    id: 1,
    tag: "SLIPS",
    title: "SLIPS",
    desc: "Keeps moving. Needs constant adjusting. Never stays in place.",
    image: "/constant-slipping.webp",
    micro: "Adjustment isn’t protection."
  },
  {
    id: 2,
    tag: "SUFFOCATES",
    title: "SUFFOCATES",
    desc: "Traps heat. Hard to breathe. Unbearable in real weather.",
    image: "/heate-sufacation.webp",
    micro: "Protection should feel wearable."
  },
  {
    id: 3,
    tag: "EXPOSES",
    title: "EXPOSES",
    desc: "Leaves critical areas unprotected. Damage still happens.",
    image: "/incompelete-protection.webp",
    micro: "Small gaps create everyday exposure."
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
            end: "+=400%", // Extended for 4 panels
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
          className="flex flex-col md:flex-row md:flex-nowrap md:w-[400%] md:h-full items-center z-10 relative"
        >
          {/* ═══ PANEL 1: SECTION 2 — PROBLEM SECTION ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-20 pt-24 sm:pt-28 md:pt-32 flex-shrink-0">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="mb-16">
                <span className="font-mono text-[0.625rem] tracking-[0.4em] text-[#c76600] uppercase font-black">
                  STRESSOR MAP
                </span>
                <h2 className="font-display text-[#3a2a22] leading-[1.1] tracking-tight mb-8" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  Most solutions don’t <br /> actually protect you.
                </h2>
                <p className="text-[1.125rem] text-[#7b6a5f] font-light leading-relaxed max-w-2xl italic">
                  Everyday exposure doesn’t feel harmful. Until it becomes everyday. <br />
                  Daily commuting quietly exposes people to environmental stress — often while feeling “covered.”
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {problemPoints.map((point) => (
                  <div key={point.id} className="group relative bg-white/60 border border-[#3a2a22]/5 p-8 rounded-[2.5rem] backdrop-blur-md shadow-soft hover:-translate-y-2 transition-all duration-700">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-[#3a2a22]/5">
                      <img src={point.image} className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2000ms] group-hover:scale-105" alt={point.title} />
                    </div>
                    <h3 className="font-display text-2xl text-[#3a2a22] mb-3">{point.title}</h3>
                    <p className="text-[0.875rem] text-[#7b6a5f] font-light leading-relaxed mb-6">{point.desc}</p>
                    <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-[#c76600] uppercase font-black border-t border-[#3a2a22]/5 pt-4 block">
                      {point.micro}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 flex items-center justify-between border-t border-[#3a2a22]/5 pt-8">
                <p className="font-mono text-[0.625rem] tracking-[0.2em] text-[#3a2a22]/40 uppercase font-bold">
                  Makeshift solutions were never designed to protect you.
                </p>
                <div className="flex gap-10 opacity-60">
                  {["☀️ UV Exposure", "🌫 Dust & Pollution", "⚠️ Long-term Skin Damage"].map(t => (
                    <span key={t} className="font-mono text-[0.5rem] tracking-[0.1em] uppercase font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL 2: SECTION 3 — BRAND INSIGHT ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-20 flex-shrink-0 bg-[#3a2a22] border-l border-[#c76600]/20 overflow-hidden">
            {/* Ambient Background Glow for Dark Section */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,130,13,0.03),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                <span className="font-mono text-[0.625rem] tracking-[0.4em] text-[#c76600] uppercase font-bold mb-6 block text-left">
                  See how protection was rethought →
                </span>
                <h2 className="font-display text-[#FAF7F3] leading-[1.1] tracking-tight mb-8 text-left" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  Everyday protection shouldn’t <br /> demand everyday adjustment.
                </h2>
                <div className="space-y-6 text-[1.125rem] text-white/60 font-light leading-relaxed max-w-lg text-left">
                  <p>We have learned to adjust. Pull it back. Fix it again. Cover again.</p>
                  <p className="italic text-[#FAF7F3]">Protection should move naturally with life — not demand constant attention.</p>
                </div>
                
                <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
                   <span className="font-mono text-[0.5625rem] tracking-[0.3em] text-[#c76600] uppercase font-black block mb-4">Less adjusting. More living.</span>
                   <p className="text-[1rem] text-white/90 font-medium leading-relaxed italic">
                      Protection that works quietly in the background — so everyday life can move effortlessly.
                   </p>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[3.5rem] border border-white/5 shadow-cinematic">
                <span className="font-mono text-[0.5625rem] tracking-[0.3em] text-[#a08f84] uppercase font-black mb-8 block">THE INSIGHT</span>
                <h4 className="font-display text-3xl text-[#3a2a22] mb-6">Built for movement. <br/> Designed for everyday exposure.</h4>
                <p className="text-[1rem] text-[#7b6a5f] font-light leading-relaxed mb-10">
                  Thoughtfully designed full face, neck, and back coverage for commuting, work, college, travel, and long outdoor hours.
                </p>
                <div className="flex gap-8 border-t border-[#3a2a22]/5 pt-8">
                  {["Move freely", "Commute comfortably", "Stay protected"].map(l => (
                    <span key={l} className="font-mono text-[0.5rem] tracking-[0.2em] text-[#c76600] uppercase font-black italic">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ PANEL 3: SECTION 6 — MOVEMENT STORY ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-20 flex-shrink-0 border-l border-[#c76600]/20">
            <div className="max-w-[1200px] mx-auto w-full">
               <div className="flex flex-col lg:flex-row gap-24 items-center">
                  <div className="lg:w-1/2">
                    <span className="font-mono text-[0.625rem] tracking-[0.4em] text-[#c76600] uppercase font-bold mb-6 block">MOVEMENT STORY</span>
                    <h2 className="font-display text-[#3a2a22] leading-[1.1] tracking-tight mb-8" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                      Protection became habit. <br /> <span className="italic text-[#c76600]/90">But never product design.</span>
                    </h2>
                    <p className="text-[1.125rem] text-[#7b6a5f] font-light leading-relaxed mb-10">
                      People adjusted for years — using scarves, dupattas, masks, and makeshift layers during everyday movement.
                    </p>
                    <p className="text-[1.25rem] text-[#3a2a22] font-medium leading-relaxed italic mb-8">
                      Soliva rethought protection as something engineered for real daily exposure.
                    </p>
                    <span className="font-mono text-[0.625rem] tracking-[0.4em] text-[#a08f84] uppercase font-bold block border-t border-[#3a2a22]/5 pt-8">
                      Designed around movement, heat, and everyday Indian conditions.
                    </span>
                  </div>
                  <div className="lg:w-1/2 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-cinematic border border-[#3a2a22]/5">
                    <img src="/2.webp" className="w-full h-full object-cover grayscale-[0.05]" alt="Movement Story" />
                  </div>
               </div>
            </div>
          </div>

          {/* ═══ PANEL 4: SECTION 7 — REAL WORLD UTILITY ═══ */}
          <div className="relative flex flex-col w-full md:h-full md:w-1/4 justify-center px-8 md:px-24 bg-[#3a2a22] overflow-hidden flex-shrink-0 border-l border-[#c76600]/20">
            {/* Cinematic Atmosphere: Quiet Depth & Texture */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,130,13,0.04),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.02),transparent_70%)]" />
              <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <div className="max-w-[1320px] mx-auto w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-center">
                
                {/* LEFT SIDE: Editorial Narrative & Info Blocks */}
                <div className="flex flex-col gap-16 md:gap-24">
                  {/* Headline & Narrative */}
                  <div className="max-w-4xl text-left">
                    <div className="space-y-10">
                      <h2 className="font-display text-[#FAF7F3] leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
                        Built for <span className="italic text-[#c76600]/90 font-light">everyday life.</span>
                      </h2>
                      <div className="space-y-8 max-w-2xl">
                        <p className="font-mono text-[0.6875rem] tracking-[0.25em] text-white/40 uppercase font-bold">
                          NOT OCCASIONAL WEAR.
                        </p>
                        <p className="text-[1.125rem] sm:text-[1.25rem] text-white/60 font-light leading-relaxed">
                          Designed for women commuters, college routines, long rides, urban movement, and everyday outdoor exposure.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Minimal Editorial Information Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-t border-white/5 pt-16">
                    {[
                      { 
                        title: "Daily Commutes", 
                        tag: "DAILY RIDES", 
                        desc: "Protection during long daily rides and harsh afternoon exposure." 
                      },
                      { 
                        title: "Long Outdoor Hours", 
                        tag: "STAMINA", 
                        desc: "Breathable comfort during long movement through the city streets." 
                      },
                      { 
                        title: "Urban Conditions", 
                        tag: "EXPOSURE", 
                        desc: "Built for sunlight, dust, pollution, and constant urban movement." 
                      },
                    ].map((block, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportOnceEarly}
                        transition={{ delay: i * 0.1, duration: 1 }}
                        className="group flex flex-col text-left"
                      >
                        <div className="flex items-center gap-4 mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                          <span className="font-mono text-[0.5625rem] tracking-[0.3em] text-[#c76600] uppercase font-black">{block.tag}</span>
                          <div className="flex-1 h-[0.5px] bg-white/10" />
                        </div>
                        <h3 className="font-display text-2xl text-[#FAF7F3] mb-4 transition-colors duration-500 group-hover:text-[#c76600]">{block.title}</h3>
                        <p className="text-[0.875rem] text-white/50 font-light leading-relaxed">
                          {block.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE: Elegant Logo Placement */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnceEarly}
                  transition={{ duration: 1.5, ease: ease.smooth }}
                  className="flex justify-center lg:justify-end"
                >
                  <div className="relative aspect-square w-full max-w-[320px] md:max-w-[400px] flex items-center justify-center">
                    <img 
                      src="/soliva_logo_optimized.webp" 
                      alt="Soliva Brand Mark" 
                      className="w-full h-auto object-contain opacity-80 brightness-[1.05] grayscale-[0.1] hover:opacity-100 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,130,13,0.08),transparent_70%)] pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer matching the 400% end */}
      <div className="hidden md:block md:h-[400vh] w-full pointer-events-none bg-transparent" />
    </>
  );
}
