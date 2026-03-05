export default function Input({ label, ...props }) {
  return (
    <div className="w-full mb-4">
      {label && <label className="block mb-1 text-sm font-medium text-text-muted">{label}</label>}
      <input
        className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-[var(--card)] text-text-default focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition placeholder:text-text-muted"
        {...props}
      />
    </div>
  );
}
