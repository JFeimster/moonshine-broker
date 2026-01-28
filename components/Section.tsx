import Container from "@/components/Container";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-18">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold tracking-wide text-zinc-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
