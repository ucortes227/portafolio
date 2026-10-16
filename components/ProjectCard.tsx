"use client";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p, index }: { p: Project; index: number }) {
  const colors = [
    "from-orange-900/40 via-orange-950/20 to-zinc-900",
    "from-violet-900/40 via-violet-950/20 to-zinc-900",
    "from-blue-900/40 via-blue-950/20 to-zinc-900",
    "from-emerald-900/40 via-emerald-950/20 to-zinc-900",
  ];
  const accentColors = ["#f97316", "#8b5cf6", "#3b82f6", "#10b981"];
  const accent = accentColors[index % accentColors.length];
  const gradient = colors[index % colors.length];

  return (
    <article
      className="card-hover"
      style={{
        background: "var(--color-panel)",
        borderRadius: "20px",
        border: "1px solid var(--color-line)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image / gradient hero */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          background: `linear-gradient(135deg, ${accent}22 0%, #111 100%)`,
          overflow: "hidden",
        }}
        className={`bg-gradient-to-br ${gradient}`}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={`Captura de ${p.name}`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(min-width:1024px) 40vw, 100vw"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: `${accent}22`,
                border: `1px solid ${accent}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              {"</> "}
            </div>
            <span style={{ color: "var(--color-mute)", fontSize: "0.8rem" }}>
              Preview próximamente
            </span>
          </div>
        )}

        {/* Index number */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "0.75rem",
            color: accent,
            letterSpacing: "0.08em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {p.isDemo && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              borderRadius: "999px",
              background: "rgba(8,8,8,0.85)",
              padding: "4px 10px",
              fontSize: "0.7rem",
              color: accent,
              border: `1px solid ${accent}44`,
            }}
          >
            Demo
          </span>
        )}

        {/* Arrow link icon */}
        {(p.repo || p.demo) && (
          <a
            href={p.demo || p.repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }
            aria-label={`Abrir ${p.name}`}
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "24px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "var(--color-white)",
            letterSpacing: "-0.02em",
          }}
        >
          {p.name}
        </h3>

        <p style={{ color: "var(--color-soft)", fontSize: "0.875rem", lineHeight: 1.6 }}>
          {p.problem}
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {p.features.map((f) => (
            <li
              key={f}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "0.825rem",
                color: "var(--color-soft)",
              }}
            >
              <span style={{ color: accent, marginTop: "2px", flexShrink: 0 }}>▸</span>
              {f}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: "0.8rem", color: "var(--color-mute)" }}>
          <span style={{ color: accent, fontWeight: 600 }}>Aprendí: </span>
          {p.learned}
        </p>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {p.stack.map((s) => (
            <span
              key={s}
              style={{
                padding: "3px 10px",
                borderRadius: "6px",
                border: `1px solid ${accent}33`,
                background: `${accent}0d`,
                fontSize: "0.75rem",
                color: accent,
                fontWeight: 500,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        {(p.repo || p.demo) && (
          <div
            style={{
              marginTop: "auto",
              paddingTop: "16px",
              borderTop: "1px solid var(--color-line)",
              display: "flex",
              gap: "20px",
            }}
          >
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.825rem",
                  color: "var(--color-mute)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = accent)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-mute)")
                }
              >
                <Github size={14} aria-hidden />
                Repositorio
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.825rem",
                  color: "var(--color-mute)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = accent)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-mute)")
                }
              >
                <ExternalLink size={14} aria-hidden />
                Demo en vivo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
