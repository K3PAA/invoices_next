"use client";

import { useInvoicesContext } from "@/lib/hooks";
import InvoiceCard from "./InvoiceCard";

export default function InvoicesDisplay() {
  const { invoices, filter } = useInvoicesContext();

  return (
    <section className="mt-4 md:mt-12 md:max-h-[70dvh] md:overflow-y-auto">
      <ul className="grid gap-4">
        {invoices
          .filter((invoice) => {
            if (invoice.status === "pending" && filter.pending) return true;
            else if (invoice.status === "paid" && filter.paid) return true;
            else if (invoice.status === "draft" && filter.draft) return true;

            return false;
          })
          .map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
      </ul>
    </section>
  );
}
