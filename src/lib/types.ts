import { filterOptions } from "./constants";

export type FilterOptions = {
  [key in (typeof filterOptions)[number]]: boolean;
};
