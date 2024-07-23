import Logo from "@/components/Logo";
import Avatar from "./Avatar";
import dynamic from "next/dynamic";

const DynamicThemeButton = dynamic(() => import("./ThemeButton"), {
  ssr: false,
});

export default function Header() {
  return (
    <header className="flex justify-between bg-[#373B53] md:flex-col md:rounded-r-[1.25rem]">
      <Logo className="rounded-r-[1.25rem]" />

      <div className="flex items-center gap-8 md:flex-col md:justify-center md:gap-0">
        <DynamicThemeButton />
        <div className="h-full w-[1px] bg-[#494E6E] md:mt-8 md:h-[1px] md:w-full"></div>
        <Avatar className="mr-8 md:my-6 md:mr-0" />
      </div>
    </header>
  );
}
