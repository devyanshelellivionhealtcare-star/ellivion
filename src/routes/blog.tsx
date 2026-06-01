import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.png";
import p3 from "@/assets/product-3.png";
import p4 from "@/assets/product-4.png";
import bgBlossom from "@/assets/bg-blossom.jpg";
import p5 from "@/assets/liposomal.png";
export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Ellivion Healthcare" },
      { name: "description", content: "Ayurveda, nutraceutical science, wellness rituals, and stories from Ellivion Healthcare." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "NMN:What It Is and Why It's Gaining Attention", excerpt: "Understanding cellular energy, NAD+ support, and healthy aging.", date: "March 2026", read: "7 min", image: p1, tag: "Ayurveda" },
  { title: "Kumkumadi Oil:A Timeless Beauty Ritual", excerpt: "Discover the ingredients, heritage, and benefits behind this iconic formulation.", date: "Feb 2026", read: "8 min", image: p2, tag: "Skincare" },
  { title: "The Art of Attars: Fragrance Traditions That Endure", excerpt: "Exploring the history, craftsmanship, and cultural significance of attars.", date: "Feb 2026", read: "6 min", image: p3, tag: "Fragrances" },
  { title: "Aloe vera & Turmeric Soap", excerpt: "How Amalaki, Bibhitaki, and Haritaki work together for gut health.", date: "Jan 2026", read: "5 min", image: p4, tag: "Skincare" },
  { title: "Glutathione", excerpt: "Discover the ingredients, heritage, and benefits behind this iconic formulation.", date: "Jan 2026", read: "9 min", image: p5, tag: "Wellness" },
 
];

function BlogPage() {
  return (
    <div>
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">INSIGHTS</p>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl leading-[1.02]">Wellness <em className="italic text-pink">decoded.</em></h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 100}>
            <article className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-border hover:shadow-pink hover:-translate-y-1 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-blush">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-foreground/60">
                  <span className="px-3 py-1 rounded-full bg-pink/25 text-pink font-semibold border border-pink/40">{post.tag}</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.read} read</span>
                </div>
                <h2 className="mt-4 text-2xl group-hover:text-pink transition-colors">{post.title}</h2>
                <p className="mt-3 text-foreground/70">{post.excerpt}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
