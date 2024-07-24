import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ActionButtonsProps = {
  className?: string;
};

export default function ActionButtons({ className }: ActionButtonsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button
        variant="secondary"
        className="dark:bg-background dark:text-secondary-700 dark:hover:bg-white/60"
      >
        Edit
      </Button>
      <Button variant="destructive">Delete</Button>
      <Button>Mark as Paid</Button>
    </div>
  );
}
