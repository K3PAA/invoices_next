import { cn } from "@/lib/utils";
import React from "react";

type PageWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className={cn("mx-auto my-8 w-full max-w-4xl flex-1 px-4 lg:my-10")}>
      {children}
    </main>
  );
}
