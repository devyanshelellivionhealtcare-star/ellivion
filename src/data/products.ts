import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const products = [
  { id: 1, name: "Rose Glow Serum", category: "Treatment", price: 68, image: p1, desc: "Vitamin C + niacinamide for an even, luminous, lit-from-within glow." },
  { id: 2, name: "Velvet Repair Cream", category: "Moisturizer", price: 54, image: p2, desc: "Ceramide-rich barrier repair for soft, plump, healthy skin." },
  { id: 3, name: "Petal Cleanser", category: "Cleanser", price: 32, image: p3, desc: "Gentle gel-to-foam wash with rose & chamomile botanicals." },
  { id: 4, name: "Botanical Face Oil", category: "Treatment", price: 72, image: p4, desc: "Cold-pressed squalane and rosehip for overnight nourishment." },
  { id: 5, name: "Hydra Bloom Mist", category: "Toner", price: 38, image: p1, desc: "Hyaluronic acid mist with rose water to refresh and prep skin." },
  { id: 6, name: "Bright Eye Balm", category: "Eye Care", price: 46, image: p2, desc: "Caffeine and peptides for de-puffed, brighter, awake eyes." },
  { id: 7, name: "Wellness Multivitamin", category: "Wellness", price: 42, image: p3, desc: "Daily skin + hair + nails support, dermatologist formulated." },
  { id: 8, name: "Collagen Boost Drink", category: "Wellness", price: 56, image: p4, desc: "Marine collagen peptides with rose hip and vitamin C." },
] as const;
