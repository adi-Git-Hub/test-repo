import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { viewportOnce, viewportOnceEarly } from "@/design-system";
import { useCart } from "@/features/cart/hooks/useCart";

export const Route = createFileRoute("/_public/collection")({
  component: CollectionRoute,
});

type Product = {
  id: string;
  slug: string;
  name: string;
  line: string;
  description: string;
  tags: readonly string[];
  features: readonly string[];
  trust: string;
  badge: string;
  image: string;
  tone: string;
  glow: string;
  priceCents: number;
  originalPriceCents: number;
};

const products: readonly Product[] = [
  {
    id: "01",
    slug: "soliva-airshield-wrap",
    name: "Soliva AirShield Wrap",
    line: "Sculpted coverage. Silent confidence.",
    description:
      "Dual-layer architecture that moves with your silhouette, deflecting harsh UV while staying invisible in wear.",
    tags: ["UV Defense", "Breathable", "Full Coverage"],
    features: ["Heat reflective", "Airflow engineered", "Urban ready"],
    trust: "Designed for Indian Heat",
    badge: "Most Selected",
    image: "/new_blue.webp",
    tone: "from-[#EEF2FA] via-[#DBEAFE] to-[#C7D9F5]",
    glow: "rgba(147, 180, 235, 0.2)",
    priceCents: 79900,
    originalPriceCents: 120000,
  },
  {
    id: "02",
    slug: "soliva-urban-veil",
    name: "Soliva Urban Veil",
    line: "City-weight protection. Zero compromise.",
    description:
      "Lighter weave that shields without trapping heat, designed for eight-hour days in motion.",
    tags: ["UV Defense", "Lightweight", "Daily Wear"],
    features: ["Silent coverage", "Thermal adaptive", "All-day wear"],
    trust: "Precision Layered Comfort",
    badge: "Urban Essential",
    image: "/new_gray.webp",
    tone: "from-[#F5F4F2] via-[#EDEBE8] to-[#E0DEDA]",
    glow: "rgba(180, 175, 168, 0.18)",
    priceCents: 79900,
    originalPriceCents: 120000,
  },
  {
    id: "03",
    slug: "soliva-heatguard",
    name: "Soliva HeatGuard",
    line: "Thermal intelligence. All-day calm.",
    description:
      "Heat-reflective fabric that keeps skin cool during the harshest afternoon hours, without adding bulk.",
    tags: ["Heat Shield", "UV Defense", "All-Day"],
    features: ["Peak-hour shield", "Lightweight core", "Moisture wicking"],
    trust: "Crafted for Daily Exposure",
    badge: "Summer Essential",
    image: "/new_lime.webp",
    tone: "from-[#F0FAF3] via-[#DCFCE7] to-[#C5F0D3]",
    glow: "rgba(134, 220, 160, 0.18)",
    priceCents: 79900,
    originalPriceCents: 120000,
  },
  {
    id: "04",
    slug: "soliva-motioncover",
    name: "Soliva MotionCover",
    line: "Moves with you. Stays in place.",
    description:
      "Adaptive stretch-soft fabric that holds form through every ride, walk, and commute.",
    tags: ["UV Defense", "Stretch-Soft", "Indian Climate"],
    features: ["Adaptive stretch", "Zero-slip fit", "Commute-proof"],
    trust: "Premium Thermal Fabric",
    badge: "Active Pick",
    image: "/pink.webp",
    tone: "from-[#FBF0F3] via-[#FCE7F3] to-[#F5D0E2]",
    glow: "rgba(244, 180, 210, 0.18)",
    priceCents: 79900,
    originalPriceCents: 120000,
  },
  {
    id: "05",
    slug: "soliva-airlite-shield",
    name: "Soliva AirLite Shield",
    line: "Barely there. Completely covered.",
    description:
      "Featherweight fabric that disappears on skin while delivering uncompromising protection.",
    tags: ["Ultra-Light", "UV Defense", "Breathable"],
    features: ["Featherweight", "Second-skin feel", "Invisible wear"],
    trust: "Engineered Breathability",
    badge: "Lightweight Pick",
    image: "/new_brown.webp",
    tone: "from-[#F7F1EB] via-[#EDE0D0] to-[#DCCCB5]",
    glow: "rgba(190, 160, 120, 0.18)",
    priceCents: 79900,
    originalPriceCents: 120000,
  },
] as const;

