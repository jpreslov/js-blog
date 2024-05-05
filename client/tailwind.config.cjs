import { withUt } from 'uploadthing/tw';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
};

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
});

module.exports = config;
