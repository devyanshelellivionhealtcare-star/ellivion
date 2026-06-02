import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Leaf, ShieldCheck, HeartPulse, Star } from "lucide-react";
import { useState, useEffect } from "react";
import bgBlossom from "@/assets/bg-blossom.jpg";
import bgFlatlay from "@/assets/bg-flatlay.jpg";
import bgPetals from "@/assets/bg-petals.jpg";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ellivion Healthcare — Beauty meets Wellness" },
      { name: "description", content: "Vibrant healthcare and beauty products by Ellivion — dermatologist-formulated for glowing skin and joyful wellness." },
    ],
  }),
  component: Home,
});

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-hero/60" style={{ background: "linear-gradient(135deg, rgba(246,34,147,0.8), rgba(255,255,255,0.4) 50%, rgba(246,34,147,0.5))" }} />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink/50 animate-blob blur-3xl" />
        <div className="absolute top-40 -right-20 w-[28rem] h-[28rem] bg-pink/30 animate-blob blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur border-2 border-pink text-xs text-navy font-medium shadow-pink">
              <Sparkles size={14} className="text-pink" /> New · Ayurvedic Wellness Collection 2026
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Longevity,<em className="italic text-pink"> beauty, and</em><br /> wellbeing  <em className="italic text-pink">in harmony.</em>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-md leading-relaxed">
          Ellivion brings together modern wellness, timeless traditions, and sensory experiences in one destination. Our curated range includes advanced nutraceuticals, authentic skincare formulations, and premium fragrances, all created with a commitment to quality, efficacy, and wellbeing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full btn-vibrant text-sm font-medium">
                Explore products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-navy/20 text-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors">
                Our story
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-10 text-xs text-foreground/70">
              <div><div className="font-display text-3xl text-navy">120k+</div>radiant customers</div>
              <div><div className="font-display text-3xl text-navy">4.9★</div>average rating</div>
              <div><div className="font-display text-3xl text-navy">98%</div>recommend</div>
            </div>
          </div>
          <div className="relative animate-scale-in delay-200">
            <div className="absolute -inset-8 bg-gradient-pink rounded-[3rem] blur-3xl opacity-90 animate-float-slow" />
            <div className="relative rounded-[2.5rem] shadow-elegant overflow-hidden">
              <img src={products[currentIndex].image} alt={products[currentIndex].name} className="relative rounded-[2.5rem] shadow-elegant w-full object-cover aspect-[4/5]" />
              <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 transition-colors">
                <ArrowRight size={20} className="text-navy rotate-180" />
              </button>
              <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10 transition-colors">
                <ArrowRight size={20} className="text-navy" />
              </button>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-pink animate-float-soft">
              <div className="flex items-center gap-2 text-navy">
                <HeartPulse size={20} className="text-pink" />
                <div>
                  <div className="text-xs text-muted-foreground">Dermatologist</div>
                  <div className="text-sm font-semibold">Approved formulas</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-navy text-white rounded-2xl px-4 py-3 shadow-elegant animate-float-soft delay-300">
              <div className="text-2xl font-display">4.9</div>
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={10} className="fill-pink text-pink"/>)}</div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-navy w-6" : "bg-navy/40 hover:bg-navy/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-navy text-white py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl">
          {Array.from({length:2}).map((_, k) => (
            <div key={k} className="flex gap-12 items-center shrink-0">
              {["Glow", "•", "Heal", "•", "Bloom", "•", "Care", "•", "Radiance", "•", "Wellness", "•", "Beauty", "•",  "Nourish", "•",  "Revive", "•",].map((t, i) => (
                <span key={`${k}-${i}`} className={`${t === "•" ? "text-pink" : "italic"} inline-block`}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Why Ellivion</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A new standard in beauty + health.</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Leaf, title: "Thoughtfully Formulated", text: "Every product is carefully developed using high-quality ingredients, combining traditional knowledge with modern innovation." , color: "from-pink/60 via-pink/40 to-pink/20"},
            { icon: ShieldCheck, title: "Science-Backed Excellence", text: "From longevity supplements to wellness solutions, our formulations are guided by research, quality standards, and proven ingredients." , color: "from-navy/50 to-navy/30"},
            { icon: Sparkles, title: "Premium Quality", text: "Crafted with meticulous attention to purity, authenticity, and consistency to deliver an exceptional experience in every product." , color: "from-pink/55 via-pink/35 to-pink/15"},
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className={`p-8 rounded-3xl bg-gradient-to-br ${v.color} border border-border h-full hover:shadow-pink hover:-translate-y-1 transition-all duration-500`}>
                <div className="w-14 h-14 rounded-2xl bg-white grid place-items-center shadow-soft">
                  <v.icon className="text-pink" size={26} />
                </div>
                <h3 className="mt-6 text-2xl">{v.title}</h3>
                <p className="mt-3 text-foreground/70">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTS with background image */}
      <section
        className="relative py-24"
        style={{ backgroundImage: `url(${bgFlatlay})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Bestsellers</p>
                <h2 className="mt-3 text-4xl md:text-5xl">Discover what our customers love most.</h2>
              </div>
              <Link to="/products" className="story-link text-sm text-navy font-medium">View all products →</Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <Link to="/products" className="group block bg-white rounded-3xl p-4 hover:shadow-pink transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-blush">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="mt-4 px-2 pb-2">
                    <p className="text-xs text-pink uppercase tracking-wider font-semibold">{p.category}</p>
                    <div className="mt-1 flex items-start justify-between gap-2">
                      <h3 className="text-lg text-navy leading-snug">{p.name}</h3>
                      <span className="text-sm font-semibold text-navy">₹{p.price}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE on petals background */}
      <section
        className="relative py-32"
        style={{ backgroundImage: `url(${bgPetals})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <Reveal>
            <Sparkles className="mx-auto text-pink animate-float-soft" size={36} />
            <p className="mt-6 font-display text-3xl md:text-5xl leading-snug text-balance text-white">
              "A refined collection of wellness, beauty, and fragrance essentials for a life well lived."
            </p>
         
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-vibrant p-12 md:p-20 text-white">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-pink/40 animate-blob blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 animate-blob blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl text-white">Elevate your everyday with Ellivion.</h2>
                <p className="mt-4 text-white/85">Enjoy 15% off your first order plus exclusive access to wellness, beauty, and fragrance updates.</p>
              </div>
              <form className="flex gap-3 flex-wrap" onSubmit={(e)=>e.preventDefault()}>
                <input type="email" required placeholder="your@email.com" className="flex-1 min-w-[200px] px-6 py-4 rounded-full bg-white/15 border border-white/30 text-white placeholder:text-white/60 backdrop-blur outline-none focus:bg-white/25" />
                <button className="px-8 py-4 rounded-full bg-pink text-white font-semibold hover:bg-pink/90 transition-colors">Subscribe</button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
