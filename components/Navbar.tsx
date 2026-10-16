"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Work", "#proyectos"],
  ["Stack", "#tecnologias"],
  ["Experience", "#formacion"],
  ["Contact", "#contacto"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(37,37,37,0.8)" : "none",
      }}
    >
      <nav
        aria-label="Principal"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "0.95rem",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            UC
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--color-white)",
              letterSpacing: "-0.02em",
            }}
          >
            Ulises Cortés
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-soft)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-white)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-soft)")
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#contacto"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "10px 22px", fontSize: "0.85rem" }}
          >
            Let&apos;s Talk ↗
          </a>
          <button
            className="md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "1px solid var(--color-line)",
              borderRadius: "8px",
              padding: "8px",
              color: "var(--color-white)",
              cursor: "pointer",
            }}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--color-line)",
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          <ul style={{ padding: "16px 32px 24px", listStyle: "none" }}>
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "14px 0",
                    color: "var(--color-soft)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderBottom: "1px solid var(--color-line)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--color-soft)")
                  }
                >
                  {label}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: "20px" }}>
              <a href="#contacto" className="btn-primary" onClick={() => setOpen(false)}>
                Let&apos;s Talk ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
