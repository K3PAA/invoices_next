import { capitalize, cn } from "@/lib/utils";
import { InvoiceStatus } from "@prisma/client";

type StatusBoxProps = {
  className?: string;
  status: InvoiceStatus;
};

export default function StatusBox({ status, className }: StatusBoxProps) {
  return (
    <div
      className={cn(
        "flex w-[150px] items-center justify-center gap-2 rounded-[6px] py-3",
        `bg-${status}/20`,
        className,
      )}
    >
      <div className={cn("h-2 w-2 rounded-full", `bg-${status}`)}></div>
      <p className={cn("font-bold", `text-${status}`)}>{capitalize(status)}</p>
    </div>
  );
}
