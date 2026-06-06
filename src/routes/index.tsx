import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero4 from "@/assets/hero4.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ellivion — Timeless Beauty & Conscious Wellness" },
      {
        name: "description",
        content: "Dermatologist-crafted Wellness rituals for radiant skin and graceful longevity.",
      },
    ],
  }),
  component: Home,
});

type Slide = {
  image: string;
  tint: string;
};

const slides: Slide[] = [
  {
    image: hero1,
    tint: "#e8d4e8",
  },
  {
    image: hero2,
    tint: "#d8c4e8",
  },
  {
    image: hero4,
    tint: "#e8d4e8",
  },
];

function Home() {
  const [idx, setIdx] = useState(0);
  const slide = slides[idx];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO - Full Background Image Carousel */}
      {/* <section
        className="relative min-h-[calc(100svh-5rem)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden transition-all duration-[1200ms]"
        style={{
          backgroundColor: slide.tint,
        }}
      >
        <img
          src={slide.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1200ms] md:object-cover"
        />

     
        <div className="absolute inset-0 bg-black/10 md:bg-black/20" />

       
        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-10 z-20">
          <div className="mx-auto max-w-[1600px] flex items-end justify-center sm:justify-between">
            <div className="hidden md:flex flex-col gap-1 text-[10px] uppercase tracking-[0.3em] text-white/70">
              <span>Scroll</span>
              <div className="w-px h-10 bg-white/30 mt-1" />
            </div>
            <div className="flex items-center gap-3 sm:gap-6 rounded-full bg-black/15 px-4 py-3 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-white" : "w-6 bg-white/40"}`}
                  />
                ))}
              </div>
              <span className="text-[11px] tracking-[0.2em] text-white/70 tabular-nums">
                {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="hidden sm:flex gap-2 ml-2 text-white">
                <button
                  onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % slides.length)}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* HERO */}
<section className="relative w-full overflow-hidden bg-transparent">
  <div className="relative w-full">
    {/* Banner Image */}
    <img
      src={slide.image}
      alt=""
      aria-hidden="true"
      className="block w-full !h-auto sm:!h-96 md:!h-[500px] lg:!h-[80vh] object-contain sm:object-cover bg-gradient-to-b from-pink/20 to-pink/10"
      // className="block w-full h-80 sm:h-96 md:h-[500px] lg:h-[80vh] object-contain sm:object-cover bg-gradient-to-b from-pink/20 to-pink/10"
    />

    {/* Slider Controls */}
    <div className="absolute bottom-1.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 w-full px-2">
      <div className="flex items-center justify-center gap-1 sm:gap-4 rounded-full bg-black/15 backdrop-blur-md px-2 sm:px-4 py-1.5 sm:py-3 max-w-fit mx-auto">
       
        <div className="flex gap-1 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-[1.5px] sm:h-[2px] transition-all duration-300 ${
                i === idx
                  ? "w-5 sm:w-12 bg-white"
                  : "w-3 sm:w-6 bg-white/40"
              }`}
            />
          ))}
        </div> 

       
      <div className="flex gap-0.5 sm:gap-2 ml-1 sm:ml-2">
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + slides.length) % slides.length)
            }
            className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <ChevronLeft className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={() => setIdx((i) => (i + 1) % slides.length)}
            className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition"
          >
            <ChevronRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
          </button>
        </div> 
      </div>
    </div>
  </div>
</section>
      {/* MARQUEE */}
      <section className="py-5 sm:py-8 border-y border-border/60 overflow-hidden bg-background">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center font-display text-2xl sm:text-3xl md:text-4xl text-ink/80 italic"
            >
              {["Glow", "Heal", "Bloom", "Radiate", "Nourish", "Awaken", "Balance", "Elevate"].map(
                (w) => (
                  <span key={w} className="px-5 sm:px-10 flex items-center gap-5 sm:gap-10">
                    {w}
                    <span className="text-gold not-italic">✦</span>
                  </span>
                ),
              )}
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
                Intelligent nutrition for timeless <em className="text-gold">vitality </em> and{" "}
                  <em>elevated living.</em>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 self-end">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Three quiet commitments shape every formula we make — to the earth that gives, the
                  body that receives, and the moment in between.
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
                    <v.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" strokeWidth={1.2} />
                    <span className="font-display text-xl sm:text-2xl text-ink/30">{v.n}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl mb-3 sm:mb-4">{v.t}</h3>
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
       Thoughtfully crafted for every         <br className="hidden sm:block" />
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
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                        {p.category}
                      </p>
                      <h3 className="font-display text-xl sm:text-2xl leading-tight">{p.name}</h3>
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
              "Wellness begins with trust, grows through quality, and endures through consistency.
"
            </blockquote>
            
           
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-ink text-background bg-[#ef7979]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-8">
              — JOIN THE ELLIVION COMMUNITY
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.05] sm:leading-[1] text-balance text-white">
        Elevate your everyday with Ellivion.

            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-background/70 leading-relaxed max-w-xl mx-auto">
         Receive 15% off your first order and stay connected to the latest in wellness, beauty, and fragrance.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full min-w-0 flex-1 px-6 py-4 rounded-full bg-background/5 border border-background/15 focus:border-background/40 outline-none transition placeholder:text-background/40 text-background"
              />
              <button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-background text-ink text-[12px] uppercase tracking-[0.22em] hover:bg-gold transition flex items-center justify-center gap-2 bg-white text-black">
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

export default Home;
