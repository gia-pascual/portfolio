import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications in QuickBooks Online, Xero, U.S. bookkeeping, and U.S. tax preparation.",
};

export default function CertificationsPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certificates on file"
          description="Formal training and certification completed to date. New certifications are added here as they're earned."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} cert={cert} />
          ))}
        </div>
      </Container>
    </section>
  );
}
