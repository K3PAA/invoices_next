"use client";

import { useInvoicesContext } from "@/lib/hooks";
import InvoiceCard from "./InvoiceCard";
import InvoicesEmpty from "./InvoicesEmpty";

export default function InvoicesDisplay() {
  const { invoices, amount, filter } = useInvoicesContext();

  return (
    <section className="flex-1 overflow-auto">
      {amount > 0 ? (
        <ul className="grid gap-4">
          {invoices
            .filter((invoice) => {
              if (!filter.pending && !filter.paid && !filter.draft) return true;
              else if (invoice.status === "pending" && filter.pending)
                return true;
              else if (invoice.status === "paid" && filter.paid) return true;
              else if (invoice.status === "draft" && filter.draft) return true;

              return false;
            })
            .map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
        </ul>
      ) : (
        <InvoicesEmpty />
      )}
    </section>
  );
}
