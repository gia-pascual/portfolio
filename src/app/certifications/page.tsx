import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LedgerRule from "@/components/LedgerRule";
import CertificationCard from "@/components/CertificationCard";
import { certifications, professionalCredentials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications in QuickBooks Online, Xero, U.S. bookkeeping, and U.S. tax preparation, plus Philippine professional credentials.",
};

export default function CertificationsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates on file"
          description="Software and workflow certifications directly tied to the services offered, plus professional credentials earned separately. New certifications are added here as they're earned."
        />

        <div className="mt-14">
          <LedgerRule label="Software & Workflow Certifications" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} cert={cert} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-14">
          <LedgerRule label="Professional Credentials" />
          <p className="mb-8 max-w-xl text-sm leading-relaxed text-ink-500">
            Government and national vocational credentials earned in the Philippines —
            demonstrating a baseline of professional competence beyond software-specific
            training.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {professionalCredentials.map((cert) => (
              <CertificationCard key={cert.title} cert={cert} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
