"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { capitalize } from "@/lib/utils";
import { useState } from "react";

const filterOptions = ["pending", "paid", "draft"] as const;

export default function FilterDropdown() {
  const [checked, setChecked] = useState({
    pending: true,
    paid: false,
    draft: false,
  });

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-bold">
            Filter <span className="ml-1 hidden sm:block">by status</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid min-w-[100px] gap-y-4 p-3 sm:min-w-[200px]">
              {filterOptions.map((option) => (
                <li className="flex items-center space-x-2" key={option}>
                  <Checkbox id={option} defaultChecked={checked[option]} />
                  <Label
                    htmlFor={option}
                    className="w-full cursor-pointer p-4 font-bold"
                    onChange={() =>
                      setChecked((prev) => ({
                        ...prev,
                        [option]: !prev[option],
                      }))
                    }
                  >
                    {capitalize(option)}
                  </Label>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
