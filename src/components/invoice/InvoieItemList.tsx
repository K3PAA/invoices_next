"use client";

import { useInvoiceContext } from "@/lib/hooks";

export default function InvoieItemList() {
  const { items } = useInvoiceContext();
  const total = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <section className="mt-4 overflow-hidden rounded-[0.5rem]">
      <div className="bg-popover px-8 pt-8">
        <div className="flex text-end text-muted">
          <p className="flex-[5_1_0%] text-start">Item Name</p>
          <p className="flex-[1_1_0%]">QTY.</p>
          <p className="flex-[2_1_0%]">Price</p>
          <p className="flex-[2_1_0%]">Total</p>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2 py-6">
            {items.map((invoice) => (
              <li key={invoice.id} className="flex text-end">
                <p className="flex-[5_1_0%] text-start">{invoice.name}</p>
                <p className="flex-[1_1_0%]">{invoice.quantity}</p>
                <p className="flex-[2_1_0%]">{invoice.price}</p>
                <p className="flex-[2_1_0%]">{invoice.total}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-dark flex h-20 items-center justify-between px-8 text-white">
        <p>Amount Due</p>
        <p className="text-right text-3xl">&#163;{total.toFixed(2)}</p>
      </div>
    </section>
  );
}
