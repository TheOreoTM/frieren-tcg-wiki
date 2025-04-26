import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                signature: {
                    DEFAULT: "#FFD700", // gold
                    light: "#FFE066",
                    dark: "#CCAC00",
                },
            },
            boxShadow: {
                "signature-glow": "0 0 10px #FFD700, 0 0 20px #FFD700",
            },
        },
    },
    plugins: [],
};

export default config;
