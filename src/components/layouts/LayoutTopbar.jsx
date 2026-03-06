import { useRef, useState } from 'react';
import SearchDropdown from '../misc/SearchDropdown';

const LayoutTopbar = ({ properties }) => {
        const [popoverOpen, setPopoverOpen] = useState(false);
        const avatarRef = useRef(null);

        return (
                <header className="flex items-center justify-between w-full px-10 py-6 bg-white shadow-sm">

                        {/* Upgrade button */}
                        <SearchDropdown properties={properties} placeholder="Search properties" />

                        {/* Icons & User */}
                        <div className="flex items-center gap-6">
                                {/* Notification */}
                                <button className="relative">
                                        <svg className="w-6 h-6 text-[var(--brand-dark)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                                        <span className="absolute top-0 right-0 w-2 h-2 bg-[var(--brand-accent)] rounded-full"></span>
                                </button>
                                {/* Chat */}
                                <button>
                                        <svg className="w-6 h-6 text-[var(--brand-dark)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                </button>
                                {/* User avatar */}
                                <div className="relative">
                                        <button
                                                ref={avatarRef}
                                                className="w-10 h-10 rounded-full bg-[var(--brand-accent)] flex items-center justify-center shadow-md border-2 border-[var(--brand-primary)] focus:outline-none"
                                                onClick={() => setPopoverOpen((open) => !open)}
                                        >
                                                <span className="font-bold text-[var(--brand-primary)]">M</span>
                                        </button>
                                        {/* Popover */}
                                        {popoverOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white border border-[var(--brand-dark)] rounded-lg shadow-lg z-50 flex flex-col">
                                                        <a href="/profile" className="px-4 py-2 hover:bg-[var(--brand-beige)] text-[var(--brand-primary)]">Profile</a>
                                                        <a href="/settings" className="px-4 py-2 hover:bg-[var(--brand-beige)] text-[var(--brand-primary)]">Settings</a>
                                                        <button className="px-4 py-2 text-left hover:bg-[var(--brand-beige)] text-[var(--brand-warning)]">Logout</button>
                                                </div>
                                        )}
                                </div>
                        </div>
                </header>
        );
};

export default LayoutTopbar