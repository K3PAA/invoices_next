import Image from "next/image";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/" className="inline-flex items-center gap-6 p-2 text-lg">
      <Image src="/icon-arrow-left.svg" alt="arrow left" width={8} height={8} />
      <span className="mt-1 font-bold"> Go Back</span>
    </Link>
  );
}
