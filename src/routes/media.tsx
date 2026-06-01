import { createFileRoute } from "@tanstack/react-router";
import { Download, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bgPetals from "@/assets/bg-petals.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "MEDIA & PRESS — Ellivion Healthcare" },
      { name: "description", content: "For Journalists & Partners, brand assets, and media inquiries for Ellivion Healthcare." },
    ],
  }),
  component: MediaPage,
});

const press = [
  { outlet: "Product Innovation", quote: "Advancing wellness through thoughtfully crafted nutraceutical, skincare, and fragrance solutions.", date: "2026" },
  { outlet: "Quality & Transparency", quote: "Committed to rigorous quality standards, third-party testing, and customer trust.", date: "2026" },
  { outlet: "Research & Development", quote: "Continuously exploring new formulations inspired by science and traditional wisdom.", date: "2026" },
  { outlet: "Growing Community", quote: "Building a trusted wellness ecosystem for customers across India and beyond.", date: "2026" },
  
];

const releases = [
  { title: "Looking to feature Ellivion or request additional information?", date: "May 18, 2026" },
  
];

function MediaPage() {
  return (
    <div>
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundImage: `url(${bgPetals})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative mx-auto max-w-5xl px-6 text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">MEDIA & PRESS</p>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl leading-[1.02] text-white">
      Latest from Ellivion
Product Innovation
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {press.map((p, i) => (
            <Reveal key={p.outlet} delay={i * 80}>
              <div className="p-10 rounded-3xl bg-white border border-border h-full hover:shadow-pink hover:-translate-y-1 transition-all duration-500">
                <div className="font-display text-4xl text-pink">{p.outlet}</div>
                <p className="mt-6 text-xl leading-snug text-navy">"{p.quote}"</p>
                <div className="mt-6 text-sm text-foreground/60">{p.date}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl mb-10">For Journalists & Partners</h2>
        </Reveal>
        <div className="border-t-2 border-pink/50">
          {releases.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <a href="#" className="group flex items-center justify-between py-7 border-b-2 border-pink/30 hover:bg-pink/8 transition-colors px-2 rounded-lg">
                <div>
                  <div className="text-xs text-pink font-semibold">{r.date}</div>
                  <h3 className="mt-1 text-xl md:text-2xl group-hover:text-pink transition-colors">{r.title}</h3>
                </div>
                <ArrowUpRight className="group-hover:rotate-45 transition-transform text-navy" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Reveal>
          <div className="relative overflow-hidden p-10 lg:p-14 rounded-3xl bg-gradient-vibrant text-white grid md:grid-cols-2 gap-8 items-center">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-pink/60 animate-blob blur-3xl" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl text-white">Media kit</h3>
              <p className="mt-3 text-white/85 max-w-md">
                Logos, product photography, founder bios, and brand guidelines.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-pink text-white font-semibold hover:bg-pink/90 transition-colors">
                <Download size={16} /> Download kit
              </a>
              <a href="mailto:media@ellivion.com" className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white/40 text-white text-sm hover:bg-white/10 transition-colors">
                media@ellivion.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
