
import { Phone,  MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/ellivion.png";
const NAVY = "#141773";
const CORAL = "#f06b6b";
const GOLD = "#e9c46a";
const CREAM = "#f3ecdf";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
function Ornament() {
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden>
      <span className="h-px w-16 sm:w-24" style={{ background: GOLD }} />
      <span style={{ color: GOLD }}>◆</span>
      <span style={{ color: GOLD }}>◀</span>
      <span style={{ color: GOLD }}>●</span>
      <span style={{ color: GOLD }}>▶</span>
      <span style={{ color: GOLD }}>◆</span>
      <span className="h-px w-16 sm:w-24" style={{ background: GOLD }} />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full">
      {/* Coral top band with ornament */}
      {/* <div className="relative h-40 sm:h-48 flex items-end justify-center pb-6" style={{ background: CORAL }}>
        <Ornament />
      </div> */}

      {/* Navy main section */}
      <div style={{ background: NAVY, color: CREAM }}>
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-30 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* LEFT COLUMN — Brand */}
            <div>
           
               <div className="bg-white/95 inline-block p-3">
            <img src={logo} alt="Ellivion Healthcare" className="h-12 w-auto" />
          </div>
            

              <div className="flex">
                 <h4 className="text-sm font-semibold mb-4 text-[20px] text-white mt-8  normal-case">
          
          Ellivion brings together wellness, beauty, and fragrance in thoughtfully curated collections designed to enrich everyday living.
         </h4>
              </div>

             

             <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a key={i} href={Icon === Instagram ? "https://www.instagram.com/ellivion.official?igsh=c2NxZ3Nka25xanJz" : Icon === Twitter ? "https://twitter.com/ellivion" : Icon === Facebook ? "https://www.facebook.com/share/1B3P9fEz4W/" : "mailto:info@ellivion.com"} className="p-2.5 rounded-full bg-white/15 hover:bg-pink transition-colors" aria-label="social">
                <Icon size={16} />
              </a>
            ))}
          </div>
            </div>

         
            <div>
            
   <div>
          <h4 className="text-sm font-semibold mb-4 text-[20px] text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/products" className="hover:text-pink hover:underline">Products</Link></li>
            <li><Link to="/about" className="hover:text-pink hover:underline">About</Link></li>
            <li><Link to="/blog" className="hover:text-pink hover:underline">Blog</Link></li>
            <li><Link to="/media" className="hover:text-pink hover:underline">Media</Link></li>
          </ul>
        </div>
           
               <div>
          <h4 className="text-sm font-semibold mb-4 text-[20px] text-white mt-8">Company</h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link to="/careers" className="hover:text-pink hover:underline">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-pink hover:underline">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-pink hover:underline">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-pink hover:underline">Terms</Link></li>
          </ul>
        </div>
            </div>

            {/* RIGHT COLUMN — Map */}
            <div>
              <div className="border overflow-hidden shadow-2xl" style={{ borderColor: GOLD }}>
                <iframe
                  title="Ellivion Location"
                  src="https://maps.google.com/maps?q=28.6139,77.2090&z=15&output=embed"
                  className="w-full h-[280px] sm:h-[360px] lg:h-[400px] block"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/h5bE7jg2ujo1DrPM7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase hover:text-white transition"
                style={{ color: "#FFFFFF" }}
              >
                <MapPin size={14} />
                Open In Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t" style={{ borderColor: "rgba(243,236,223,0.12)" }}>
          <div
            className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 py-6 text-center text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(243,236,223,0.55)" }}
          >
            © {new Date().getFullYear()} Ellivion Healthcare Private Limited · Crafted With Care
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
