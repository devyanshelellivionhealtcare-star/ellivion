import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import bgBlossom from "@/assets/bg-blossom.jpg";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ellivion Healthcare" },
      { name: "description", content: "Learn how Ellivion Healthcare collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, make a purchase, sign up for our newsletter, or contact our customer support. This may include your name, email address, shipping address, phone number, and payment information.

We also automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and the time and date of your visits.`,
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: `We use the information we collect to process and fulfill your orders, communicate with you about your account or purchases, send you marketing communications (with your consent), improve our website and product offerings, and detect and prevent fraud or abuse.

We may also use your information to comply with legal obligations or to protect our rights and the rights of others.`,
  },
  {
    icon: Shield,
    title: "How We Protect Your Information",
    content: `We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.

We use industry-standard encryption (SSL/TLS) to protect sensitive information transmitted online. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    icon: FileText,
    title: "Sharing Your Information",
    content: `We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this policy. We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.

We may also release information when required by law, to enforce our site policies, or to protect ours or others' rights, property, or safety.`,
  },
  {
    icon: Mail,
    title: "Your Rights & Choices",
    content: `You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by clicking the "unsubscribe" link in our emails or contacting us directly.

If you are a resident of the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR), including the right to object to processing and the right to data portability.`,
  },
];

function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-36 overflow-hidden"
        style={{ backgroundImage: `url(${bgBlossom})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink/30 animate-blob blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Legal</p>
          <h1 className="mt-6 text-5xl md:text-7xl text-balance leading-[1.02]">
            Privacy <em className="italic text-pink">Policy</em>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how we collect, use, and safeguard your personal information when you visit or make a purchase from Ellivion Healthcare.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: May 20, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 space-y-16">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <div className="flex gap-6 items-start">
              <div className="hidden sm:flex shrink-0 w-14 h-14 items-center justify-center rounded-2xl bg-gradient-pink text-white shadow-pink">
                <s.icon size={24} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl">{s.title}</h2>
                <div className="mt-4 text-foreground/75 leading-relaxed whitespace-pre-line space-y-4">
                  {s.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            {i < sections.length - 1 && <div className="mt-16 border-t border-border/60" />}
          </Reveal>
        ))}

        {/* Contact */}
        <Reveal>
          <div className="mt-16 rounded-3xl bg-gradient-vibrant p-10 md:p-14 text-white text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 animate-blob blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink/30 animate-blob blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl text-white">Questions about your privacy?</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please don't hesitate to reach out to our team.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full bg-white text-navy font-medium text-sm hover:bg-cream transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
