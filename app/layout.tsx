import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

const description = "Portafolio de Ulises Cortés, ingeniero de software egresado de la Universidad Veracruzana. Python, Next.js y fundamentos de ciberseguridad.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ulises Cortés | Ingeniero de Software", template: "%s | Ulises Cortés" },
  description,
  openGraph: { title: "Ulises Cortés | Ingeniero de Software", description, type: "website", locale: "es_MX", siteName: "Ulises Cortés" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
