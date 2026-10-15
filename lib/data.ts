// Todo el contenido editable del portafolio vive aquí.
export const site = {
  name: "Ulises Cortés",
  url: "https://tu-dominio.vercel.app", // CONFIRMAR: reemplaza al publicar
  email: "ucortes227@gmail.com",
  phone: "272 110 3734",
  whatsapp: "522721103734", // +52 + 10 dígitos
  github: null as string | null, // ej. "https://github.com/tu-usuario"
  linkedin: null as string | null, // ej. "https://www.linkedin.com/in/tu-perfil"
  openToWork: true, // CONFIRMAR: ponlo en false si cambia tu disponibilidad
};

export type Level = "Utilizo" | "En desarrollo" | "Aprendiendo";
export type Skill = { name: string; level?: Level; pending?: boolean };

// CONFIRMAR: ajusta cada nivel a tu realidad. Los elementos "pending" son espacios por completar.
export const stack: { title: string; items: Skill[] }[] = [
  { title: "Lenguajes y programación", items: [{ name: "Python", level: "Utilizo" }, { name: "JavaScript", level: "Utilizo" }] },
  { title: "Desarrollo web", items: [{ name: "Next.js", level: "Utilizo" }, { name: "Por completar: React, TypeScript, Tailwind…", pending: true }] },
  { title: "Ciberseguridad", items: [{ name: "Fundamentos", level: "Aprendiendo" }, { name: "Por completar: herramientas y plataformas", pending: true }] },
  { title: "Herramientas de desarrollo", items: [{ name: "Por completar: Git, GitHub, terminal, editor…", pending: true }] },
  { title: "Idiomas", items: [{ name: "Español" }, { name: "Inglés (A2)", level: "En desarrollo" }] },
];

export type Project = {
  name: string; problem: string; features: string[]; stack: string[]; learned: string;
  repo?: string; demo?: string; image?: string; isDemo?: boolean;
};

// Reemplaza estos ejemplos por tus proyectos reales y quita `isDemo`.
export const projects: Project[] = [
  {
    name: "Proyecto de ejemplo 1", isDemo: true,
    problem: "Describe en una frase el problema real que resuelve tu proyecto.",
    features: ["Funcionalidad principal", "Segunda funcionalidad", "Tercera funcionalidad"],
    stack: ["Next.js", "Python"],
    learned: "Cuenta qué aprendiste y qué harías distinto la próxima vez.",
  },
  {
    name: "Proyecto de ejemplo 2", isDemo: true,
    problem: "Un segundo proyecto, idealmente con un enfoque distinto, como seguridad o backend.",
    features: ["Objetivo claro", "Resultado medible si lo tienes"],
    stack: ["Python"],
    learned: "Decisiones técnicas, errores corregidos y lo que descubriste al depurar.",
  },
];

export const learning = [
  ["Python", "Profundizar en lógica, estructuras de datos y construcción de soluciones más completas."],
  ["Next.js", "Construir interfaces modernas y aplicaciones web con buenas prácticas."],
  ["Ciberseguridad", "Estudiar fundamentos y practicar de forma ética y controlada."],
  ["Inglés", "Mejorar poco a poco mi comprensión y comunicación a partir del nivel A2."],
  ["Proyectos prácticos", "Aprender haciendo: cada proyecto nuevo es una oportunidad para mejorar."],
];

export const coach = [
  ["Comunicación y escucha", "Aprendí a entender lo que una persona realmente necesita. Eso ayuda a conversar con clientes y a aclarar requisitos antes de escribir código."],
  ["Paciencia para enseñar", "Explicar un movimiento de varias formas me enseñó a explicar ideas técnicas de manera clara a compañeros."],
  ["Disciplina y seguimiento de objetivos", "Acompañar procesos de meses requiere constancia, algo igual de necesario en un proyecto de software."],
  ["Actitud ante los retos", "Mantener la motivación propia y la de otros cuando algo no sale me ayuda a trabajar bien bajo presión."],
];
