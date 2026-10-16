export function Section({
  id,
  children,
}: {
  id: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ scrollMarginTop: "80px" }}>
      {children}
    </section>
  );
}
