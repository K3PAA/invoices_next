import { Button } from "@/components/ui/button";
import FilterDropdown from "@/components/FilterDropdown";
import Image from "next/image";
import InvoicesAmount from "./InvoicesAmount";

export default function InvoicesHeader() {
  return (
    <header className="mt-8 flex justify-between lg:mt-12">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Invoices</h1>
        <InvoicesAmount />
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
    </header>
  );
}
