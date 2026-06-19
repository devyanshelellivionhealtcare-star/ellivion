
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero4 from "@/assets/hero4.png";
import { AnimatePresence, motion } from "framer-motion";
import videoFile from "@/assets/Firefly make a nmn bottle little small in last video  927168 (1).mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wellness, Beauty & Fragrance | Ellivion Healthcare" },
      {
        name: "description",
        content:
          "Discover premium wellness, beauty, and fragrance products. Ellivion Healthcare offers high-quality personal care solutions for a healthier and luxurious lifestyle.",
      },
      { property: "og:title", content: "Wellness, Beauty & Fragrance | Ellivion Healthcare" },
      {
        property: "og:description",
        content:
          "Discover premium wellness, beauty, and fragrance products. Ellivion Healthcare offers high-quality personal care solutions for a healthier and luxurious lifestyle.",
      },
    ],
  }),
  component: Index,
});

type HeroProduct = {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  price: string;
  oldPrice: string;
  image: string;
  swatch: string;
  gradient: string;
};

const heroProducts: HeroProduct[] = [
  {
    id: "attar",
    name: "Premium Attar",
    tagline: "The Art of Timeless Fragrance.",
    subtitle:
      "Discover exquisitely crafted attars inspired by tradition, created with the finest ingredients, and designed for modern connoisseurs.",
    price: "₹2,100",
    oldPrice: "₹2,500",
    image: hero1,
    swatch: "#d4a24c",
    gradient:
      "radial-gradient(120% 80% at 50% 40%, #3a1d4f 0%, #1a0a2e 55%, #0d0418 100%)",
  },
  {
    id: "oud",
    name: "NMN",
    tagline: "Elevate Your Everyday Potential.",
    subtitle:
      "A premium NMN formula designed to complement your wellness journey and support your active lifestyle every day.",
    price: "₹1,500",
    oldPrice: "₹2,490",
    image: hero2,
    swatch: "#2b3a7a",
    gradient:
      "radial-gradient(120% 80% at 50% 40%, #1f2d7a 0%, #0f1740 55%, #060a22 100%)",
  },
  {
    id: "musk",
    name: "Kumkumadi Oil",
    tagline: "The Secret to Timeless Glow",
    subtitle:
      "A luxurious facial oil crafted to nourish, hydrate, and reveal your skin's natural glow. Experience radiant, healthy-looking skin with every drop.",
    price: "₹3,000",
    oldPrice: "₹4,000",
    image: hero4,
    swatch: "#e91a8c",
    gradient:
      "radial-gradient(120% 80% at 50% 40%, #b71773 0%, #5a0a3a 55%, #1e0414 100%)",
  },
];

const productSizes = {
  attar: ["6ml", "12ml", "24ml"],
  oud: ["30 caps", "60 caps", "90 caps"],
  musk: ["6ml", "12ml", "24ml"],
};

