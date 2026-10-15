import type { ReactNode } from "react";

export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-mute">{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
