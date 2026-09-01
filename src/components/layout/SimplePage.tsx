import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/** Páginas sueltas fuera de la landing: login, privacidad, términos. */
export function SimplePage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="px-page pt-40 pb-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-h2 font-bold text-ink">{title}</h1>
          <div className="mt-8 space-y-5 text-lead text-justified text-ink-muted">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
