"use client";

import { Address, Invoice, Item } from "@prisma/client";
import { createContext, useState } from "react";

type FullInvoice = Invoice & { senderAddress: Address } & {
  clientAddress: Address;
} & {
  items: Item[];
};

type SingleInvoiceContextProps = {
  invoice: FullInvoice;
  children: React.ReactNode;
};

type SingleInvoiceContextType = {
  invoice: Invoice;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
};

export const SingleInvoiceContext =
  createContext<SingleInvoiceContextType | null>(null);

export default function SingleInvoiceContextProvider({
  invoice: defaultInvoices,
  children,
}: SingleInvoiceContextProps) {
  const [invoice] = useState(defaultInvoices);
  const [senderAddress] = useState(defaultInvoices.senderAddress);
  const [clientAddress] = useState(defaultInvoices.clientAddress);
  const [items] = useState(defaultInvoices.items);

  return (
    <SingleInvoiceContext.Provider
      value={{ invoice, senderAddress, clientAddress, items }}
    >
      {children}
    </SingleInvoiceContext.Provider>
  );
}
