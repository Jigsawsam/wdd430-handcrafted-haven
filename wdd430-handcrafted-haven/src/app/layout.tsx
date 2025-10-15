import "./globals.css";
import "./styles.css";
import { Poppins, Inter, Source_Code_Pro } from "next/font/google";

// Headings: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

// Body: Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

// Code snippets: Source Code Pro
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Handcrafted Haven",
  description: "A marketplace for unique handcrafted treasures",
};

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
        {children}
      </body>
    </html>
  );
}
