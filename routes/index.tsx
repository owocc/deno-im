import { useSignal } from "@preact/signals";
import { LayoutRender } from "../islands/F.tsx";
import { LayoutNames } from "../layouts/layout.config.ts";

export default function Home() {
  const name = useSignal<LayoutNames>("default");
  return (
    <LayoutRender name={name}>
      Hello
    </LayoutRender>
  );
}
