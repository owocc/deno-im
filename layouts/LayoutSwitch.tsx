import type { Signal } from "@preact/signals";
import { LayoutNames } from "./layout.config.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
interface CounterProps {
  name: Signal<LayoutNames>;
}

export const LayoutSwitch = (props: CounterProps) => {
  if (!IS_BROWSER) {
    return <button>None</button>;
  }
  return (
    <div>
      {JSON.stringify(IS_BROWSER)}

      <button
        disabled={!IS_BROWSER}
        onClick={() => {
          console.log(props.name.value);
          props.name.value = "simple";
        }}
      >
        Trigger
      </button>
    </div>
  );
};
