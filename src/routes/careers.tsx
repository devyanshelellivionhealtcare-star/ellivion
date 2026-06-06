import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bgBlossom from "@/assets/bg-blossom.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Ellivion Healthcare" },
      { name: "description", content: "Join Ellivion. We're hiring scientists, designers, and storytellers in healthcare & beauty." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Digital Marketing Specialist", dept: "Growth", location: "Delhi", description: "Drive digital campaigns, content strategy, and brand visibility across channels." },
  { title: "Content Writer", dept: "Growth", location: "Delhi", description: "Create compelling, research-backed content for wellness, health, and brand storytelling." },
   { title: "Sales Associate", dept: "Growth", location: "Delhi", description: "Create compelling, research-backed content for wellness, health, and brand storytelling." },
 { title: "Customer Service Representative", dept: "Growth", location: "Delhi", description: "Create compelling, research-backed content for wellness, health, and brand storytelling." },

];

function CareersPage() {
  return (
    <div>
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/45" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink/50 animate-blob blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Careers</p>
          <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl leading-[1.02] text-balance">
           Build the<em className="italic text-pink"> future of wellness</em> — with us.
          </h1>
          <p className="mt-8 text-lg text-foreground/75 max-w-xl">
           We're a team of innovators, creators, and problem-solvers united by a passion for quality and wellbeing. Whether you're in product development, operations, marketing, design, or customer experience, you'll have the opportunity to make meaningful contributions and grow alongside a fast-evolving brand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl mb-10">Open roles</h2>
        </Reveal>
        <div className="border-t-2 border-pink/30">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <a href="mailto:hr@ellivion.com" className="group flex items-center justify-between py-7 border-b-2 border-pink/20 hover:bg-pink/5 transition-colors px-2 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl group-hover:text-pink transition-colors">{r.title}</h3>
                  <div className="mt-2 flex gap-4 text-sm text-foreground/60">
                    <span>{r.dept}</span>
                    <span>·</span>
                    <span>{r.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70">{r.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-pink/10 grid place-items-center group-hover:bg-pink group-hover:text-white transition-all shrink-0 ml-4">
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 relative overflow-hidden p-12 rounded-3xl bg-gradient-vibrant text-white text-center">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-pink/60 animate-blob blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl md:text-4xl text-white">Join our journey.</h3>
              <p className="mt-3 text-white/85 max-w-md mx-auto">
               The perfect role may not be listed today, but exceptional talent is always welcome. We'd love to hear how you can contribute to the future of Ellivion.
              </p>
              <a href="mailto:careers@ellivion.com" className="mt-8 inline-flex px-8 py-4 rounded-full bg-pink text-white font-semibold hover:bg-pink/90 transition-colors">
                careers@ellivion.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
