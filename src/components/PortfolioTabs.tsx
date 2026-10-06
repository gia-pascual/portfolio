export default function PortfolioTabs() {
  const tabs = [
    { label: "Bookkeeping", href: "#bookkeeping" },
    { label: "US Tax Preparation", href: "#tax-preparation" },
  ];

  return (
    <div className="sticky top-[73px] z-30 -mx-6 border-b border-stone-200 bg-paper-50/95 px-6 backdrop-blur md:-mx-10 md:px-10">
      <nav className="mx-auto flex w-full max-w-content gap-8" aria-label="Jump to portfolio section">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="py-4 font-mono text-xs uppercase tracking-[0.15em] text-ink-500 transition-colors hover:text-navy-900"
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
