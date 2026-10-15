import Image from "next/image";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { coach, learning, projects, site, stack, type Level } from "@/lib/data";

const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Ulises, vi tu portafolio y me gustaría contactarte.")}`;
const dot: Record<Level, string> = { Utilizo: "bg-violet", "En desarrollo": "bg-lilac/60", Aprendiendo: "bg-mute" };
const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-colors";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="glow pointer-events-none absolute -right-40 -top-32 h-[42rem] w-[42rem] rounded-full" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.3fr_1fr] md:pt-24">
            <div className="rise">
              {site.openToWork && <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-mute"><span className="h-2 w-2 rounded-full bg-violet" aria-hidden />Abierto a oportunidades</p>}
              <p className="text-lg text-lilac">Hola, soy Ulises Cortés</p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Ingeniero de Software | Desarrollador en constante evolución</h1>
              <p className="mt-6 max-w-xl text-lg text-mute">Me gusta transformar ideas en soluciones tecnológicas. Desarrollo mis habilidades en Python y Next.js mientras profundizo en ciberseguridad. Busco nuevos retos que me permitan aprender, construir y aportar valor a proyectos reales.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#proyectos" className={`${btn} bg-violet text-white hover:bg-lilac hover:text-ink`}>Explorar mis proyectos</a>
                <a href="#contacto" className={`${btn} border border-line hover:border-lilac`}>Contactarme</a>
              </div>
              <div className="mt-6 flex gap-5 text-mute">
                {site.github && <a href={site.github} aria-label="GitHub" className="hover:text-soft"><Github aria-hidden /></a>}
                {site.linkedin && <a href={site.linkedin} aria-label="LinkedIn" className="hover:text-soft"><Linkedin aria-hidden /></a>}
              </div>
            </div>
            <div className="rise mx-auto w-64 [animation-delay:.15s] sm:w-80">
              <Image src="/images/profile.png" alt="Retrato de Ulises Cortés" width={591} height={827} priority sizes="(min-width:640px) 320px, 256px" className="h-auto w-full [filter:drop-shadow(0_0_40px_rgba(139,92,246,.35))]" />
            </div>
          </div>
        </section>

        <Section id="sobre-mi" title="Sobre mí">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <blockquote className="font-display text-2xl font-bold leading-snug text-lilac">“Para mí, cada reto es una oportunidad para aprender algo nuevo, mejorar mis habilidades y construir mejores soluciones.”</blockquote>
            <div className="space-y-5 text-mute">
              <p>Soy ingeniero de software recién egresado de la Universidad Veracruzana, y una persona alegre, constante y comprometida con mejorar cada día.</p>
              <p><b className="font-medium text-soft">Me gusta resolver problemas y entender cómo funcionan las cosas.</b> Cuando algo no funciona, investigo por qué, pruebo alternativas y aprendo del proceso.</p>
              <p><b className="font-medium text-soft">Creo en aprender practicando.</b> Me actualizo de forma constante y exploro tecnologías nuevas por iniciativa propia.</p>
              <p><b className="font-medium text-soft">Disfruto colaborar</b> con otras personas y afrontar nuevos desafíos.</p>
            </div>
          </div>
        </Section>

        <Section id="tecnologias" title="Tecnologías" intro="Lo que utilizo hoy y lo que estoy aprendiendo, sin porcentajes inventados.">
          <ul className="mb-10 flex flex-wrap gap-6 text-sm text-mute">
            {(Object.keys(dot) as Level[]).map((l) => <li key={l} className="flex items-center gap-2"><span className={`h-2.5 w-2.5 rounded-full ${dot[l]}`} aria-hidden />{l}</li>)}
          </ul>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {stack.map((g) => (
              <div key={g.title}>
                <h3 className="mb-4 font-display text-lg font-bold">{g.title}</h3>
                <ul className="flex flex-wrap gap-3">
                  {g.items.map((i) => i.pending
                    ? <li key={i.name} className="rounded-lg border border-dashed border-line px-3 py-1.5 text-sm text-mute">{i.name}</li>
                    : <li key={i.name} className="flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-1.5 text-sm">{i.level && <span className={`h-2.5 w-2.5 rounded-full ${dot[i.level]}`} aria-hidden />}{i.name}{i.level && <span className="sr-only">, {i.level}</span>}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proyectos" title="Proyectos destacados" intro="Calidad antes que cantidad: cada proyecto explica el problema, la solución y lo que aprendí.">
          <div className="grid gap-8 lg:grid-cols-2">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
        </Section>

        <Section id="formacion" title="Formación">
          <div className="border-l-2 border-violet pl-6">
            <h3 className="font-display text-2xl font-bold">Ingeniería de Software</h3>
            <p className="mt-1 text-soft">Universidad Veracruzana (UV)</p>
            <p className="text-mute">Región Orizaba-Córdoba, Veracruz, México</p>
            <p className="mt-2 text-lilac">Egresado</p>
          </div>
          <p className="mt-8 rounded-lg border border-dashed border-line p-4 text-sm text-mute">Por completar: cursos, certificaciones y formación complementaria.</p>
        </Section>

        <Section id="aprendizaje" title="Aprendizaje continuo" intro="Estas son las áreas donde estoy creciendo ahora.">
          <dl className="divide-y divide-line border-y border-line">
            {learning.map(([t, d]) => (
              <div key={t} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-8"><dt className="font-display font-bold text-lilac">{t}</dt><dd className="text-mute">{d}</dd></div>
            ))}
          </dl>
        </Section>

        <Section id="mas-alla-del-codigo" title="Más allá del código" intro="Fui coach en un gimnasio. No es experiencia de ingeniería, pero me enseñó habilidades que llevo a cada proyecto.">
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {coach.map(([t, d]) => (
              <div key={t}><h3 className="font-display text-lg font-bold">{t}</h3><p className="mt-2 text-mute">{d}</p></div>
            ))}
          </div>
        </Section>

        <Section id="contacto" title="Contacto">
          <p className="max-w-xl font-display text-2xl font-bold">¿Tienes un proyecto, una oportunidad o un reto interesante? Me gustaría conocerlo.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${site.email}`} className={`${btn} bg-violet text-white hover:bg-lilac hover:text-ink`}><Mail size={18} aria-hidden />Enviar correo</a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:border-lilac`}><MessageCircle size={18} aria-hidden />WhatsApp</a>
            {site.linkedin && <a href={site.linkedin} className={`${btn} border border-line hover:border-lilac`}><Linkedin size={18} aria-hidden />LinkedIn</a>}
            {site.github && <a href={site.github} className={`${btn} border border-line hover:border-lilac`}><Github size={18} aria-hidden />GitHub</a>}
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-mute">
            <a href={`mailto:${site.email}`} className="hover:text-soft">{site.email}</a>
            <a href={`tel:+52${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-soft"><Phone size={16} aria-hidden />{site.phone}</a>
          </p>
        </Section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">© {new Date().getFullYear()} Ulises Cortés</footer>
    </>
  );
}
