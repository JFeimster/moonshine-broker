import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Moonshine Capital. All rights reserved.</p>
          <p className="max-w-xl">
            Disclaimer: We don’t provide legal advice. Licensing and compliance vary by jurisdiction and product.
          </p>
        </div>
      </Container>
    </footer>
  );
}
