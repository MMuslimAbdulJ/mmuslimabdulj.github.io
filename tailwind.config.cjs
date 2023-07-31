/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
              goyang: "wiggle .1s ease-in-out",
			  goyangSlow : "wiggle2 .3s ease-in-out",
            },
            keyframes: {
              wiggle: {
                "0%, 100%": { transform: "rotate(-3deg)" },
                "50%": { transform: "rotate(3deg)" },
              },
			  wiggle2: {
                "0%, 100%": { transform: "rotate(-20deg)" },
                "50%": { transform: "rotate(20deg)" },
              },
            },
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
