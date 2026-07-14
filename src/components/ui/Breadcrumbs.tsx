import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-2xl border border-white/70 bg-white px-3.5 py-2.5 text-sm shadow-lift">
        <li>
          <Link
            href="/"
            className="rounded-lg px-1.5 py-0.5 font-medium text-navy-700 transition-colors hover:bg-accent/10 hover:text-accent"
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0 text-accent"
                aria-hidden
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-lg px-1.5 py-0.5 font-medium text-navy-700 transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="rounded-lg px-1.5 py-0.5 font-semibold text-navy-950"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
