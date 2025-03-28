import { ComponentChildren } from "preact";

interface LayoutProps {
  children?: ComponentChildren;
}


export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen  w-screen md:p-4 bg-zinc-50 overflow-hidden">
      <main className="border overflow-hidden md:rounded-xl bg-white h-full w-full shadow-xl">
        {name}
        {children}
      </main>
    </div>
  );
};
