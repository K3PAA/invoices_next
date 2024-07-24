"use client";

import { FilterOptions } from "@/lib/types";
import { Invoice } from "@prisma/client";
import { createContext, useState } from "react";

type InvoicesContextProps = {
  invoices: Invoice[];
  children: React.ReactNode;
};

type InvoicesContextType = {
  invoices: Invoice[];
  amount: number;
  filter: FilterOptions;
  handleFilterChange: (option: keyof FilterOptions) => void;
};

export const InvoicesContext = createContext<InvoicesContextType | null>(null);

export default function InvoicesContextProvider({
  invoices: defaultInvoices,
  children,
}: InvoicesContextProps) {
  const [invoices] = useState(defaultInvoices);
  const amount = invoices.length;

  const [filter, setFilter] = useState<FilterOptions>({
    pending: false,
    paid: false,
    draft: false,
  });

  const handleFilterChange = (option: keyof FilterOptions) => {
    console.log(option);

    setFilter((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <InvoicesContext.Provider
      value={{ invoices, filter, amount, handleFilterChange }}
    >
      {children}
    </InvoicesContext.Provider>
  );
}
