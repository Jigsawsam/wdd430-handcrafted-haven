import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Handcrafted Haven</h1>
          <p className={styles.subtitle}>
            Discover unique handcrafted treasures while supporting local artisans.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/products" className={styles.primaryBtn}>
              Shop Now
            </a>
            <a href="/sell" className={styles.secondaryBtn}>
              Become a Seller
            </a>
          </div>
        </div>
        <Image
          src="/handcrafted-hero.jpg"
          alt="Handcrafted items"
          width={500}
          height={300}
          className={styles.heroImage}
          priority
        />
      </section>

      {/* Featured Categories */}
      <section className={styles.categories}>
        <h2>Explore Categories</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Jewelry</h3>
            <p>Elegant handcrafted necklaces, rings & more.</p>
          </div>
          <div className={styles.card}>
            <h3>Home Decor</h3>
            <p>Unique handmade items to brighten your living space.</p>
          </div>
          <div className={styles.card}>
            <h3>Clothing</h3>
            <p>Cozy, one-of-a-kind fashion pieces made with care.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          At Handcrafted Haven, we believe in celebrating creativity, supporting
          artisans, and promoting sustainable shopping. Each purchase directly
          empowers a creator and helps keep traditional crafts alive.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Handcrafted Haven. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
