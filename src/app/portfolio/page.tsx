import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bookkeeping and U.S. tax preparation case studies, including QuickBooks Online setup and mock returns for Form 1040, 1065, and 1120-S.",
};

export default function PortfolioPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies"
          description="Work completed during structured bookkeeping and tax preparation training, along with practical case study material. Each entry is built to be replaced or expanded as new work is completed."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
