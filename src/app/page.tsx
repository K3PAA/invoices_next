import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center">
      <Button variant="destructive">Delete</Button>
      <Button variant="default">Mark as Paid</Button>
      <Button variant="secondary">+ add new item </Button>
      <Button variant="accent">Save as draft</Button>
    </main>
  );
}
