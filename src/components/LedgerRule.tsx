export default function LedgerRule({ label }: { label: string }) {
  return (
    <div className="ledger-rule mb-5">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
