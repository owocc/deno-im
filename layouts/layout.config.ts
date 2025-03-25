import { DefaultLayout } from "./default/index.tsx";
import { SimpleLayout } from "./simple/index.tsx";

export const layouts = {
  default: DefaultLayout,
  simple: SimpleLayout,
};
export const layoutNames = Object.keys(layouts);
export type LayoutNames = keyof typeof layouts;
