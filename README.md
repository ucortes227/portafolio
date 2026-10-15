# Portafolio de Ulises Cortés

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Lucide.

## Ejecutar
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verifica compilación y tipos antes de publicar
```

## Publicar en Vercel
Sube la carpeta a GitHub, impórtala en vercel.com y despliega. No requiere variables de entorno.
Después cambia `site.url` en `lib/data.ts` por tu dominio real (afecta metadatos y Open Graph).

## Datos por completar (todo está en `lib/data.ts`)
- `site.github` y `site.linkedin` (los botones aparecen solos al agregarlos)
- Niveles y tecnologías reales en `stack` (los elementos `pending` son espacios por llenar)
- Proyectos reales en `projects` (quita `isDemo`; agrega `repo`, `demo` e `image`)
- Cursos y certificaciones (sección Formación en `app/page.tsx`)
- `site.openToWork` si cambia tu disponibilidad
