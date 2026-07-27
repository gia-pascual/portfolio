import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import LedgerRule from "@/components/LedgerRule";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import { services, portfolioItems, certifications, site } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO — styled as a statement header: ledger-lined background, */}
      {/* mono meta line standing in for a statement's reference row. */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-navy-950">
        <div className="absolute inset-0 bg-ledger-lines opacity-40" aria-hidden="true" />
        <Container className="relative py-20 md:py-28">
          <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="ledger-rule mb-6 max-w-md">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300 whitespace-nowrap">
                  Statement of Services · {new Date().getFullYear()}
                </span>
              </div>
              <h1 className="font-display text-4xl leading-[1.1] text-paper-50 md:text-6xl">
                {site.name}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-wide text-gold-300 md:text-base">
                {site.title}
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-50/75">
                {site.headline}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button href={site.resumeHref} variant="primary" external className="!bg-gold-500 !border-gold-500 !text-navy-950 hover:!bg-gold-400">
                  Download CV
                </Button>
                <Button href="/portfolio" variant="secondary" className="!border-paper-50/30 !text-paper-50 hover:!bg-paper-50/10 hover:!border-paper-50">
                  View Portfolio
                </Button>
                <Button href={site.calendly} variant="ghost" external className="!border-paper-50/30 !text-gold-300 hover:!bg-paper-50/10">
                  Book a Call
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <div className="absolute -inset-4 border border-gold-400/25" aria-hidden="true" />
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper-50/10 bg-navy-900">
                <Image
                  src="/images/profile.png"
                  alt={`${site.name}, ${site.title}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 384px, 320px"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              eyebrow="About"
              title="A process-driven approach to remote accounting support"
              description="A Management Accounting graduate with hands-on experience in accounting support, QuickBooks Online, and Microsoft Dynamics 365 Business Central — currently completing structured training in US bookkeeping and tax preparation."
            />
            <div className="flex flex-col justify-between gap-6">
              <p className="text-base leading-relaxed text-ink-500">
                Every engagement is approached the same way: organize the records first,
                document the workflow, then support accurate reporting. That discipline comes
                from corporate accounting experience and continues through ongoing US
                bookkeeping and tax preparation training.
              </p>
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600"
              >
                Read the full profile <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-y border-stone-200 bg-stone-100/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Support built around the bookkeeping cycle"
            description="From setting up the books to organizing the data behind a tax return, each service is scoped as support work under appropriate professional guidance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.code} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Portfolio"
              title="Case studies from training and practical work"
            />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600"
            >
              View all case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section className="border-y border-stone-200 bg-navy-950 py-16">
        <Container>
          <LedgerRule label="Certifications on file" />
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-baseline gap-3">
                <span className="font-mono text-xs tabular text-gold-300/70">{cert.year}</span>
                <span className="text-sm text-paper-50/80">{cert.title}</span>
              </div>
            ))}
          </div>
          <Link
            href="/certifications"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-400"
          >
            View certificates <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <Container className="text-center">
          <h2 className="font-display text-3xl text-navy-900 md:text-4xl">
            Looking for reliable remote bookkeeping support?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-500">
            Let&apos;s talk about your firm&apos;s bookkeeping or tax data organization needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={site.calendly} variant="primary" external>
              Book a Call
            </Button>
            <Button href="/contact" variant="secondary">
              Send a Message
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
