import React from "react";
import { Button } from "@/components/ui/button";

export default function EditButton() {
  return (
    <Button
      variant="secondary"
      className="dark:bg-background dark:text-secondary-700 dark:hover:bg-white/60"
    >
      Edit
    </Button>
  );
}
