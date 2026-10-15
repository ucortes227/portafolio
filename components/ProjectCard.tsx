import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-violet/60">
      <div className="relative aspect-video bg-gradient-to-br from-violet/25 via-panel to-ink">
        {p.image ? <Image src={p.image} alt={`Captura de ${p.name}`} fill className="object-cover" sizes="(min-width:1024px) 40vw, 100vw" /> : (
          <span className="absolute inset-0 grid place-items-center text-sm text-mute">Captura pendiente</span>
        )}
        {p.isDemo && <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-lilac">Contenido de demostración</span>}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="font-display text-2xl font-bold">{p.name}</h3>
        <p className="text-mute">{p.problem}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-soft/90">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <p className="text-sm"><span className="font-medium text-lilac">Aprendí: </span><span className="text-mute">{p.learned}</span></p>
        <ul className="flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="rounded-md border border-line px-2.5 py-0.5 text-sm text-lilac">{s}</li>)}</ul>
        {(p.repo || p.demo) && (
          <div className="mt-auto flex gap-5 pt-2 text-sm">
            {p.repo && <a href={p.repo} className="inline-flex items-center gap-2 hover:text-lilac"><Github size={16} aria-hidden />Repositorio</a>}
            {p.demo && <a href={p.demo} className="inline-flex items-center gap-2 hover:text-lilac"><ExternalLink size={16} aria-hidden />Demo en vivo</a>}
          </div>
        )}
      </div>
    </article>
  );
}
