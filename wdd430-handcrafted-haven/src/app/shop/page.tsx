"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./shop.css";

type Product = {
  id: number;
  title: string;
  price: number;
  image?: string;
};
// Generate 24 sample products using picsum.photos images
const SAMPLE_PRODUCTS: Product[] = Array.from({ length: 24 }).map((_, i) => {
  const id = i + 1;
  return {
    id,
    title: [
      "Hand-stitched Leather Wallet",
      "Ceramic Coffee Mug",
      "Woven Wall Hanging",
      "Silver Pendant Necklace",
      "Knitted Scarf",
      "Wooden Serving Board",
      "Handmade Soap Set",
      "Terracotta Planter",
      "Embroidered Pillow",
      "Beaded Bracelet",
      "Macramé Plant Hanger",
      "Custom Candle",
      "Artisan Earrings",
      "Hand-painted Vase",
      "Leather Keychain",
      "Silk Bandana",
      "Crochet Coasters",
      "Hand-blown Glass Ornament",
      "Pressed Flower Frame",
      "Bamboo Utensil Set",
      "Quilted Table Runner",
      "Scented Linen Spray",
      "Minimalist Tote Bag",
      "Vintage-style Poster",
    ][i % 24],
    price: Math.round((20 + Math.random() * 120) * 100) / 100,
    // Use picsum with a seed to get consistent but varied images
    image: `https://picsum.photos/seed/product-${id}/800/600`,
  };
});

export default function Page() {
  const [products] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartCount(JSON.parse(saved).length || 0);
  }, []);

  const addToCart = (p: Product) => {
    const saved = localStorage.getItem("cart");
    const cart = saved ? JSON.parse(saved) : [];
    // merge quantities when item already exists
    const existing = cart.find((it: any) => it.id === p.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ id: p.id, name: p.title, price: p.price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  };

  return (
    <div className="shop-page">
      <header className="shop-header">
        <h1>Shop</h1>
        <div className="cartSummary">
          <Link href="/cart">Cart ({cartCount})</Link>
        </div>
      </header>

      <section className="productGrid">
        {products.map((p) => (
          <article key={p.id} className="productCard">
            {p.image && (
              <div style={{ position: 'relative', width: '100%', height: 160 }}>
                <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover', borderRadius: 6 }} />
              </div>
            )}
            <h3>{p.title}</h3>
            <p>${p.price.toFixed(2)}</p>
            <div className="productActions">
              <button onClick={() => addToCart(p)} className="btn-primary">Add to cart</button>
              <Link href={`/shop/${p.id}`} className="btn-secondary">Details</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
  