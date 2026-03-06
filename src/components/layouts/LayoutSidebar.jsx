import React from 'react'

const navItems = [
    { icon: 'layers', label: 'Dashboard' },
    { icon: 'activity', label: 'Activity' },
    { icon: 'dollar-sign', label: 'Finance' },
    { icon: 'settings', label: 'Settings' },
];

const iconMap = {
    layers: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l10 5-10 5-10-5 10-5zm0 13l10-5-10-5-10 5 10 5zm0 5l10-5-10-5-10 5 10 5z" /></svg>
    ),
    activity: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    ),
    'dollar-sign': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5a5 5 0 0 0-10 0c0 2.5 2.5 4 5 4s5 1.5 5 4a5 5 0 0 1-10 0" /></svg>
    ),
    settings: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V15a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
    ),
};

const LayoutSidebar = () => {
    return (
        <aside className="bg-[var(--brand-primary-darker)] text-white h-screen w-20 flex flex-col items-center py-8 gap-8 shadow-lg">
            {/* Logo */}
            <div className="mb-8">
                <div className="w-10 h-10 bg-[var(--brand-accent)] rounded-full flex items-center justify-center font-bold text-xl text-[var(--brand-primary)] shadow-md">K</div>
            </div>
            {/* Nav icons */}
            <nav className="flex flex-col gap-6 w-full items-center">
                {navItems.map((item, idx) => (
                    <button key={item.label} className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-[var(--brand-dark)] transition">
                        {iconMap[item.icon]}
                    </button>
                ))}
            </nav>
            <div className="flex-grow" />
            {/* Help icon */}
            <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-[var(--brand-dark)] transition mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-1a4 4 0 1 0-4-4" /><circle cx="12" cy="18" r="1" /></svg>
            </button>
        </aside>
    );
};

export default LayoutSidebar