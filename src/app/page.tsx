import FilterDropdown from "@/components/FiletrDropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto my-8 w-full max-w-4xl flex-1 border-2 px-4 lg:my-16">
      <HomeTopSection />
    </main>
  );
}

function HomeTopSection() {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Invoices</h1>
        <p className="text-muted sm:hidden">7 invoices</p>
        <p className="hidden text-muted sm:block">There are 7 total invoices</p>
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
