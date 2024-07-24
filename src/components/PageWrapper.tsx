import { cn } from "@/lib/utils";
import React from "react";

type PageWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col px-4 py-4 md:max-h-[100dvh] lg:py-8",
        className,
      )}
    >
      {children}
    </main>
  );
}
