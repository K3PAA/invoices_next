import { InvoicesContext } from "@/context/InvoicesContext";
import { useContext } from "react";

export const useInvoicesContext = () => {
  const context = useContext(InvoicesContext);

  if (!context) {
    throw new Error("useInvoicesContext must be used within InvoicesContext");
  }

  return context;
};
