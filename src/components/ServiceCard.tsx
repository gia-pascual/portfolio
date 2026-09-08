import { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex h-full flex-col border border-stone-200 bg-white p-7 transition-colors hover:border-gold-400/60">
      <span className="font-mono text-xs tabular text-gold-600">{service.code}</span>
      <h3 className="mt-3 font-display text-xl text-navy-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.summary}</p>
      <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-stone-100 pt-5">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gold-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
