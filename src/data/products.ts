import p1 from "@/assets/product-1.png";
import p2 from "@/assets/product-2.png";
import p3 from "@/assets/product-3.png";
import p4 from "@/assets/product-4.png";
import p5 from "@/assets/liposomal.png";
export const products = [
  { id: 1, name: "NMN", category: "Nutraceutical", price: 1500, image: p1, desc: "Vitamin C + niacinamide for an even, luminous, lit-from-within glow." },
  { id: 2, name: "Kumkumadi Tailam", category: "Daily Care", price: 3000, image: p2, desc: "Ceramide-rich barrier repair for soft, plump, healthy skin." },
  { id: 3, name: "Attar", category: "Daily Care", price: 2100, image: p3, desc: "Gentle gel-to-foam wash with rose & chamomile botanicals." },

 { id: 5, name: "Glutathione", category: "Daily Care", price: 1500, image: p5, desc: "Cold-pressed squalane and rosehip for overnight nourishment." },
 
] as const;
