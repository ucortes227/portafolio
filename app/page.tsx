"use client";
import Image from "next/image";
import { Github, Linkedin, Mail, MessageCircle, Phone, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { coach, learning, projects, site, stack, type Level } from "@/lib/data";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Ulises, vi tu portafolio y me gustaría contactarte.")}`;

const levelColor: Record<Level, string> = {
  Utilizo: "#f97316",
  "En desarrollo": "#a78bfa",
  Aprendiendo: "#666666",
};

const techIcons: Record<string, string> = {
  Python: "🐍",
  JavaScript: "⚡",
  "Next.js": "▲",
  TypeScript: "📘",
  Tailwind: "🎨",
  "React": "⚛",
  Figma: "🎯",
  Git: "🔀",
  GitHub: "🐙",
  Linux: "🐧",
  "Node.js": "🟢",
  CSS: "🎨",
  HTML: "📄",
  SQL: "🗄",
};

const socialLinks = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
];

export default function Home() {
  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="inicio"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div
          className="glow-orb glow-orb-accent"
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            top: "-10%",
            right: "-10%",
            zIndex: 0,
          }}
        />
        <div
          className="glow-orb glow-orb-violet"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            bottom: "10%",
            left: "-5%",
            zIndex: 0,
          }}
        />

        {/* Gigantic name behind content */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            zIndex: 1,
            lineHeight: 0.82,
            pointerEvents: "none",
          }}
        >
          <p
            className="text-outline"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(80px, 18vw, 280px)",
              whiteSpace: "nowrap",
              letterSpacing: "-0.04em",
              paddingLeft: "2vw",
              userSelect: "none",
            }}
          >
            ULISES
          </p>
        </div>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "120px 32px 200px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "48px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left content */}
            <div style={{ maxWidth: "640px" }}>
              {/* Available badge */}
              {site.openToWork && (
                <div className="rise" style={{ marginBottom: "28px" }}>
                  <span className="badge badge-accent">
                    <span className="avail-dot" />
                    Disponible para nuevos proyectos
                  </span>
                </div>
              )}

              {/* Role */}
              <p
                className="rise-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Ingeniero de Software
              </p>

              {/* Headline */}
              <h1
                className="rise-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  color: "var(--color-white)",
                  marginBottom: "24px",
                }}
              >
                Construyendo{" "}
                <span
                  style={{
                    display: "inline",
                    background: "linear-gradient(90deg, #f97316, #fb923c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  soluciones
                </span>{" "}
                digitales con propósito
              </h1>

              {/* Subtext */}
              <p
                className="rise-3"
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-soft)",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                  marginBottom: "36px",
                }}
              >
                Me apasiona transformar ideas en código funcional y elegante.
                Desarrollo en Python y Next.js, explorando ciberseguridad y buscando
                proyectos donde pueda aprender, aportar y crecer.
              </p>

              {/* CTAs */}
              <div
                className="rise-3"
                style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}
              >
                <a href="#proyectos" className="btn-primary">
                  Ver proyectos <ArrowRight size={16} />
                </a>
                <a href="#contacto" className="btn-outline">
                  Hablemos
                </a>
              </div>

              {/* Social links */}
              <div
                className="rise-4"
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-mute)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Encuéntrame en
                </span>
                {socialLinks.map(({ label, href, icon: Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        border: "1px solid var(--color-line)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-soft)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--color-accent)";
                        el.style.color = "var(--color-accent)";
                        el.style.background = "rgba(249,115,22,.08)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--color-line)";
                        el.style.color = "var(--color-soft)";
                        el.style.background = "transparent";
                      }}
                    >
                      <Icon size={16} aria-hidden />
                    </a>
                  ) : null
                )}
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-soft)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#22c55e";
                    el.style.color = "#22c55e";
                    el.style.background = "rgba(34,197,94,.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--color-line)";
                    el.style.color = "var(--color-soft)";
                    el.style.background = "transparent";
                  }}
                >
                  <MessageCircle size={16} aria-hidden />
                </a>
              </div>
            </div>

            {/* Right – profile image */}
            <div
              className="rise float-anim hidden md:block"
              style={{
                position: "relative",
                width: "320px",
                flexShrink: 0,
              }}
            >
              {/* Glow ring */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(249,115,22,.2), transparent 70%)",
                  animation: "breathe 4s ease-in-out infinite alternate",
                }}
              />
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(249,115,22,.2)",
                  position: "relative",
                }}
              >
                <Image
                  src="/images/profile.png"
                  alt="Retrato de Ulises Cortés"
                  width={591}
                  height={827}
                  priority
                  sizes="320px"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    filter: "drop-shadow(0 0 40px rgba(249,115,22,.3))",
                  }}
                />
              </div>

              {/* Floating stat card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  left: "-24px",
                  background: "var(--color-panel)",
                  border: "1px solid var(--color-line)",
                  borderRadius: "14px",
                  padding: "14px 18px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  boxShadow: "0 20px 60px rgba(0,0,0,.5)",
                }}
              >
                <CheckCircle2 size={20} color="#22c55e" />
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem" }}>Egresado UV</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--color-mute)" }}>
                    Ing. Software · 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="hero-overlay" />
      </section>

      {/* ── MARQUEE TECH STRIP ── */}
      <div
        style={{
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
          background: "var(--color-surface)",
          padding: "18px 0",
          overflow: "hidden",
        }}
        aria-hidden
      >
        <div className="marquee-track">
          {[
            "Python", "JavaScript", "Next.js", "TypeScript", "React",
            "Node.js", "Git", "GitHub", "Figma", "CSS", "HTML", "SQL",
            "Linux", "Ciberseguridad", "Python", "JavaScript", "Next.js",
            "TypeScript", "React", "Node.js", "Git", "GitHub", "Figma",
            "CSS", "HTML", "SQL", "Linux", "Ciberseguridad",
          ].map((tech, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 28px",
                fontSize: "0.85rem",
                color: "var(--color-mute)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                letterSpacing: "0.04em",
              }}
            >
              <span style={{ color: "var(--color-accent)", opacity: 0.7 }}>✦</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section
        id="sobre-mi"
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 32px",
        }}
      >
        <div style={{ display: "grid", gap: "64px" }} className="about-grid">
          <div>
            <p className="section-tag">Sobre mí</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "var(--color-white)",
                marginBottom: "32px",
                maxWidth: "680px",
              }}
            >
              Un ingeniero que disfruta{" "}
              <span style={{ color: "var(--color-accent)" }}>resolver</span> problemas reales
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  icon: "🎯",
                  title: "Orientado a resultados",
                  desc: "Cuando algo no funciona, investigo por qué, pruebo alternativas y aprendo del proceso. No me detengo ante los errores.",
                },
                {
                  icon: "📚",
                  title: "Aprendizaje constante",
                  desc: "Me actualizo de forma continua y exploro tecnologías nuevas por iniciativa propia. Cada proyecto es una clase.",
                },
                {
                  icon: "🤝",
                  title: "Trabajo en equipo",
                  desc: "Disfruto colaborar y comunicar ideas de forma clara. Mi experiencia como coach me dio habilidades que aplico en cada proyecto.",
                },
                {
                  icon: "⚡",
                  title: "Pasión por el detalle",
                  desc: "Me importa tanto que el código funcione como que sea limpio, mantenible y que el resultado final se vea bien.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    background: "var(--color-panel)",
                    border: "1px solid var(--color-line)",
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                  className="card-hover"
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(249,115,22,.1)",
                      border: "1px solid rgba(249,115,22,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      marginBottom: "16px",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "8px",
                      color: "var(--color-white)",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-soft)", lineHeight: 1.65 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote
            style={{
              borderLeft: "3px solid var(--color-accent)",
              paddingLeft: "28px",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)",
              fontWeight: 700,
              color: "var(--color-soft)",
              lineHeight: 1.45,
              fontStyle: "italic",
              maxWidth: "700px",
            }}
          >
            &ldquo;Para mí, cada reto es una oportunidad para aprender algo nuevo, mejorar mis
            habilidades y construir mejores soluciones.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section
        id="tecnologias"
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 32px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-tag" style={{ justifyContent: "center" }}>
              Tech Stack
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "16px",
              }}
            >
              Herramientas &amp; Tecnologías
            </h2>
            <p style={{ color: "var(--color-soft)", fontSize: "1rem", maxWidth: "480px", margin: "0 auto" }}>
              Lo que utilizo hoy y lo que estoy aprendiendo, sin porcentajes inventados.
            </p>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              marginBottom: "48px",
              flexWrap: "wrap",
            }}
          >
            {(Object.entries(levelColor) as [Level, string][]).map(([l, c]) => (
              <span
                key={l}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "var(--color-soft)",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: c,
                    flexShrink: 0,
                  }}
                />
                {l}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {stack.map((g) => (
              <div key={g.title}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--color-mute)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {g.title}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {g.items.map((i) =>
                    i.pending ? (
                      <span key={i.name} className="skill-chip skill-chip-pending">
                        + {i.name}
                      </span>
                    ) : (
                      <span
                        key={i.name}
                        className="skill-chip"
                        style={{ position: "relative" }}
                      >
                        {techIcons[i.name] && (
                          <span style={{ fontSize: "0.9rem" }}>{techIcons[i.name]}</span>
                        )}
                        {i.name}
                        {i.level && (
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              background: levelColor[i.level],
                              flexShrink: 0,
                            }}
                          />
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="proyectos"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "56px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p className="section-tag">Proyectos</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Trabajo seleccionado
            </h2>
          </div>
          <p
            style={{
              maxWidth: "360px",
              color: "var(--color-soft)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
            }}
          >
            Calidad antes que cantidad: cada proyecto explica el problema, la solución y lo que aprendí.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* ── FORMATION + LEARNING ── */}
      <section
        style={{
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-line)",
          borderBottom: "1px solid var(--color-line)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
          }}
        >
          {/* Formation */}
          <div id="formacion">
            <p className="section-tag">Formación</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "32px",
              }}
            >
              Educación
            </h2>

            <div className="timeline-item" style={{ paddingBottom: "32px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  color: "var(--color-white)",
                  marginBottom: "6px",
                }}
              >
                Ingeniería de Software
              </h3>
              <p style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "4px" }}>
                Universidad Veracruzana (UV)
              </p>
              <p style={{ color: "var(--color-mute)", fontSize: "0.85rem" }}>
                Región Orizaba-Córdoba, Veracruz · Egresado 2026
              </p>
            </div>

            <div
              style={{
                marginTop: "8px",
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px dashed var(--color-line)",
                background: "rgba(249,115,22,.03)",
              }}
            >
              <p style={{ fontSize: "0.8rem", color: "var(--color-mute)" }}>
                📌 Próximamente: certificaciones, cursos y formación complementaria.
              </p>
            </div>
          </div>

          {/* Learning */}
          <div>
            <p className="section-tag">Crecimiento</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "32px",
              }}
            >
              Aprendizaje continuo
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {learning.map(([t, d]) => (
                <div
                  key={t}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "12px",
                    border: "1px solid var(--color-line)",
                    background: "var(--color-card)",
                    transition: "border-color 0.2s",
                  }}
                  className="card-hover"
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--color-accent)",
                      marginBottom: "4px",
                    }}
                  >
                    {t}
                  </p>
                  <p style={{ fontSize: "0.825rem", color: "var(--color-soft)", lineHeight: 1.55 }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BEYOND CODE ── */}
      <section
        id="mas-alla-del-codigo"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 32px",
        }}
      >
        <div style={{ marginBottom: "56px" }}>
          <p className="section-tag">Más allá del código</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              maxWidth: "600px",
              lineHeight: 1.15,
            }}
          >
            Fui coach en un gimnasio.{" "}
            <span style={{ color: "var(--color-accent)" }}>No es tech,</span> pero me formó.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {coach.map(([t, d], i) => (
            <div
              key={t}
              className="grad-border card-hover"
              style={{
                background: "var(--color-panel)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "rgba(249,115,22,.15)",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                0{i + 1}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "10px",
                  color: "var(--color-white)",
                }}
              >
                {t}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-soft)", lineHeight: 1.65 }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contacto"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--color-surface)",
          borderTop: "1px solid var(--color-line)",
        }}
      >
        {/* Accent glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,.15), transparent 70%)",
            top: "-200px",
            right: "-100px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 32px 120px",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <p className="section-tag">Contacto</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              ¿Tienes un proyecto?{" "}
              <span style={{ color: "var(--color-accent)" }}>Hablemos.</span>
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-soft)",
                lineHeight: 1.7,
                marginBottom: "48px",
                maxWidth: "520px",
              }}
            >
              ¿Tienes un proyecto, una oportunidad o un reto interesante? Me gustaría
              conocerlo. Siempre estoy abierto a nuevas conversaciones.
            </p>

            {/* Contact buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "40px" }}>
              <a
                href={`mailto:${site.email}`}
                className="btn-primary"
              >
                <Mail size={16} />
                Enviar correo
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              {site.linkedin && (
                <a href={site.linkedin} className="btn-outline">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}
              {site.github && (
                <a href={site.github} className="btn-outline">
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
              <a
                href={`mailto:${site.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-soft)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-soft)")
                }
              >
                <Mail size={16} />
                {site.email}
              </a>
              <a
                href={`tel:+52${site.phone.replace(/\s/g, "")}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-soft)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--color-soft)")
                }
              >
                <Phone size={16} />
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Large watermark name */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(60px, 12vw, 180px)",
            lineHeight: 0.85,
            WebkitTextStroke: "1px rgba(245,245,245,.06)",
            color: "transparent",
            letterSpacing: "-0.04em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          CORTÉS
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid var(--color-line)",
          padding: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p style={{ fontSize: "0.85rem", color: "var(--color-mute)" }}>
          © {new Date().getFullYear()} Ulises Cortés · Hecho con Next.js
        </p>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: "var(--color-mute)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-mute)")
              }
            >
              <Github size={18} />
            </a>
          )}
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "var(--color-mute)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-mute)")
              }
            >
              <Linkedin size={18} />
            </a>
          )}
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            style={{ color: "var(--color-mute)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-mute)")
            }
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
