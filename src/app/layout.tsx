import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Karva — El AI Dealer OS para autos usados",
  description:
    "Karva conecta tu CRM, WhatsApp e inventario con un agente de IA que responde leads en segundos, da seguimiento y agenda citas. El sistema operativo con IA para dealers de autos usados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
