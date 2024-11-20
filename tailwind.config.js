/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				default: "#2C2C2C",
			},
			fontFamily: {
				default: {
					fontFamily: "Play",
					fontWeight: 400,
					fontStyle: "normal",
				},
			},
		},
	},
	plugins: [],
};
