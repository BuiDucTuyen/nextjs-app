import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            "bgColor": 'linear-gradient(90deg, rgb(249, 237, 234) 3%, rgb(255, 238, 238) 66%, rgb(248, 242, 211) 96%), url(https://zerius.io/img/bg.png)',
      },
      backgroundColor:{
        "bg-button": "#7a6eaa"
      }
    },
  },
  plugins: [],
};
export default config;
