import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-0": "#101010",
                "bg-1": "#202020",
                "bg-2": "#2D2D2D",
                "txt-0": "#FBFBFB",
                "txt-1": "#D2D2D2",
                "txt-2": "#C7C7C7",
            },
            fontFamily: {
                covesbold: "Coves Bold",
                coveslight: "Coves Light",
                montserrat: "Montserrat",
                noto: ["Noto Sans", "sans-serif"],
                free: ["Free Sans", "sans-serif"],
                freebold: ["Free Bold", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                blob: "blob 7s infinite",
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.05)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.95)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
        },
    },
    plugins: [
        require("rippleui"),
        require("clsx"),
        require("tailwind-merge"),
        require("@tailwindcss/typography"),
        addVariablesForColors,
    ],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
        ":root": newVars,
    });
}

export default config;
