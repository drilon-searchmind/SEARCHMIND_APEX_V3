export default function Button({ children, variant = "primary", ...props }) {
	const base = "px-4 py-3 text-sm rounded-xl font-medium transition w-full md:w-auto";
	const variants = {
		primary: "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-secondary)]",
		secondary: "bg-[var(--brand-dark)] hover:bg-[var(--brand-light)]",
		danger: "bg-[var(--brand-warning)] text-white hover:bg-[var(--brand-warning-light)]",
	};
	return (
		<button className={`${base} ${variants[variant]}`} {...props}>
			{children}
		</button>
	);
}
