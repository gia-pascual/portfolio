import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import LedgerRule from "@/components/LedgerRule";
import PortfolioCard from "@/components/PortfolioCard";
import PortfolioTabs from "@/components/PortfolioTabs";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bookkeeping and U.S. tax preparation case studies, including QuickBooks Online, Accounts Receivable and Accounts Payable management, and mock returns for Form 1040, 1065, and 1120-S.",
};

export default function PortfolioPage() {
  const bookkeeping = portfolioItems.filter((item) => item.group === "Bookkeeping");
  const tax = portfolioItems.filter((item) => item.group === "Tax Preparation");

  return (
    <>
      <section className="border-b border-stone-200 bg-stone-100/60 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Case studies"
            description="Bookkeeping and U.S. tax preparation work are kept in two separate sections below, since they reflect different stages of training and different kinds of work. Each case study is built to be replaced or expanded as new work is completed."
          />
        </Container>
      </section>

      <PortfolioTabs />

      {/* BOOKKEEPING SECTION */}
      <section id="bookkeeping" className="scroll-mt-32 py-20 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div>
              <LedgerRule label="Section 01" />
              <h2 className="font-display text-display-lg text-navy-900">Bookkeeping</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500">
                Full bookkeeping-cycle work in QuickBooks Online — company setup, invoicing and
                billing, vendor bills and payments, reconciliation, and financial reporting.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-gold-600">
              {bookkeeping.length} case {bookkeeping.length === 1 ? "study" : "studies"}
            </span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookkeeping.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* TAX PREPARATION SECTION */}
      <section id="tax-preparation" className="scroll-mt-32 border-t border-stone-200 bg-navy-950 py-20 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper-50/10 pb-8">
            <div>
              <div className="ledger-rule mb-5">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-300 whitespace-nowrap">
                  Section 02
                </span>
              </div>
              <h2 className="font-display text-display-lg text-paper-50">US Tax Preparation</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper-50/65">
                Mock returns completed during U.S. tax preparation training, organized by form.
                Video walkthroughs of these returns are in progress and will be added here once
                complete.
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-gold-300">
              {tax.length} case studies
            </span>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tax.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
