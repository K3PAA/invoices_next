import StatusBox from "@/components/StatusBox";
import { Button } from "@/components/ui/button";

export default function ActionsBar() {
  const status = "paid";

  return (
    <section className="shadow-[0_10px_10px_-10px_rgba(72, 84, 159, 0.1)] mt-8 flex items-center justify-between bg-card px-8 py-6">
      <div className="flex items-center gap-5">
        <p className="text-muted">Status</p>
        <StatusBox status={status} className="max-w-[6.25rem]" />
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="dark:bg-background dark:text-secondary-700 dark:hover:bg-white/60"
        >
          Edit
        </Button>
        <Button variant="destructive">Delete</Button>
        <Button>Mark as Paid</Button>
      </div>
    </section>
  );
}
