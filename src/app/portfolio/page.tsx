import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LedgerRule from "@/components/LedgerRule";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioItems, PortfolioGroup } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bookkeeping and U.S. tax preparation case studies, including QuickBooks Online setup and mock returns for Form 1040, 1065, and 1120-S.",
};

const groups: { key: PortfolioGroup; blurb: string }[] = [
  {
    key: "Bookkeeping",
    blurb:
      "Full bookkeeping-cycle work in QuickBooks Online — setup, reconciliation, and reporting.",
  },
  {
    key: "Tax Preparation",
    blurb:
      "Mock returns completed during U.S. tax preparation training, organized by form.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies"
          description="Bookkeeping and tax preparation are shown separately below to keep the two kinds of work easy to tell apart. Each entry is built to be replaced or expanded as new work is completed."
        />

        <div className="mt-16 flex flex-col gap-20">
          {groups.map((group) => {
            const items = portfolioItems.filter((item) => item.group === group.key);
            if (items.length === 0) return null;
            return (
              <div key={group.key}>
                <LedgerRule label={group.key} />
                <p className="max-w-xl text-sm text-ink-500">{group.blurb}</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <PortfolioCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
