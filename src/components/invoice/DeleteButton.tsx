"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useInvoiceContext } from "@/lib/hooks";

import { toast } from "sonner";

export default function DeleteButton() {
  const { invoice } = useInvoiceContext();

  const handleDelete = () => {
    toast.info("Removing invoice...");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-bold">
            Confirm Deletion
          </AlertDialogTitle>
          <AlertDialogDescription className="text-md mt-2 text-muted">
            Are you sure you want to delete invoice #{invoice.id} This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-secondary-700 text-secondary-foreground hover:bg-secondary-400">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive-700 text-destructive-foreground hover:bg-destructive-400"
            onClick={handleDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
