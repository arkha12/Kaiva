import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homi Systems | Engineering Intelligent Software",
  description: "Enterprise solutions, analytics, and automations for the modern web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} light h-full antialiased scroll-smooth`}>
      <head>
        {/* display=block: con swap, mientras carga la fuente se ve el nombre del
            icono en texto ("database", "arrow_forward") y empuja el layout.
            no-page-custom-font es para el router pages/, no aplica en app/. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=block" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md overflow-x-hidden min-h-full flex flex-col">{children}</body>
    </html>
  );
}
