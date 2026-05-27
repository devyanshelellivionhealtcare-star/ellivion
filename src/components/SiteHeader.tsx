import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ellivion.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/media", label: "Media" },
  { to: "/contact", label: "Contact" },
   { to: "/testing", label: "Purity & Safety Reports" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/90 border-b border-pink/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Ellivion Healthcare home">
          <img src={logo} alt="Ellivion Healthcare" className="h-10 md:h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="story-link text-foreground/80 hover:text-pink transition-colors"
              activeProps={{ className: "text-pink font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/products"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full btn-vibrant text-sm font-medium"
        >
          Shop now
        </Link>
        <button className="lg:hidden p-2 text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
