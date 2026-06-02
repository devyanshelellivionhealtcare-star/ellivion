import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { Reveal } from "@/components/Reveal";
import { ShoppingBag } from "lucide-react";
import bgFlatlay from "@/assets/bg-flatlay.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Ellivion Healthcare" },
      { name: "description", content: "Shop high-quality nutraceutical and Ayurvedic wellness products by Ellivion Healthcare — tested for purity, potency, and safety." },
    ],
  }),
  component: ProductsPage,
});

const categories = ["All", "Wellness", "Longevity", "Beauty", "Fragrance"];

function ProductsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div>
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${bgFlatlay})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(246,34,147,0.3), rgba(255,255,255,0.6))" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white font-semibold">Collection</p>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl leading-[1.02] text-white">Discover the world of <em className="italic text-white">Ellivion</em> </h1>
          <p className="mt-6 text-white text-foreground/75 max-w-xl text-lg">
          From wellness supplements and longevity solutions to traditional beauty formulations and fine fragrances, explore products thoughtfully crafted to enrich everyday living.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2.5 rounded-full text-sm border-2 transition-all ${
                filter === c
                  ? "bg-pink text-white border-pink shadow-pink"
                  : "border-pink/40 text-navy hover:border-pink hover:bg-pink/15"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <div className="group bg-white rounded-3xl overflow-hidden border border-border hover:shadow-pink hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden bg-blush">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-pink uppercase tracking-wider font-semibold">{p.category}</p>
                  <div className="flex justify-between items-baseline mt-2">
                    <h3 className="text-xl text-navy">{p.name}</h3>
                    <span className="font-semibold text-navy">₹{p.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                  <button className="mt-5 w-full py-3 rounded-full btn-vibrant text-sm font-medium inline-flex items-center justify-center gap-2">
                    <ShoppingBag size={16}/> Add to bag
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
