import ActionButtons from "./ActionButtons";
import InvoiceStatusBox from "./InvoiceStatusBox";

export default function ActionsBar() {
  return (
    <section className="mt-8 flex items-center bg-card px-8 py-6 shadow-md md:justify-between">
      <div className="flex flex-1 items-center justify-between gap-5 md:justify-start">
        <p className="text-muted">Status</p>
        <InvoiceStatusBox />
      </div>

      <ActionButtons className="hidden md:flex" />
    </section>
  );
}
