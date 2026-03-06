import React, { useState, useRef } from 'react';
import { IoSearchOutline } from "react-icons/io5";

const SearchDropdown = ({ customers = [], placeholder = "Search properties" }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const customerList = Array.isArray(customers) && customers.length > 0 ? customers : ["Customer A", "Customer B", "Customer C"];
    const filtered = customerList.filter(c => c.toLowerCase().includes(search.toLowerCase()));

    // Close dropdown on outside click
    React.useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div ref={dropdownRef} className="relative min-w-[180px] md:min-w-[240px]">
            <button
                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-[var(--card)] text-text-default focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition placeholder:text-text-muted text-left"
                onClick={() => setOpen(o => !o)}
            >
                {selected || <span className="text-slate-400 text-sm flex items-center gap-2"><IoSearchOutline /> <span className='mt-[0.2rem]'>{placeholder}...</span></span>}
            </button>
            {open && (
                <div className="absolute left-0 mt-2 w-full bg-[var(--card)] border border-slate-200 rounded-xl shadow-sm z-50">
                    <input
                        className="w-full px-4 py-2 border border-slate-200 bg-[var(--card)] text-text-default focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition placeholder:text-text-muted text-sm"
                        placeholder={placeholder}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoFocus
                    />
                    <div className="max-h-48 overflow-y-auto">
                        {filtered.length === 0 ? (
                            <div className="px-4 py-2 text-[var(--brand-dark)] text-sm">No results</div>
                        ) : (
                            filtered.map((c, idx) => (
                                <button
                                    key={c}
                                    className="w-full text-left px-4 py-2 hover:bg-[var(--brand-light)] text-[var(--brand-primary)] text-sm"
                                    onClick={() => {
                                        setSelected(c);
                                        setOpen(false);
                                        setSearch("");
                                    }}
                                >{c}</button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchDropdown;
