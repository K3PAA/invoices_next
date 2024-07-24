"use client";

import { useInvoiceContext } from "@/lib/hooks";
import InvoieItemList from "./InvoieItemList";
import { Address } from "@prisma/client";

export default function ContentBlock() {
  const { invoice, senderAddress, clientAddress } = useInvoiceContext();

  const paymentDue = new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const invoiceDate = new Date(invoice.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="mt-6 flex flex-1 flex-col justify-between rounded-[0.5rem] border-white bg-card p-4 shadow-md md:p-12">
      <section className="flex flex-col justify-between gap-4 md:flex-row">
        <div className="">
          <p className="text-xl font-bold">
            <span className="text-muted">#</span>
            {invoice.id}
          </p>

          <h3 className="text-muted">{invoice.description}</h3>
        </div>

        <InvoiceAdress adress={senderAddress} />
      </section>

      <section className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <InvoiceTextWithValue text="Invoice Date" value={invoiceDate} />
          <InvoiceTextWithValue text="Payment Due" value={paymentDue} />
        </div>
        <div>
          <InvoiceTextWithValue text="Bill to" value={invoice.clientName} />
          <InvoiceAdress adress={clientAddress} />
        </div>
        <div>
          <InvoiceTextWithValue text="Sent to" value={invoice.clientEmail} />
        </div>
      </section>

      <InvoieItemList />
    </section>
  );
}

type InvoiceAddressProps = {
  adress: Address;
};

function InvoiceAdress({ adress }: InvoiceAddressProps) {
  return (
    <div className="text-sm text-muted">
      <p>{adress.street}</p>
      <p>{adress.city}</p>
      <p>{adress.postCode}</p>
      <p>{adress.country}</p>
    </div>
  );
}

type InvoiceTextWithValueProps = {
  text: string;
  value: string;
};

function InvoiceTextWithValue({ text, value }: InvoiceTextWithValueProps) {
  return (
    <div className="">
      <p className="text-sm text-muted">{text}</p>
      <p className="font-bold text-foreground">{value}</p>
    </div>
  );
}
