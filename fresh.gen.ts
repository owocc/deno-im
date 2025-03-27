// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_chat_index from "./routes/(chat)/index.tsx";
import * as $_site_layout from "./routes/(site)/_layout.tsx";
import * as $_site_about from "./routes/(site)/about.tsx";
import * as $_site_home from "./routes/(site)/home.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $F from "./islands/F.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(chat)/index.tsx": $_chat_index,
    "./routes/(site)/_layout.tsx": $_site_layout,
    "./routes/(site)/about.tsx": $_site_about,
    "./routes/(site)/home.tsx": $_site_home,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/F.tsx": $F,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