function Index() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState("");
  const product = heroProducts[index];
  const next = heroProducts[(index + 1) % heroProducts.length];

  useEffect(() => {
    setSize(productSizes[product.id][0]);
  }, [index]);

  // Auto-advance carousel every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-transparent min-h-screen flex flex-col px-4 sm:px-6 lg:px-10">
        {/* Animated background */}
        <AnimatePresence>
          <motion.div
            key={product.id + "-bg"}
            className="absolute inset-0"
            style={{ background: product.gradient }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <main className="relative grid flex-1 grid-cols-1 items-center gap-8 py-10 md:grid-cols-[1.1fr_1.4fr_0.9fr]">
          {/* Left: copy */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id + "-copy"}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="h-px w-8 bg-white/40" /> Premium Collection
                </p>
                <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-white md:text-6xl">
                  {product.tagline}
                  <br />
                  <span className="italic text-white/70">
                    {product.name.replace("Ellivion ", "")}.
                  </span>
                </h1>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                  {product.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <button className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1a0a2e] transition hover:gap-4 hover:bg-white/90">
              Get the look
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          {/* Center: bottle */}
          <div className="relative flex h-[520px] items-center justify-center">
            {/* glow ring */}
            <div
              className="absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-70 transition-colors duration-700"
              style={{ background: product.swatch }}
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={product.id}
                src={product.image}
                alt={product.name}
                width={1024}
                height={1152}
                className="relative h-[500px] w-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
                initial={{ opacity: 0, y: 60, rotate: -8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, y: -60, rotate: 8, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>

          {/* Right: price + sizes */}
          <div className="flex flex-col items-end gap-6 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id + "-price"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex items-baseline gap-3"
              >
                <span className="font-display text-5xl font-medium text-white">
                  {product.price}
                </span>
                <span className="text-lg text-white/40 line-through">
                  {product.oldPrice}
                </span>
              </motion.div>
            </AnimatePresence>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/60">
                Choose your size
              </p>
              <div className="flex gap-2">
                {productSizes[product.id].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-12 w-14 rounded-full border text-sm transition ${
                      size === s
                        ? "border-white bg-white text-[#1a0a2e]"
                        : "border-white/25 text-white/80 hover:border-white/60"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Next product card */}
            <button
              onClick={() =>
                setIndex((i) => (i + 1) % heroProducts.length)
              }
              className="mt-4 flex w-44 flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-md transition hover:bg-white/10"
            >
              <div
                className="relative flex h-28 w-full items-center justify-center overflow-hidden rounded-xl"
                style={{ background: next.swatch }}
              >
                <img
                  src={next.image}
                  alt={next.name}
                  className="h-24 w-auto drop-shadow-xl"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/80">
                Next · {next.name.replace("Ellivion ", "")}
              </span>
            </button>
          </div>
        </main>
      </section>

      {/* MARQUEE */}
      <section className="py-5 sm:py-8 border-y border-border/60 overflow-hidden bg-background">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center font-display text-2xl sm:text-3xl md:text-4xl text-ink/80 italic"
            >
              {[
                "Vitality",
                "Balance",
                "Nourish",
                "Restore",
                "Elevate",
                "Thrive",
                "Inspire",
                "Flourish",
              ].map((w) => (
                <span
                  key={w}
                  className="px-5 sm:px-10 flex items-center gap-5 sm:gap-10"
                >
                  {w}
                  <span className="text-gold not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ESSENCE */}
      <section id="essence" className="py-20 sm:py-28 lg:py-48">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-14 sm:mb-20 lg:mb-24">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  — OUR PHILOSOPHY
                </p>
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] sm:leading-[1] text-balance">
                  Intelligent nutrition for timeless{" "}
                  <em className="text-gold">vitality </em> and{" "}
                  <em>elevated living.</em>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 self-end">
                <video 
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full rounded-sm mb-6 bg-background"
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Three quiet commitments shape every formula we make — to the
                  earth that gives, the body that receives, and the moment in
                  between.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: Leaf,
                n: "01",
                t: "Thoughtfully Formulated",
                d: "Every product is carefully developed using high-quality ingredients, combining traditional knowledge with modern innovation.",
              },
              {
                icon: ShieldCheck,
                n: "02",
                t: "Science-Backed Excellence",
                d: "From longevity supplements to wellness solutions, our formulations are guided by research, quality standards, and proven ingredients.",
              },
              {
                icon: Sparkles,
                n: "03",
                t: "Premium Quality",
                d: "Crafted with meticulous attention to purity, authenticity, and consistency to deliver an exceptional experience in every product.",
              },
            ].map((v, i) => (
              <Reveal key={v.n} delay={i * 120}>
                <div className="bg-background p-6 sm:p-10 lg:p-14 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8 sm:mb-12">
                    <v.icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-gold"
                      strokeWidth={1.2}
                    />
                    <span className="font-display text-xl sm:text-2xl text-ink/30">
                      {v.n}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4">
                    {v.t}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RITUALS / BESTSELLERS */}
      <section id="rituals" className="py-20 sm:py-28 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  — SIGNATURE COLLECTIONS
                </p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] sm:leading-[1]">
                  Thoughtfully crafted for every{" "}
                  <br className="hidden sm:block" />
                  <em className="text-gold"> aspect of wellbeing.</em>
                </h2>
              </div>
              <a
                href="#shop"
                className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] border-b border-foreground/40 pb-1.5 hover:border-foreground transition"
              >
                Explore all
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <a href="#" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-background rounded-sm">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    {p.bestseller && (
                      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-background/80 backdrop-blur px-3 py-1.5">
                        Bestseller
                      </span>
                    )}
                  </div>
                  <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl leading-tight">
                        {p.name}
                      </h3>
                    </div>
                    <span className="font-display text-lg sm:text-xl tabular-nums shrink-0">
                      ₹{p.price.toLocaleString()}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 sm:py-28 lg:py-48 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative">
          <Reveal>
            <div className="flex justify-center gap-1 mb-6 sm:mb-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl leading-[1.18] sm:leading-[1.15] text-balance italic text-ink">
              "Wellness begins with trust, grows through quality, and endures
              through consistency."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#ef7979]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-8">
              — JOIN THE ELLIVION COMMUNITY
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] sm:leading-[1] text-balance text-white">
              Elevate your everyday with Ellivion.
            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
              Receive 15% off your first order and stay connected to the latest
              in wellness, beauty, and fragrance.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full min-w-0 flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:border-white/50 outline-none transition placeholder:text-white/40 text-white"
              />
              <button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-[12px] uppercase tracking-[0.22em] hover:bg-gold transition flex items-center justify-center gap-2">
                Join Today
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Index;