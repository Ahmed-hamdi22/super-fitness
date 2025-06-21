import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'text-gradient-gray': 'linear-gradient(to right, #242424, #ffffff)',
			},
			fontFamily: {
				inter: ["font-nter", "sans-serif"],
				roboto: ["font-roboto", "sans-serif"],
				baloo: ['"Baloo Thambi 2"', 'cursive'],
				rubik: ['Rubik', "sans-serif"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
					'custom-x': '80.5px'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				"flame-orange": {
					50: "#FFF1E6",
					200: "#FFB899",
					300: "#FF9166",
					400: "#FF6933",
					500: "#FF4100",
					600: "#DB3700",
					700: "#B93000",
					800: "#8F2400",
					900: "#661A00",
				},
				"flame-orange-alpha": {
					50: "#FF410033",
				},
				"soft-gray": {
					50: "#F5F5F5",
					100: "#EDEDED",
					200: "#E5E5E5",
					300: "#D9D9D9",
					400: "#D3D3D3",
					500: "#BEBEBE",
					600: "#A8A8A8",
					700: "#919191",
					800: "#7B7B7B",
					900: "#666666",
				},
				"dark-gray": {
					800: "#242424",
					900: "#232425",
				},
				"light-silver": {
					50: "#FFFFFF",
					100: "#FAFAFA",
					200: "#F6F6F7",
					300: "#F3F3F4",
					400: "#E8E8E9",
					500: "#DCDCDD",
					600: "#D0D0D1",
					700: "#C4C4C5",
					800: "#B8B8B9",
					900: "#ACACAD",
				},
			}
		}
	},
	plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
}
export default config;
