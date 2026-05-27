import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bgPetals from "@/assets/bg-petals.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ellivion Healthcare" },
      { name: "description", content: "Get in touch with the Ellivion team for product, press, or partnership inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section
        className="relative py-28 overflow-hidden"
        style={{ backgroundImage: `url(${bgPetals})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Contact</p>
          <h1 className="mt-4 text-5xl md:text-7xl text-white">Let's <em className="italic text-pink">talk.</em></h1>
          <p className="mt-6 text-white/85 max-w-md mx-auto text-lg">
            Questions, feedback, or just want to say hello — we read every message.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-20 grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2 space-y-8">
          {[
            { icon: Mail, label: "Email", value: "info@ellivion.com" },
            { icon: Phone, label: "Phone", value: "+91 9310992634" },
            {
              icon: MapPin,
              label: "Address",
              value:
                "OFFICE ADD : F-18, FIRST FLOOR, PLOT NO.1A, DISTRICT CENTER, MAYUR VIHAR PHASE 1, NEW DELHI, DELHI 110091",
            },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 items-start">
              <div className="p-4 rounded-2xl bg-gradient-pink text-white h-fit shadow-pink"><c.icon size={20} /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-pink font-semibold">{c.label}</div>
                <div className="mt-1 whitespace-pre-line text-navy text-lg">{c.value}</div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* <Reveal delay={150} className="lg:col-span-3">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // POST to Python backend (see backend/ folder). Mock success on UI side.
              setSent(true);
            }}
            className="bg-white border border-border rounded-3xl p-8 lg:p-10 space-y-5 shadow-soft"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First name" type="text" />
              <Field label="Last name" type="text" />
            </div>
            <Field label="Email" type="email" />
            <Field label="Subject" type="text" />
            <div>
              <label className="text-xs uppercase tracking-wider text-pink font-semibold">Message</label>
              <textarea rows={5} required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-pink outline-none py-2 resize-none" />
            </div>
            <button type="submit" className="mt-4 w-full py-4 rounded-full btn-vibrant text-sm font-medium">
              {sent ? "Thanks — we'll be in touch ✓" : "Send message"}
            </button>
          </form>
        </Reveal> */}
      </section>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-pink font-semibold">{label}</label>
      <input type={type} required className="mt-2 w-full bg-transparent border-b-2 border-border focus:border-pink outline-none py-2 text-navy" />
    </div>
  );
}
