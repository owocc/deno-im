import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components,layouts}/**/*.{ts,tsx,js,jsx}",
  ],
} satisfies Config;
