import { useSignal } from "@preact/signals";
import { LayoutRender } from "../../islands/F.tsx";
import { LayoutNames } from "../../layouts/layout.config.ts";

export default function Home() {
  const name = useSignal<LayoutNames>("default");
  return (
    <LayoutRender name={name}>
      <ul className="border-r w-64 select-none h-full bg-zinc-50 p-2 flex flex-col overflow-y-auto">
        {Array.from({ length: 40 }).fill("xxx").map((_e, i) => (
          <li
            className="rounded-xl border hover:bg-zinc-100 border-transparent p-1.5"
            key={i}
          >
            <b className="text-xs font-semibold">About Typescript...</b>
            <p className="text-xs">xxxx</p>
          </li>
        ))}
        <li className="bg-white border border-zinc-200 rounded-xl p-1.5 shadow-sm">
          <div className="flex items-center justify-between gap-2 w-full">
            <b className="text-xs font-semibold">
              About Typescript...
            </b>

            <button className="p-1 border border-transparent hover:border-zinc-200 hover:shadow-sm rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
                />
              </svg>
            </button>
          </div>
          <p className="text-xs">xxxx</p>
        </li>
      </ul>
    </LayoutRender>
  );
}
