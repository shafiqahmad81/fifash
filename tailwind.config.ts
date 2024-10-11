import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1.5rem",
				screens: {},
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				secondary_white: "hsl(var(--white))",
				section_bg: "hsl(var(--section-bg))",
				footer_bg: "hsl(var(--footer-bg)) ",
				gray_bg: "hsl(var(--gray-bg))",
			},
			spacing: {
				"space-5.22": "22px",
				"space-7.22": "30px",
				"space-x-18": "75px",
			},
			fontFamily: {
				sans: ["var(--font-frank-ruhi)", "serif"],
				lato: ["var(--font-lato)", "serif"],
			},
			fontSize: {
				"3.2xl": "2rem", //32px
			},
			lineHeight: {
				7.2: "1.875rem", //30px
				11: "5.375rem", //86px
			},
			dropShadow: {
				"3xl": "2px 2px 2px rgba(0, 0, 0, 0.16)",
			},
			maxWidth: {
				"8xl": "94%",
			},
		},
	},
	plugins: [],
};
export default config;