const featured = products[0];
const ease = [0.21, 0.47, 0.32, 0.98] as const;

function CollectionRoute() {
  return (
    <div className="relative w-full bg-[#FAF7F3]">
      {/* ═══ Ambient atmosphere ═══ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,130,13,0.035),transparent_55%)]" />
        <div className="absolute bottom-0 right-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_75%_80%,rgba(243,236,226,0.7),transparent_50%)]" />
      </div>

      {/* ═══ SECTION 1: Editorial Hero ═══ */}
      <section className="relative">
        <div className="mx-auto max-w-[68rem] px-5 sm:px-8 pt-20 sm:pt-28 md:pt-32 pb-10 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3"
          >
            <span className="block h-px w-7 bg-[#3a2a22]/15" />
            <span className="font-mono text-[0.5625rem] tracking-[0.4em] text-[#c76600] uppercase font-semibold">
              SS / 26 &middot; Volume 01
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.06, duration: 0.9, ease }}
            className="mt-4 font-display tracking-tight leading-[1.05] text-[#3a2a22]"
            style={{ fontSize: "clamp(2.25rem, 7vw, 3.75rem)" }}
          >
            The Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.18, duration: 0.8 }}
            className="mt-4 max-w-md text-[0.875rem] sm:text-[0.9375rem] text-[#7b6a5f] font-light leading-relaxed"
          >
            Five editions, engineered for daily exposure. Breathable,
            intentional, made for Indian conditions.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {[
              { val: "5", label: "Editions" },
              { val: "UPF 50+", label: "Protection" },
              { val: "180g", label: "Avg Weight" },
              { val: "42°C", label: "Heat Tested" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-[0.9375rem] text-[#3a2a22]/75 tracking-tight">
                  {s.val}
                </span>
                <span className="font-mono text-[0.4375rem] tracking-[0.2em] text-[#7b6a5f]/45 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 h-px w-16 origin-left bg-gradient-to-r from-[#3a2a22]/20 to-transparent"
          />

          <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="block h-px w-4 bg-[#3a2a22]/12" />
              <span className="font-mono text-[0.5rem] tracking-[0.3em] text-[#3a2a22]/55 uppercase font-semibold">
                The Editions
              </span>
            </div>
            <p className="max-w-xs text-[0.75rem] text-[#a08f84] font-light sm:text-right">
              Each designed for a different rhythm of daily exposure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: Product Grid ═══ */}
      <section className="relative">
        <div className="mx-auto max-w-[68rem] px-5 sm:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: Fabric Technology Strip ═══ */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-[68rem] px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#3a2a22]/[0.06] rounded-2xl overflow-hidden border border-[#3a2a22]/[0.06]">
            {[
              { label: "UV Shield", val: "98%" },
              { label: "Breathability", val: "94%" },
              { label: "Weight", val: "180g" },
              { label: "Climate", val: "Indian" },
              { label: "Coverage", val: "Full" },
              { label: "Layers", val: "Dual" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnceEarly}
                transition={{ delay: Math.min(i * 0.04, 0.2), duration: 0.6, ease }}
                className="bg-white/70 px-4 py-5 text-center"
              >
                <div className="font-display text-[1.125rem] text-[#3a2a22] tracking-tight font-medium">
                  {item.val}
                </div>
                <span className="font-mono text-[0.4375rem] tracking-[0.25em] text-[#7b6a5f]/55 uppercase mt-1 block">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: Featured Flagship Edition ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F3EDE5] via-[#FAF7F3] to-[#EDE6DC]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_70%_30%,rgba(147,180,235,0.06),transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[68rem] px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative aspect-[5/6] max-w-[400px] mx-auto lg:mx-0 rounded-[1.75rem] overflow-hidden border border-[#3a2a22]/[0.05]">
                <div className={`absolute inset-0 bg-gradient-to-br ${featured.tone} opacity-85`} />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `radial-gradient(circle at 50% 40%, ${featured.glow}, transparent 60%)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-14">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-contain drop-shadow-[0_10px_28px_rgba(58,42,34,0.14)]"
                  />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[8%] w-[50%] h-2.5 rounded-[50%] bg-[#3a2a22]/12 blur-[10px]" />
              </div>

              <div className="absolute top-5 left-5 lg:left-auto lg:right-auto bg-white/55 backdrop-blur-[6px] rounded-xl px-3 py-2 border border-white/25">
                <span className="block font-mono text-[0.4375rem] tracking-[0.25em] text-[#3a2a22]/45 uppercase font-semibold">Edition</span>
                <span className="block font-mono text-sm tracking-tight text-[#3a2a22] font-bold mt-px">01</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.1, duration: 0.9, ease }}
              className="flex flex-col justify-center"
            >
              <span className="font-mono text-[0.4375rem] tracking-[0.35em] text-[#c76600] uppercase font-semibold">
                Flagship Edition
              </span>
              <h2
                className="mt-3 font-display text-[#3a2a22] tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)" }}
              >
                {featured.name}
              </h2>
              <p className="mt-1.5 text-[0.8125rem] text-[#7b6a5f]/75 font-light italic">
                {featured.line}
              </p>

              <div className="mt-5 h-px w-10 bg-[#3a2a22]/10" />

              <p className="mt-5 text-[0.8125rem] text-[#7b6a5f] font-light leading-[1.65] max-w-sm">
                {featured.description}
              </p>

              <div className="mt-6 flex flex-col gap-2">
                {featured.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#c76600]/50" />
                    <span className="font-mono text-[0.625rem] tracking-[0.12em] text-[#3a2a22]/60 uppercase">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-baseline gap-2.5">
                <span className="font-mono text-xl text-[#3a2a22] tracking-tight font-medium">&#8377;799</span>
                <span className="font-mono text-[0.75rem] text-[#a08f84]/50 line-through">&#8377;1,200</span>
                <span className="font-mono text-[0.4375rem] tracking-[0.2em] text-[#c76600] uppercase font-semibold bg-[#c76600]/[0.06] px-2 py-0.5 rounded-full">
                  Launch Offer
                </span>
              </div>

              <Link
                to="/products/$slug"
                params={{ slug: featured.slug }}
                className="mt-6 inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-full bg-[#3a2a22] text-[#f7f3ee] font-mono text-[0.625rem] tracking-[0.18em] uppercase font-semibold transition-all duration-500 hover:bg-[#4a3a32] hover:shadow-[0_6px_20px_rgba(58,42,34,0.18)]"
              >
                View Flagship Edition
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: Engineering Details ═══ */}
      <section className="relative py-12 sm:py-18">
        <div className="mx-auto max-w-[68rem] px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="font-mono text-[0.4375rem] tracking-[0.35em] text-[#c76600] uppercase font-semibold">
              Engineered Details
            </span>
            <h3
              className="mt-3 font-display text-[#3a2a22] tracking-tight leading-[1.15]"
              style={{ fontSize: "clamp(1.375rem, 3.5vw, 2rem)" }}
            >
              What makes every edition{" "}
              <span className="italic text-[#c76600]/75">worth wearing.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#3a2a22]/[0.07] rounded-2xl overflow-hidden border border-[#3a2a22]/[0.07]">
            {[
              { label: "UV Shield", value: "Advanced", note: "Multi-layer deflection for harsh Indian sun" },
              { label: "Breathability", value: "Engineered", note: "Airflow channels that prevent heat trapping" },
              { label: "Weight", value: "Ultra-Light", note: "Disappears on skin, protection maintained" },
              { label: "Climate", value: "Adaptive", note: "Designed and tested for Indian conditions" },
              { label: "Coverage", value: "Complete", note: "Zero-gap architecture for confidence" },
              { label: "Durability", value: "Lasting", note: "Performance through repeated wear" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnceEarly}
                transition={{ delay: Math.min(i * 0.05, 0.25), duration: 0.6, ease }}
                className="bg-white/75 px-6 py-6"
              >
                <span className="font-mono text-[0.5rem] tracking-[0.25em] text-[#c76600] uppercase font-semibold">
                  {item.label}
                </span>
                <div className="mt-2 font-display text-[1.0625rem] text-[#3a2a22] tracking-tight font-medium">
                  {item.value}
                </div>
                <p className="mt-1.5 text-[0.75rem] text-[#5a4a3f] font-light leading-relaxed">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: Conversion CTA ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3EDE4] via-[#EDE5DA] to-[#E6DDCE]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,130,13,0.04),transparent_45%)]" />

        <div className="relative mx-auto max-w-[68rem] px-5 sm:px-8 py-16 sm:py-22">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease }}
            className="text-center"
          >
            <h3
              className="font-display text-[#3a2a22] tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.75rem)" }}
            >
              Thoughtfully layered.
              <br />
              <span className="italic text-[#c76600]">Effortlessly worn.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-sm text-[0.8125rem] text-[#a08f84] font-light leading-relaxed">
              Browse what's already shippable on the{" "}
              <Link
                to="/products"
                search={{ sort: "newest" }}
                className="text-[#3a2a22] underline underline-offset-4 decoration-[#3a2a22]/20 hover:decoration-[#3a2a22]/50 transition-colors duration-300"
              >
                shop catalogue
              </Link>
              .
            </p>

            <Link
              to="/products"
              search={{ sort: "newest" }}
              className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#3a2a22]/12 bg-white/35 backdrop-blur-[4px] font-mono text-[0.625rem] tracking-[0.18em] uppercase font-semibold text-[#3a2a22] transition-all duration-500 hover:bg-[#3a2a22] hover:text-[#f7f3ee] hover:border-[#3a2a22] hover:shadow-[0_6px_20px_rgba(58,42,34,0.16)]"
            >
              Shop All Editions
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cart = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    cart.add({
      productId: product.slug,
      slug: product.slug,
      name: product.name,
      image: product.image,
      priceCents: product.priceCents,
      currency: "INR",
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setWishlisted((w) => !w);
  }

  const savingsPercent = Math.round(
    ((product.originalPriceCents - product.priceCents) / product.originalPriceCents) * 100
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnceEarly}
      transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.7, ease }}
      className="group flex flex-col rounded-2xl border border-[#3a2a22]/[0.05] bg-white/40 backdrop-blur-[2px] overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:shadow-[0_12px_32px_-8px_rgba(58,42,34,0.1)] hover:-translate-y-1"
    >
      {/* Image container — reduced from aspect-[4/5] to aspect-[5/6] for tighter proportion */}
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="block relative aspect-[5/6] overflow-hidden"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${product.tone} opacity-75 transition-opacity duration-600 group-hover:opacity-90`} />
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-800 group-hover:opacity-55"
          style={{ background: `radial-gradient(circle at 50% 40%, ${product.glow}, transparent 60%)` }}
        />

        {/* Product image — controlled sizing with generous padding */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-8 sm:p-10">
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain drop-shadow-[0_6px_16px_rgba(58,42,34,0.1)] transition-transform duration-600 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.04]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnceEarly}
            transition={{ delay: 0.1 + index * 0.04, duration: 0.6, ease }}
          />
        </div>

        {/* Ground shadow */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[7%] w-[45%] h-2 rounded-[50%] bg-[#3a2a22]/10 blur-[8px] pointer-events-none z-[5]" />

        {/* Edition chip */}
        <div className="absolute top-3 left-3 z-20 bg-white/50 backdrop-blur-[5px] rounded-lg px-2.5 py-1.5 border border-white/25">
          <span className="font-mono text-[0.4375rem] tracking-[0.2em] text-[#3a2a22]/45 uppercase font-semibold block leading-none">Ed.</span>
          <span className="font-mono text-[0.8125rem] tracking-tight text-[#3a2a22] font-bold block mt-px leading-none">{product.id}</span>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3 z-20 bg-white/50 backdrop-blur-[5px] rounded-full px-2.5 py-1 border border-white/25">
          <span className="font-mono text-[0.4375rem] tracking-[0.15em] text-[#c76600] uppercase font-semibold">{product.badge}</span>
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-white/50 backdrop-blur-[5px] border border-white/25 flex items-center justify-center transition-all duration-300 hover:bg-white/70 hover:scale-110"
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlisted ? "#c76600" : "none"} stroke={wishlisted ? "#c76600" : "#3a2a22"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </Link>

      {/* Content block — denser, more commercial */}
      <div className="flex flex-col flex-1 px-4 pt-3.5 pb-4">
        {/* Title + line */}
        <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
          <h3 className="font-display text-[1rem] sm:text-[1.0625rem] text-[#3a2a22] tracking-tight leading-snug font-medium line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[0.75rem] text-[#7b6a5f]/70 font-light italic line-clamp-1">
            {product.line}
          </p>
        </Link>

        {/* Trust microcopy */}
        <p className="mt-2 text-[0.6875rem] text-[#7b6a5f]/55 font-light leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Feature row */}
        <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-0.5">
          {product.features.map((f) => (
            <span key={f} className="flex items-center gap-1 text-[0.625rem] text-[#7b6a5f]/55 font-light">
              <span className="w-[2.5px] h-[2.5px] rounded-full bg-[#c76600]/35" />
              {f}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {product.tags.map((tag) => (
            <span key={tag} className="border border-[#3a2a22]/[0.05] bg-[#FAF7F3]/80 rounded-full px-2 py-[3px] text-[0.4375rem] font-mono tracking-[0.12em] uppercase text-[#3a2a22]/50 font-semibold">
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer to push pricing+CTA to bottom */}
        <div className="flex-1 min-h-2" />

        {/* Trust line */}
        <div className="mt-3 flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c76600" strokeWidth="1.5" className="opacity-45">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="font-mono text-[0.5rem] tracking-[0.1em] text-[#7b6a5f]/50 uppercase">{product.trust}</span>
        </div>

        {/* Divider */}
        <div className="mt-2.5 h-px bg-[#3a2a22]/[0.05]" />

        {/* Pricing */}
        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="font-mono text-[1.0625rem] text-[#3a2a22] tracking-tight font-semibold">
            &#8377;799
          </span>
          <span className="font-mono text-[0.6875rem] text-[#a08f84]/45 line-through tracking-tight">
            &#8377;1,200
          </span>
          <span className="font-mono text-[0.4375rem] tracking-[0.15em] text-[#c76600] uppercase font-semibold bg-[#c76600]/[0.06] px-1.5 py-[2px] rounded-full">
            {savingsPercent}% off
          </span>
        </div>

        {/* Delivery line */}
        <p className="mt-1.5 text-[0.5625rem] text-[#7b6a5f]/40 font-light">
          Limited Launch Edition &middot; Free shipping
        </p>

        {/* CTA row */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full font-mono text-[0.5625rem] tracking-[0.15em] uppercase font-semibold transition-all duration-500 ${
              addedToCart
                ? "bg-[#2d6b3f] text-white"
                : "bg-[#3a2a22] text-[#f7f3ee] hover:bg-[#4a3a32] hover:shadow-[0_4px_16px_rgba(58,42,34,0.16)]"
            }`}
          >
            {addedToCart ? (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="flex items-center justify-center px-3.5 py-2.5 rounded-full border border-[#3a2a22]/10 font-mono text-[0.5625rem] tracking-[0.12em] uppercase font-semibold text-[#3a2a22]/65 transition-all duration-400 hover:border-[#3a2a22]/25 hover:text-[#3a2a22]"
          >
            View
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
