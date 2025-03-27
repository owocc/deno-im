import { IS_BROWSER } from "$fresh/runtime.ts";
import { createElement } from "preact";
import { Signal } from "@preact/signals";
import { LayoutNames, layouts } from "./layout.config.ts";
import { LayoutProps } from "./__shared.ts";

export const LayoutRender = (
  { name, ...props }: LayoutProps & { name: Signal<LayoutNames> },
) => {
  const Comp = layouts[name.value || "default"];

  if (!IS_BROWSER) {
    return <div />;
  }
  return <Comp {...props} />;
};
