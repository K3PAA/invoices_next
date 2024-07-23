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
import { useInvoicesContext } from "@/lib/hooks";

import { filterOptions } from "@/lib/constants";

export default function FilterDropdown() {
  const { filter, handleFilterChange } = useInvoicesContext();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl font-bold">
            Filter <span className="ml-1 hidden sm:block">by status</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid min-w-[100px] gap-y-4 p-3 sm:min-w-[200px]">
              {filterOptions.map((option) => (
                <li className="flex items-center space-x-2" key={option}>
                  <Checkbox id={option} defaultChecked={filter[option]} />
                  <Label
                    htmlFor={option}
                    className="w-full cursor-pointer p-4 text-[1.125rem] font-bold"
                    onChange={() => {
                      handleFilterChange(option);
                    }}
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
