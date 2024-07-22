import Logo from "@/components/Logo";
import Avatar from "./Avatar";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="flex justify-between bg-draft md:flex-col md:rounded-r-[1.25rem]">
      <Logo className="rounded-r-[1.25rem]" />

      <div className="flex items-center gap-8 md:flex-col md:justify-center md:gap-0">
        <ThemeButton />
        <div className="h-full w-[1px] bg-[#494E6E] md:mt-8 md:h-[1px] md:w-full"></div>
        <Avatar className="md:my-6" />
      </div>
    </header>
  );
}
