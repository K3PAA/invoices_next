"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

const MoonIcon = () => {
  return <Image src="/icon-moon.svg" width={20} height={20} alt="moon icon" />;
};

const SunIcon = () => {
  return <Image src="/icon-sun.svg" width={20} height={20} alt="sun icon" />;
};

export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    if (theme === "system") {
      return setTheme(systemTheme === "dark" ? "light" : "dark");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleChangeTheme}>
      {theme === "system" ? (
        systemTheme === "dark" ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )
      ) : theme === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </Button>
  );
}
