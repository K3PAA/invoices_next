import Image from "next/image";

export default function InvoicesEmpty() {
  return (
    <div className="mt-14 flex flex-col items-center text-center">
      <Image
        src="/illustration-empty.svg"
        alt="svg illustration"
        width={250}
        height={200}
      />

      <h2 className="mt-16 text-3xl font-bold text-foreground">
        There is nothing here
      </h2>
      <p className="mt-6 max-w-[28ch] text-lg text-muted">
        Create an invoice by clicking the{" "}
        <span className="text-nowrap font-bold">New Invoice</span> button and
        get started
      </p>
    </div>
  );
}
