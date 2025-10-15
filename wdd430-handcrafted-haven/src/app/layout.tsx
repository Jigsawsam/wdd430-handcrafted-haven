import "./globals.css";
import { Poppins, Inter, Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// === Fonts ===
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-code-pro",
});

// === Metadata ===
export const metadata = {
  title: "Handcrafted Haven",
  description: "Discover unique handcrafted treasures while supporting local artisans.",
};

// === Root Layout ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${sourceCodePro.variable}`}
      >
        {/* ===== Shared Icon Navigation ===== */}
        <nav className={styles.iconNav}>
          <Link href="/" className={styles.iconWrapper}>
            <Image
              src="/home-icon.png"
              alt="Home"
              fill
              className={styles.navIcon}
            />
          </Link>

          <Link href="/shop" className={styles.iconWrapper}>
            <Image
              src="/shop-icon.png"
              alt="Shop"
              fill
              className={styles.navIcon}
            />
          </Link>

          <Link href="/sell" className={styles.iconWrapper}>
            <Image
              src="/sell-icon.png"
              alt="Sell"
              fill
              className={styles.navIcon}
            />
          </Link>

          <Link href="/login" className={styles.iconWrapper}>
            <Image
              src="/login-icon.png"
              alt="Login"
              fill
              className={styles.navIcon}
            />
          </Link>
        </nav>

        {/* ===== Page Content ===== */}
        {children}
      </body>
    </html>
  );
}

