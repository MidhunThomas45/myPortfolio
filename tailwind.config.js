/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'var(--bg-color)',
				primaryText: 'var(--text-primary)',
				secondaryText: 'var(--text-secondary)',
			},
			backgroundColor: {
				card: 'var(--card-bg)',
				cardHover: 'var(--card-hover)',
			},
			borderColor: {
				card: 'var(--border-color)',
				cardHover: 'var(--border-hover)',
			},
			backdropBlur: {
				sm: '4px',
			},
		},
	},
	plugins: [],
}
