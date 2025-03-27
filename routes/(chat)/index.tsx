import { useSignal } from "@preact/signals";
import { LayoutRender } from "../../islands/F.tsx";
import { LayoutNames } from "../../layouts/layout.config.ts";

export default function Home() {
  const name = useSignal<LayoutNames>("default");
  return (
    <LayoutRender name={name}>
      <ul className="border-r w-44 h-full bg-zinc-50 p-2 flex flex-col">
        <li className="rounded-xl border border-transparent p-2">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
        <li className="rounded-xl border border-transparent p-2">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
        <li className="rounded-xl border border-transparent p-2">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
        <li className="rounded-xl border border-transparent p-2">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
        <li className="rounded-xl border border-transparent p-2">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
        <li className="bg-white border border-zinc-200 rounded-xl p-2 shadow-sm">
          <b className="text-xs font-semibold">About Typescript...</b>
          <p className="text-xs">xxxx</p>
        </li>
      </ul>
    </LayoutRender>
  );
}
