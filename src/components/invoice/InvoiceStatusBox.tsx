"use client";

import { useInvoiceContext } from "@/lib/hooks";
import StatusBox from "../StatusBox";

export default function InvoiceStatusBox() {
  const { invoice } = useInvoiceContext();
  return <StatusBox status={invoice.status} className="max-w-[6.25rem]" />;
}
