import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import logo from "@/assets/ellivion.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 relative overflow-hidden bg-gradient-vibrant text-white">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink/60 animate-blob blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink/40 animate-blob blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="bg-white/95 inline-block rounded-2xl p-3">
            <img src={logo} alt="Ellivion Healthcare" className="h-12 w-auto" />
          </div>
          <p className="mt-6 text-white/85 leading-relaxed">
           Ellivion Healthcare Private Limited is dedicated to crafting exceptional wellness, beauty, and fragrance experiences—bringing together quality, innovation, and timeless traditions.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a key={i} href={Icon === Instagram ? "https://www.instagram.com/ellivion.official?igsh=c2NxZ3Nka25xanJz" : Icon === Twitter ? "https://twitter.com/ellivion" : Icon === Facebook ? "https://www.facebook.com/share/1B3P9fEz4W/" : "mailto:info@ellivion.com"} className="p-2.5 rounded-full bg-white/15 hover:bg-pink transition-colors" aria-label="social">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/products" className="hover:text-pink">Products</Link></li>
            <li><Link to="/about" className="hover:text-pink">About</Link></li>
            <li><Link to="/blog" className="hover:text-pink">Blog</Link></li>
            <li><Link to="/media" className="hover:text-pink">Media</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/careers" className="hover:text-pink">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-pink">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-pink">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-pink">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/15 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Ellivion Healthcare Private Limited. Ayurveda meets science.
      </div>
    </footer>
  );
}
