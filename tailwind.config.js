import daisyUI from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#0095f6",
                facebook: "#385184",
                link:"#00376b",
            },
            backgroundImage: {
                "logo-pattern":
                    "url('https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png')",
            },
        },
    },
    plugins: [daisyUI],
};
