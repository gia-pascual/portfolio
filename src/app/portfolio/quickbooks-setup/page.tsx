import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import Button from "@/components/Button";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "QuickBooks Online Company Setup — Case Study",
  description:
    "A complete QuickBooks Online bookkeeping cycle for a sample consulting company: setup, Chart of Accounts, reconciliation, and financial reporting.",
};

const item = portfolioItems.find((p) => p.slug === "quickbooks-setup")!;

const objectives = [
  "Configure a QuickBooks Online company file",
  "Establish a structured Chart of Accounts",
  "Manage customer and vendor records",
  "Record sales, expenses, and bill payments",
  "Process the complete sales and expense workflows",
  "Perform monthly bank reconciliation",
  "Generate key financial reports",
  "Demonstrate a complete bookkeeping cycle using QuickBooks Online",
];

const sections = [
  {
    title: "Company Configuration",
    body: "Set up company information — name, address, contact details, and industry classification — establishing the foundation for consistent invoices, estimates, and reports.",
  },
  {
    title: "Chart of Accounts",
    body: "Organized accounts by type — Bank, Accounts Receivable, Fixed Assets, Accounts Payable, and Equity — so transactions are classified consistently from the start.",
  },
  {
    title: "Customers, Vendors & Invoicing",
    body: "Built out customer and vendor contact records, then processed the full sales workflow from invoice creation through payment receipt, and the expense workflow from vendor bill through payment.",
  },
  {
    title: "Banking & Reconciliation",
    body: "Managed the banking center and performed a full-year bank reconciliation, confirming a zero difference between the books and the bank statement.",
  },
  {
    title: "Financial Reporting",
    body: "Prepared the Profit & Loss Report, Balance Sheet, and Accounts Receivable / Accounts Payable Aging reports, then reviewed the results for accuracy.",
  },
];

export default function QuickBooksSetupCaseStudy() {
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
            This case study demonstrates a complete bookkeeping workflow using QuickBooks
            Online through a training sample company, Bright Path Consulting LLC. While the
            company and financial data are part of a training exercise, the bookkeeping
            processes shown — company setup, customer and vendor management, sales and expense
            recording, bank reconciliation, and financial reporting — reflect standard practices
            used in service-based businesses.
          </p>

          <div className="mt-10 border-t border-stone-200 pt-8">
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
            <h2 className="font-display text-xl text-navy-900">Deliverables Every Month</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              A monthly reporting package: Profit &amp; Loss, Balance Sheet, Bank Reconciliation,
              Accounts Receivable Aging, Accounts Payable Aging, General Ledger Review, and
              bookkeeping notes and recommendations.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-stone-200 pt-8">
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
