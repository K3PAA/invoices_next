"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DeleteButton from "./DeleteButton";
import { useInvoiceContext } from "@/lib/hooks";
import EditButton from "./EditButton";
import { toast } from "sonner";

type ActionButtonsProps = {
  className?: string;
};

export default function ActionButtons({ className }: ActionButtonsProps) {
  const { invoice } = useInvoiceContext();

  const handleMarkAsPaid = () => {
    toast.success("Marking invoice as paid...");
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <EditButton />
      <DeleteButton />
      {invoice.status === "pending" && (
        <Button onClick={handleMarkAsPaid}>Mark as Paid</Button>
      )}
    </div>
  );
}
