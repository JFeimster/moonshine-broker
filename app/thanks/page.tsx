import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ThanksPage() {
  return (
    <div>
      <Header />
      <main className="py-16">
        <Container>
          <div className="max-w-2xl rounded-3xl bg-zinc-50 p-8 ring-1 ring-zinc-200">
            <h1 className="text-3xl font-bold">Starter Kit sent.</h1>
            <p className="mt-3 text-zinc-700">
              Check your inbox. If you don’t see it in 5 minutes, check spam/promotions.
            </p>
            <div className="mt-6">
              <Button href="/book" variant="primary">Book a 15-Min Fit Check</Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
