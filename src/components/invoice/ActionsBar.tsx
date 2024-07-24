import StatusBox from "@/components/StatusBox";
import ActionButtons from "./ActionButtons";

export default function ActionsBar() {
  const status = "paid";

  return (
    <section className="mt-8 flex items-center bg-card px-8 py-6 shadow-md md:justify-between">
      <div className="flex flex-1 items-center justify-between gap-5 md:justify-start">
        <p className="text-muted">Status</p>
        <StatusBox status={status} className="max-w-[6.25rem]" />
      </div>

      <ActionButtons className="hidden md:flex" />
    </section>
  );
}
