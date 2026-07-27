import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LedgerRule from "@/components/LedgerRule";
import Button from "@/components/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { site, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gianni Pascual for remote bookkeeping and U.S. tax preparation support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your books"
            description="Reach out directly, book a call, or send a message using the form below."
          />
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-stone-200">
                <Image
                  src="/images/profile.png"
                  alt={site.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 384px, 90vw"
                />
              </div>

              <dl className="mt-8 flex flex-col gap-5">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-gold-600">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-navy-900 hover:text-gold-600"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-gold-600">
                    LinkedIn
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-navy-900 hover:text-gold-600"
                    >
                      View Profile
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-gold-600">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm text-navy-900">{site.location}</dd>
                </div>
              </dl>

              <Button
                href={site.calendly}
                variant="primary"
                external
                className="mt-8 w-full sm:w-auto"
              >
                Book a Call
              </Button>
            </div>

            <div className="border border-stone-200 bg-white p-8">
              <LedgerRule label="Send a Message" />
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-ink-500">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="border border-stone-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none focus:border-gold-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-ink-500">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border border-stone-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="firm" className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Firm / Company (optional)
                  </label>
                  <input
                    id="firm"
                    name="firm"
                    type="text"
                    className="border border-stone-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="border border-stone-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center justify-center bg-navy-900 px-7 py-3 text-sm font-medium text-paper-50 transition-colors hover:bg-navy-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <FaqAccordion faqs={faqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
