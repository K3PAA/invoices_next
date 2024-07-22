import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block overflow-hidden bg-primary-700 p-8 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-1/2 after:rounded-tl-[1.25rem] after:bg-primary-400 after:content-['']",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="logo"
        className="relative z-[1000]"
      />
    </Link>
  );
}
