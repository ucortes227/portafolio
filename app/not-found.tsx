import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-6xl font-extrabold text-lilac">404</h1>
        <p className="mt-4 text-mute">Esta página no existe o cambió de lugar.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-violet px-6 py-3 font-medium text-white hover:bg-lilac hover:text-ink">Volver al inicio</Link>
      </div>
    </main>
  );
}
