export default function Textarea({ label, ...props }) {
	return (
		<div className="w-full mb-4">
			{label && <label className="block mb-1 text-sm font-medium text-text-muted">{label}</label>}
			<textarea
				className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-[var(--card)] text-text-default focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition placeholder:text-text-muted resize-none"
				rows={4}
				{...props}
			/>
		</div>
	);
}
