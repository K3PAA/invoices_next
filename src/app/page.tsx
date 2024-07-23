import { getInvoicesByUser, getUser } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import FilterDropdown from "@/components/FiletrDropdown";
import InvoicesDisplay from "@/components/InvoicesDisplay";
import Image from "next/image";

export default async function Home() {
  const user = await getUser("test@gamil.com");
  const userInvoices = await getInvoicesByUser(user.id);

  return (
    <main className="mx-auto my-8 w-full max-w-4xl flex-1 px-4 lg:my-12">
      <HomeTopSection invoicesAmount={userInvoices.length} />

      <InvoicesDisplay invoices={userInvoices} />
    </main>
  );
}

type HomeTopProps = {
  invoicesAmount: number;
};

function HomeTopSection({ invoicesAmount }: HomeTopProps) {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Invoices</h1>
        <p className="text-muted sm:hidden">{invoicesAmount} invoices</p>
        <p className="hidden text-muted sm:block">
          There are {invoicesAmount} total invoices
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-8">
        <FilterDropdown />

        <Button className="p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <Image
              src="icon-plus.svg"
              width={10}
              height={10}
              alt="plus button"
              className=""
            />
          </div>
          <span className="p-4">
            New <span className="hidden sm:inline">Invoice</span>
          </span>
        </Button>
      </div>
    </section>
  );
}
