import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ShieldCheck, Leaf, FlaskConical, HeartPulse } from "lucide-react";
import bgLab from "@/assets/bg-lab.jpg";
import bgBlossom from "@/assets/bg-blossom.jpg";
import hero from "@/assets/hero-ellivion.png";
import praveensir from "@/assets/praveensir.png";
import devyanssir from "@/assets/devyans.png";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ellivion Healthcare" },
      { name: "description", content: "Ellivion Healthcare Private Limited develops high-quality nutraceutical and Wellness products for holistic health and well-being." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  type TeamMember = {
    name: string;
    role: string;
    initial: string;
    bio: string;
    image?: string;
  };

  const directors: TeamMember[] = [
     { name: "Praveen Bahri", role: "Director", initial: "PB", bio: "Praveen Bahri provides strategic guidance across product development and quality assurance, drawing on extensive experience in the pharmaceutical sector. His focus on integrity, efficacy, and customer wellbeing continues to shape Ellivion's commitment to excellence.", image: praveensir },
    { name: "Devyansh Chandel", role: "Director", initial: "DC", bio: "Bringing together expertise in technology, operations, and brand development, Devyansh Chandel focuses on building scalable systems and exceptional customer experiences. His approach drives Ellivion's mission to make quality wellness products more accessible and trusted.", image: devyanssir },
   
  ];

  const advisors: TeamMember[] = [
    { name: "Dr. Elena Vasquez", role: "Dermatology Advisor", initial: "EV", bio: "Board-certified dermatologist, NYU Langone. Researches barrier repair." },
    { name: "Dr. Hiroshi Tanaka", role: "Microbiome Advisor", initial: "HT", bio: "Skin microbiome researcher, University of Tokyo." },
    { name: "Sara Okonkwo", role: "Sustainability Advisor", initial: "SO", bio: "Circular packaging pioneer; advisor to leading wellness brands." },
    { name: "Dr. James Whitfield", role: "Clinical Trials Advisor", initial: "JW", bio: "Leads efficacy testing across 30+ global cosmetic studies." },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="relative py-28 lg:py-40 overflow-hidden"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink/50 animate-blob blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Our story</p>
          <h1 className="mt-6 text-5xl md:text-7xl text-balance leading-[1.02]">
           <em className="italic text-pink"> Wellness, beauty and fragrance </em><br /> <em >thoughtfully reimagined..</em>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
        We believe exceptional products begin with exceptional standards. Every Ellivion creation is developed with care, guided by quality, and designed to enrich everyday life.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-pink rounded-[2.5rem] blur-2xl opacity-80" />
            <img src={hero} alt="Ellivion healthcare wellness" className="relative rounded-3xl shadow-elegant aspect-[4/5] object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-4xl md:text-5xl">Our <em className="italic text-pink">philosophy.</em></h2>
          <div className="mt-10 space-y-8">
            {[
              { icon: Leaf, t: "Tradition & Innovation", d: "We draw inspiration from trusted wellness traditions while embracing modern research and evolving consumer needs." },
              { icon: FlaskConical, t: "Science-Driven Excellence", d: "Every product is developed with a focus on quality, efficacy, and continuous improvement—guided by research and rigorous standards." },
              { icon: ShieldCheck, t: "Transparency & Trust", d: "From ingredient sourcing to third-party testing, we believe confidence comes from openness, accountability, and consistency." },
            ].map((x, i) => (
              <div key={i} className="flex gap-6 border-t border-pink/30 pt-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pink/10 grid place-items-center">
                    <x.icon className="text-pink" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl">{x.t}</h3>
                  <p className="mt-2 text-foreground/70">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* DIRECTORS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Leadership</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Leadership  <em className="italic text-pink">team.</em></h2>
            <p className="mt-4 text-foreground/70">Combining industry expertise, innovation, and a shared commitment to building a trusted wellness brand.</p>
          </div>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {directors.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="group relative bg-card rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-pink/10 hover:border-pink/30" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 40px rgba(239, 121, 121, 0.15)" }}>
                <div className="overflow-hidden aspect-square rounded-2xl bg-gradient-to-br from-pink to-pink/60 mb-5 shadow-pink group-hover:shadow-2xl transition-all duration-500">
                  {p.image ? (
                    <img src={p.image} alt={`${p.name} portrait`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-5xl text-white">
                      {p.initial}
                    </div>
                  )}
                </div>
                <h3 className="text-xl">{p.name}</h3>
                <p className="text-pink text-sm uppercase tracking-wider mt-1">{p.role}</p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section
        className="relative py-24"
        style={{ backgroundImage: `url(${bgLab})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-12 text-center text-white">
          {[
            { k: "Quality", },
            { k: "Wellness" },
            { k: "Transparency"},
          ].map((s) => (
            <Reveal key={s.k}>
              <div className="font-display text-5xl md:text-7xl text-white">{s.k}</div>
          
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTED. TRUSTED. */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink/20 text-xs text-pink font-medium mb-6 border border-pink/40">
              <HeartPulse size={14} /> Tested. Trusted. For Your Everyday Wellness.
            </div>
            <h2 className="text-4xl md:text-5xl">Science, transparency, <em className="italic text-pink">and trust.</em></h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            { title: "Third-Party Tested", desc: "Independent laboratory testing verifies purity, potency, and safety for every batch." },
            { title: "Quality Assured", desc: "Products are evaluated against strict specifications before release." },
            { title: " Transparent Reporting", desc: "Batch-specific quality reports are available for customer verification." },
            { title: "Trusted Standards", desc: "Our commitment to integrity guides every stage of product development." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex gap-5 bg-card rounded-2xl p-6 border border-pink/10 hover:border-pink/30 transition-all duration-500">
                <div>
                  <div className="w-10 h-10 rounded-full bg-pink/10 text-pink flex items-center justify-center font-display text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-16 text-center text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Quality is not a claim — it is a standard we uphold in every product we create.
          </p>
        </Reveal>
      </section>

      {/* ADVISORY BOARD */}
      <section
        className="relative py-24"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-cream/85" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Advisory board</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Our <em className="italic text-pink">advisors.</em></h2>
              <p className="mt-4 text-foreground/70">Experienced professionals and industry experts who help guide our commitment to quality, innovation, and consumer wellbeing.</p>
            </div>
          </Reveal>
          {/* <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div className="flex gap-5 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink/15 hover:border-pink/40 transition-all duration-500">
                  <div className="shrink-0 overflow-hidden w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-display text-xl">
                    {p.image ? (
                      <img src={p.image} alt={`${p.name} portrait`} className="h-full w-full object-cover" />
                    ) : (
                      p.initial
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg">{p.name}</h3>
                    <p className="text-pink text-xs uppercase tracking-wider mt-0.5">{p.role}</p>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}
