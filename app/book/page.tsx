import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export default function BookPage() {
  return (
    <div>
      <Header />
      <main className="py-16">
        <Container>
          <div className="max-w-2xl rounded-3xl bg-white p-8 ring-1 ring-zinc-200 shadow-soft">
            <h1 className="text-3xl font-bold">Book a 15-Min Fit Check</h1>
            <p className="mt-3 text-zinc-700">
              Quick call. We’ll confirm you’re a match and map your first 7 days.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={site.bookingUrl} variant="primary">
                Open Booking Link
              </Button>
              <Button href="/" variant="secondary">
                Back to page
              </Button>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Set your booking URL in <code>NEXT_PUBLIC_BOOKING_URL</code>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
