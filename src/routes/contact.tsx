import { createFileRoute } from "@tanstack/react-router";
import { Flower2, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import bgPetals from "@/assets/bg-petals.jpg";
import contactPowerCentre from "@/assets/contact-power-centre.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ellivion Healthcare" },
      {
        name: "description",
        content: "Get in touch with the Ellivion team for product, press, or partnership inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

const contactItems = [
  { icon: Mail, label: "Email", value: "info@ellivion.com" },
  { icon: Phone, label: "Phone", value: "+91 9310992634" },
  {
    icon: MapPin,
    label: "Address",
    value: "Office Add : F-18, First Floor,\nPlot No.1A, District Center,\nMayur Vihar Phase 1, New Delhi,\nDelhi 110091",
  },
];

function ContactPage() {
  return (
    <div>
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ backgroundImage: `url(${bgPetals})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink">Contact</p>
          <h1 className="mt-4 text-5xl text-white md:text-7xl">
            Let's <em className="italic text-pink">talk.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-white/85">
            Questions, feedback, or just want to say hello - we read every message.
          </p>
        </div>
      </section>

      {/* <section className="bg-white">
        <div className="grid min-h-[520px] lg:grid-cols-[41%_59%]">
          <Reveal className="relative z-10 flex items-center bg-[#faf9fb] px-6 py-14 sm:px-10 lg:px-16 xl:px-20">
            <div
              className="pointer-events-none absolute inset-y-0 right-[-220px] hidden w-[320px] bg-[#faf9fb] lg:block"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-[-245px] hidden w-[340px] bg-gradient-pink lg:block"
              style={{ clipPath: "polygon(73% 0%, 78% -1%, 32% 137%)" }}
            />

            <div className="relative w-full max-w-xl">
              <p className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">Welcome to</p>
              <h2 className="mt-3 text-4xl leading-tight text-navy sm:text-5xl">
                Ellivion <em className="italic text-pink">Power Centre</em>
              </h2>

              <div className="my-8 flex items-center gap-3 text-[#b6965f]">
                <span className="h-px flex-1 bg-[#d8be83]" />
                <Flower2 size={30} strokeWidth={1.5} />
                <span className="h-px flex-1 bg-[#d8be83]" />
              </div>

              <h3 className="font-display text-2xl font-semibold leading-tight text-navy">
                Corporate Office &<br />
                Wellness Innovation Hub
              </h3>

              <div className="mt-8 space-y-7">
                {contactItems.map((c) => (
                  <div key={c.label} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-pink text-white shadow-pink">
                      <c.icon size={21} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-pink">{c.label}</div>
                      <div className="mt-2 whitespace-pre-line text-base leading-7 text-navy sm:text-lg">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="relative min-h-[360px] overflow-hidden lg:-ml-24 lg:min-h-[520px]"
            style={{ clipPath: "polygon(96px 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              src={contactPowerCentre}
              alt="Ellivion products displayed inside the Ellivion Power Centre office"
              className="h-full w-full object-cover lg:pl-24"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
          </Reveal>
        </div>
      </section> */}
      <section className="bg-white">
  <div className="grid lg:grid-cols-[45%_55%]">
    
    {/* LEFT PANEL */}
    <Reveal className="relative flex items-center bg-[#faf9fb] px-6 py-16 sm:px-10 lg:px-14 xl:px-20">

      {/* Diagonal Shape */}
      <div
        className="pointer-events-none absolute inset-y-0 right-[-140px] hidden w-[220px] bg-[#faf9fb] lg:block"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      {/* Pink Accent Line */}
      <div
        className="pointer-events-none absolute inset-y-0 right-[-155px] hidden w-[235px] lg:block"
        style={{
          background:
            "linear-gradient(180deg,#FE28A1 0%,#d91d88 100%)",
          clipPath: "polygon(66% -3%, 222% 31%, 30% 103%)",
        }}
      />

      <div className="relative w-full max-w-xl">

        <p className="font-display text-3xl font-semibold text-[#0529B1] sm:text-4xl">
          Welcome to
        </p>

        <h2 className="mt-3 text-4xl leading-tight text-[#0529B1] sm:text-5xl">
          Ellivion{" "}
          <span className="italic text-[#FE28A1]">
            Power Centre
          </span>
        </h2>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#FE28A1]/30" />
          <div className="h-3 w-3 rounded-full bg-[#FE28A1]" />
          <span className="h-px flex-1 bg-[#FE28A1]/30" />
        </div>

        <h3 className="text-2xl font-semibold leading-tight text-[#0529B1]">
          Corporate Office &
          <br />
          Wellness Innovation Hub
        </h3>

        <div className="mt-10 space-y-8">

          {/* EMAIL */}
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE28A1] text-white shadow-lg">
              <Mail size={20} />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FE28A1]">
                Email
              </div>

              <div className="mt-2 text-base leading-7 text-[#0529B1] sm:text-lg">
                info@ellivion.com
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE28A1] text-white shadow-lg">
              <Phone size={20} />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FE28A1]">
                Phone
              </div>

              <div className="mt-2 text-base leading-7 text-[#0529B1] sm:text-lg">
                +91 9310992634
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE28A1] text-white shadow-lg">
              <MapPin size={20} />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FE28A1]">
                Address
              </div>

              <div className="mt-2 whitespace-pre-line text-base leading-8 text-[#0529B1] sm:text-lg">
                Office Add : F-18, First Floor,
                {"\n"}
                Plot No.1A, District Center,
                {"\n"}
                Mayur Vihar Phase 1, New Delhi,
                {"\n"}
                Delhi 110091
              </div>
            </div>
          </div>

        </div>
      </div>
    </Reveal>

    {/* RIGHT IMAGE */}
    <Reveal
      delay={100}
      className="relative overflow-hidden lg:min-h-[700px]"
    >
      <div
        className="h-full w-full lg:[clip-path:polygon(80px_0,100%_0,100%_100%,0_100%)]"
      >
        <img
          src={contactPowerCentre}
          alt="Ellivion Power Centre"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </Reveal>

  </div>
</section>
    </div>
  );
}
