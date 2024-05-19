import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'soft-blue' : 'hsl(215, 51%, 70%)',
        'cyan' : 'hsl(178, 100%, 50%)',
        'main-bg' : 'hsl(217, 54%, 11%)',
        'card-bg' : 'hsl(216, 50%, 16%)',
        'blue-line' : 'hsl(215, 32%, 27%)'
      },
      fontFamily: {
        sans: ["Outfit", "var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
