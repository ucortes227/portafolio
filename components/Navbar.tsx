"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Inicio", "#inicio"], ["Sobre mí", "#sobre-mi"], ["Tecnologías", "#tecnologias"], ["Proyectos", "#proyectos"], ["Formación", "#formacion"], ["Contacto", "#contacto"]] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 pt-[env(safe-area-inset-top)] backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-lg font-bold">Ulises Cortés</a>
        <ul className="hidden gap-7 md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="text-sm text-mute transition-colors hover:text-soft">{label}</a></li>
          ))}
        </ul>
        <button className="p-2 md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>
      {open && (
        <ul id="menu-movil" className="border-t border-line px-6 py-2 md:hidden">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-3 text-mute hover:text-soft">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
