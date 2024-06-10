/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            lexend: ["lexend", "sans serif"],
            manpope: ["manrope", "sans serif"],
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#15ABFF",
                    secondary: "#DEE1E6",
                    accent: "#37cdbe",
                    neutral: "#9095A1",
                    white: "#ffffff",
                    info: "#2094f3",
                    success: "#6D31ED",
                    warning: "#ff9900",
                    error: "#FF0000",
                },
            },
            // other themes...
        ],
    },
    plugins: [
        require("daisyui"),
        function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-thin": {
                    "&::-webkit-scrollbar": {
                        width: "4px",
                        height: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "#888",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                    },
                },
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
