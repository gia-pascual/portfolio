import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Button from "@/components/Button";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accounts Receivable Management — Case Study",
  description:
    "The full customer billing cycle in QuickBooks Online: customer setup, invoicing, payment application, and A/R aging monitoring.",
};

const item = portfolioItems.find((p) => p.slug === "accounts-receivable")!;

const objectives = [
  "Demonstrate the customer invoicing workflow",
  "Record customer payments accurately",
  "Track outstanding customer balances",
  "Monitor accounts receivable through aging reports",
];

const sections = [
  {
    title: "Customer Management & Setup",
    body: "Built out a customer database with complete contact and billing information, the foundation for accurate invoicing and reliable Accounts Receivable records.",
  },
  {
    title: "Service Item Configuration",
    body: "Configured service items for the consulting services provided, so revenue is recorded consistently under the appropriate income account on every invoice.",
  },
  {
    title: "Invoicing & Payment Application",
    body: "Created invoices linked to customer records, then recorded and applied customer payments against outstanding balances using the Receive Payment workflow.",
  },
  {
    title: "Accounts Receivable Aging Monitoring",
    body: "Reviewed the A/R Aging Detail report, with customer balances grouped into Current, 1–30, 31–60, 61–90, and Over 90 day periods to flag accounts needing follow-up.",
  },
];

export default function AccountsReceivableCaseStudy() {
  return (
    <>
      <CaseStudyHeader
        category={item.category}
        title="Bright Path Consulting LLC"
        meta="Sample Company · Accrual Basis · Reporting Period Jan–Dec 2025"
      />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-ink-700">
            This case study demonstrates the Accounts Receivable (A/R) management process using
            Bright Path Consulting LLC, a sample company built in QuickBooks Online for
            portfolio purposes. It covers the complete customer invoicing workflow — from
            customer setup and invoice creation to payment recording and monitoring outstanding
            receivables through financial reports.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink-700">
            Effective A/R management plays a vital role in maintaining healthy cash flow and the
            accuracy of financial records. This case study highlights using QuickBooks Online to
            manage customer information, issue invoices, record customer payments, and monitor
            receivables using the Accounts Receivable Aging Report.
          </p>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="font-display text-xl text-navy-900">Project Objectives</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2 text-sm text-ink-700">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col gap-10 border-t border-stone-200 pt-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl text-navy-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-stone-200 pt-8">
            <h2 className="font-display text-xl text-navy-900">Business Value</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Organized customer records and a disciplined invoicing and aging-review routine
              help a business improve collection efforts, reduce overdue accounts, and maintain
              reliable information for cash flow decisions — while also strengthening the
              accuracy of the underlying financial statements.
            </p>
          </div>

          <p className="mt-12 border-t border-stone-200 pt-8 text-sm leading-relaxed text-ink-500">
            All company information and financial data shown are fictional and created for
            training and portfolio demonstration purposes only.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={item.documentHref ?? "/portfolio"} variant="primary" external>
              View Full Case Study (PDF)
            </Button>
            <Button href="/portfolio" variant="secondary">
              Back to Portfolio
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
