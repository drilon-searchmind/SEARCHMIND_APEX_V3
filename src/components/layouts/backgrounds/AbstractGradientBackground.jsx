import React from "react";

const AbstractGradientBackground = ({ children }) => {
    return (
        <div className="relative w-full h-full min-h-screen overflow-hidden">
            {/* Image background */}
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: "url('/abstracts/janke-laskowski-jz-ayLjk2nk-unsplash.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Abstract gradient background overlay */}
            <div
                className="absolute inset-0 w-full h-full z-10"
                style={{
                    background:
                        `radial-gradient(circle at 70% 60%, rgba(106,143,77,0.45) 0%, transparent 60%),\n` +
                        `radial-gradient(circle at 30% 40%, rgba(33,59,52,0.65) 0%, transparent 70%),\n` +
                        `linear-gradient(120deg, rgba(33,59,52,0.85) 0%, rgba(106,143,77,0.7) 100%)`,
                    // filter: "blur(5px)",
                }}
            />
            {/* Optional SVG noise overlay for graininess */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                    <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="#8C8C8C" opacity="0.18" />
            </svg>
            {/* Content goes here */}
            <div className="relative z-30 w-full h-full">{children}</div>
        </div>
    );
};

export default AbstractGradientBackground;
