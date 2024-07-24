import { useContext } from "react";

import { SingleInvoiceContext } from "@/context/SingleInvoiceContext";
import { InvoicesContext } from "@/context/InvoicesContext";

export const useInvoicesContext = () => {
  const context = useContext(InvoicesContext);

  if (!context) {
    throw new Error("useInvoicesContext must be used within InvoicesContext");
  }

  return context;
};

export const useInvoiceContext = () => {
  const context = useContext(SingleInvoiceContext);

  if (!context) {
    throw new Error("useInvoiceContext must be used within InvoiceContext");
  }

  return context;
};
