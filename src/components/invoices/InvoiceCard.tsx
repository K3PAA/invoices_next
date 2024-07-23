const tailwindDynamicColors =
  "bg-pending bg-draft bg-paid bg-pending/20 bg-draft/20 bg-paid/20 text-pending text-draft text-paid";

import { capitalize, cn } from "@/lib/utils";
import { Invoice } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function InvoiceCard({ invoice }: { invoice: Invoice }) {
  const paymentDue = new Date(invoice.paymentDue).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <li className="rounded-[0.5rem] bg-card">
      <Link
        href={`/invoice/${invoice.id}`}
        className="flex flex-col py-4 pl-8 pr-6 md:flex-row"
      >
        <div className="my-auto flex-[5_1_0%]">
          <div className="flex items-center justify-between md:max-w-[90%] lg:max-w-[80%]">
            <p className="text-xl font-bold">
              <span className="text-muted">#</span>
              {invoice.id}
            </p>
            <p className="hidden text-muted md:block">Due {paymentDue}</p>
            <p className="text-start text-muted">{invoice.clientName}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-[3_1_0%] items-center justify-between md:mt-0 md:justify-end">
          <p className="mr-5 text-start text-xl font-bold md:flex-[0_0_90px] md:text-end md:text-[1rem] lg:mr-10 lg:flex-[0_0_100px] lg:text-xl">
            <span className="block text-sm font-normal text-muted md:hidden">
              Due {paymentDue}
            </span>
            &#163; {invoice.total.toFixed(2)}
          </p>
          <div
            className={cn(
              "flex w-[150px] items-center justify-center gap-2 rounded-[6px] py-3 md:mr-3 md:w-auto md:flex-1",
              `bg-${invoice.status}/20`,
            )}
          >
            <div
              className={cn("h-2 w-2 rounded-full", `bg-${invoice.status}`)}
            ></div>
            <p className={cn("font-bold", `text-${invoice.status}`)}>
              {capitalize(invoice.status)}
            </p>
          </div>
          <Image
            src="/icon-arrow-right.svg"
            width={10}
            height={10}
            alt=""
            className="hidden md:block"
          />
        </div>
      </Link>
    </li>
  );
}
