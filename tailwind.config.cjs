/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#00D0F1",
					500: "#008EA5",
					700: "#005E6D",
				},
				secondary: {
					50: "#FEF7CB",
					100: "#FFE79C",
					500: "#FCBF00",
					700: "#906D00",
				},
				info: "#1266ED",
				body: "#F5F5F5",
				modal: "rgba(0,0,0,0.5)",
				danger: "#D6222B",
			},
			fontFamily: {
				avenirNext: ["Avenir Next", "sans-serif"],
				amperzand: ["Amperzand", "sans-serif"],
			},
			backgroundImage: {
				perfil: "url(./src/assets/images/pet.png)",
				iconWhatsapp: "url(./src/assets/images/icon-whatsapp.png)",
			},
		},
	},
	plugins: [],
};
