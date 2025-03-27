import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <>
      <header className="h-12 border-x border-b rounded-b-2xl px-6">
        <div className="h-full flex items-center">
          <h1 className="text-lg">AI</h1>
        </div>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
