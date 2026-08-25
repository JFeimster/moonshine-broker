import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export type AgencySection = {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: string[];
};

export default function AgencyPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: AgencySection[];
}) {
  return (
    <>
      <Header />
      <main>
        <section className="border-b-2 border-black py-16 sm:py-24">
          <Container>
            <div className="max-w-5xl">
              <div className="command-label">{eyebrow}</div>
              <h1 className="display-type mt-5 text-6xl sm:text-8xl lg:text-9xl">{title}</h1>
              <p className="mt-8 max-w-3xl text-lg font-medium leading-8 sm:text-xl">{intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.applyUrl}>Start Your Funding Agency</Button>
                <Button href="/" variant="secondary">Back to Overview</Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-2">
              {sections.map((section, index) => (
                <article key={section.title} className={index % 3 === 0 ? "brutal-card-dark p-7 sm:p-9" : "brutal-card p-7 sm:p-9"}>
                  <div className="command-label opacity-70">{section.eyebrow || String(index + 1).padStart(2, "0")}</div>
                  <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">{section.title}</h2>
                  {section.body && <p className="mt-4 text-base leading-7 opacity-90">{section.body}</p>}
                  {section.items && (
                    <ul className="mt-6 grid gap-3 text-sm font-semibold">
                      {section.items.map((item) => (
                        <li key={item} className="border-t border-current/30 pt-3">→ {item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t-2 border-black bg-[#f5d90a] py-14">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="command-label">Next move</div>
                <h2 className="display-type mt-3 max-w-4xl text-5xl sm:text-7xl">Stop researching the business. Start building it.</h2>
              </div>
              <Button href={site.applyUrl} variant="secondary">Apply Now</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
