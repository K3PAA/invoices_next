import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ThemeButton() {
  return (
    <Button variant="ghost" size="icon">
      <Image src="/icon-moon.svg" width={20} height={20} alt="moon" />
    </Button>
  );
}
