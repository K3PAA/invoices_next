import { cn } from "@/lib/utils";
import Image from "next/image";

type AvatarProps = {
  className?: string;
};

export default function Avatar({ className }: AvatarProps) {
  return (
    <div className={cn(className)}>
      <Image
        src="/image-avatar.jpg"
        width={40}
        height={40}
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
}
