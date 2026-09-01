import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Karva Pro: vende más autos, más rápido, con IA",
  description:
    "Karva Pro centraliza inventario, clientes, ventas, documentos y operaciones en una sola plataforma, mientras la IA detecta qué necesita atención y qué hacer a continuación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
