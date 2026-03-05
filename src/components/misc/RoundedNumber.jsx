import React from 'react'

const RoundedNumber = ({ children }) => {
    return (
        <span id='RoundedNumber' className="relative inline-flex items-center justify-center w-5 h-5 mb-2">
            <span className="absolute inset-0 bg-[var(--brand-primary)] rounded-full" />
            <span className="relative z-10 text-white text-xs font-bold">{children}</span>
        </span>
    )
}

export default RoundedNumber