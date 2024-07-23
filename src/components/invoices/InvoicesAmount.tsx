"use client";
import { useInvoicesContext } from "@/lib/hooks";

export default function InvoicesAmount() {
  const { amount } = useInvoicesContext();

  return (
    <>
      <p className="text-muted sm:hidden">{amount} invoices</p>
      <p className="hidden text-muted sm:block">
        There are {amount} total invoices
      </p>
    </>
  );
}
