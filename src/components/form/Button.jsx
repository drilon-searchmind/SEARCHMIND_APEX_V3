export default function Button({ children, variant = "primary", widthSize = "auto", ...props }) {
	const base = "px-10 py-4 text-sm rounded-xl font-medium transition w-full flex items-center justify-center gap-4 cursor-pointer";
	const variants = {
		primary: "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-secondary)]",
		secondary: "bg-[var(--brand-dark)] hover:bg-[var(--brand-light)]",
		danger: "bg-[var(--brand-warning)] text-white hover:bg-[var(--brand-warning-light)]",
		white: "bg-white border border-slate-200 hover:bg-slate-50 hover:cursor-pointer",
	};
	return (
		<button className={`${base} ${variants[variant]} ${widthSize === "full" ? "w-full" : "w-auto"}`} {...props}>
			{children}
		</button>
	);
}
