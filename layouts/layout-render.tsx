import { IS_BROWSER } from "$fresh/runtime.ts";

import { Signal } from "@preact/signals";
import { LayoutNames, layouts } from "./layout.config.ts";
import { LayoutProps } from "./__shared.ts";
import { LayoutSwitch } from "./LayoutSwitch.tsx";

export const LayoutRender = (
  { name, ...props }: LayoutProps & { name: Signal<LayoutNames> },
) => {
  const Comp = layouts[name.value || "default"];

  if (!IS_BROWSER) {
    return <div>Fuccc</div>;
  }
  return (
    <div>
      <Comp {...props} />
      <LayoutSwitch name={name} />
    </div>
  );
};
