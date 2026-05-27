import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import bgPetals from "@/assets/bg-petals.jpg";
import { Gavel, ShoppingBag, Truck, RotateCcw, Scale, AlertCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Ellivion Healthcare" },
      { name: "description", content: "Read the Terms of Service for using Ellivion Healthcare's website and purchasing our products." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    icon: Gavel,
    title: "Agreement to Terms",
    content: `By accessing or using the Ellivion Healthcare website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.`,
  },
  {
    icon: ShoppingBag,
    title: "Use of Our Website",
    content: `You may use our website for lawful purposes only. You agree not to use our site in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the website.

All content on this website, including text, graphics, logos, images, and software, is the property of Ellivion Healthcare and is protected by copyright and other intellectual property laws.`,
  },
  {
    icon: Truck,
    title: "Orders & Payment",
    content: `When you place an order through our website, you agree to provide current, complete, and accurate purchase and account information. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase, inaccuracies in product or pricing information, or problems identified by our fraud detection systems.

Prices for our products are subject to change without notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product.`,
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    content: `We want you to love your purchase. If you are not completely satisfied with your order, you may return unopened and unused items within 30 days of delivery for a full refund of the purchase price (excluding shipping charges).

To initiate a return, please contact our customer support team. Refunds will be processed within 5-10 business days after we receive your returned item.`,
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: `Ellivion Healthcare shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or inability to use, our website or products, even if we have been advised of the possibility of such damages.

Our products are not intended to diagnose, treat, cure, or prevent any disease. Results may vary, and individual experiences with our products may differ.`,
  },
  {
    icon: AlertCircle,
    title: "Disclaimer of Warranties",
    content: `Our website and products are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, timely, secure, or error-free.

The information on this website is for general informational purposes only and is not a substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.`,
  },
];

function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-36 overflow-hidden"
        style={{ backgroundImage: `url(${bgPetals})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink/30 animate-blob blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-pink font-semibold">Legal</p>
          <h1 className="mt-6 text-5xl md:text-7xl text-balance leading-[1.02]">
            Terms of <em className="italic text-pink">Service</em>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Please read these terms carefully before using our website or purchasing our products. By using Ellivion Healthcare, you agree to these terms.
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
              <h2 className="text-3xl text-white">Have questions about our terms?</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Our team is happy to clarify any part of these terms. Reach out and we'll get back to you promptly.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full bg-white text-navy font-medium text-sm hover:bg-cream transition-colors"
              >
                <Mail size={16} className="mr-2" /> Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
