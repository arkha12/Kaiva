import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Material Symbols autoalojada: next/font/google no la incluye en su catálogo.
// Sólo se usa el estilo outlined a peso 300 sin relleno, así que basta el
// archivo estático (343 KB) en vez de la fuente variable completa (1.1 MB).
// display "block": con "swap" se ve el nombre del icono en texto mientras carga.
const materialSymbols = localFont({
  src: "./fonts/material-symbols-outlined-300.woff2",
  variable: "--font-material-symbols",
  weight: "300",
  display: "block",
  adjustFontFallback: false,
});

const title = "KAIVA | Automatización, IA y software a medida para empresas";
const description =
  "Automatizamos procesos, conectamos sistemas y desarrollamos soluciones de inteligencia artificial que convierten tareas manuales en operaciones más eficientes.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "es", siteName: "KAIVA" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${materialSymbols.variable} light h-full antialiased scroll-smooth`}>
      <body className="font-body-md text-body-md overflow-x-hidden min-h-full flex flex-col">{children}</body>
    </html>
  );
}
