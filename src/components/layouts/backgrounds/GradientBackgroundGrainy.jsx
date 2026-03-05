"use client"

import React from 'react'

const GradientBackgroundGrainy = ({ children }) => {
    return (
        <div className="relative w-full h-full min-h-screen overflow-hidden" style={{ backgroundColor: 'var(--brand-primary)' }}>
            {/* SVG noise filter */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                    <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                    <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="#8C8C8C" opacity="0.4" />
            </svg>

            {/* Animated blobs */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute rounded-full bg-[#EDB74D] blur-3xl" style={{ top: '200px', left: '100px', width: '200px', height: '200px', animation: 'yellow 8s infinite ease' }} />
                <div className="absolute rounded-full bg-[#EB6666] blur-3xl" style={{ top: '300px', right: '0px', width: '200px', height: '250px', animation: 'red 8s infinite linear' }} />
                <div className="absolute rounded-full bg-[#6FB18A] blur-3xl" style={{ top: '80px', right: '-20px', width: '250px', height: '200px', animation: 'green 8s infinite ease' }} />
            </div>

            {/* Content goes here */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* Keyframes for blobs */}
            <style jsx>{`
                @keyframes yellow {
                    0% {top: 200px; left: 100px; transform: scale(1);}
                    30% {top: 300px; left: 150px; transform: scale(1.2);}
                    60% {top: 100px; left: 200px; transform: scale(1.3);}
                    100% {top: 200px; left: 100px; transform: scale(1);}
                }
                @keyframes green {
                    0% {top: 80px; right: -20px; transform: scale(1.2);}
                    30% {top: 300px; right: -20px;transform: scale(1);}
                    60% {top: 200px; right: 100px;transform: scale(1);}
                    100% {top: 80px; right: -20px; transform: scale(1.2);}
                }
                @keyframes red {
                    0% {top: 300px; right: 0px; transform: scale(1);}
                    30% {top: 150px; right: 150px;transform: scale(1.4);}
                    60% {top: 300px; right: 100px;transform: scale(1);}
                    100% {top: 300px; right: 0px; transform: scale(1);}
                }
            `}</style>
        </div>
    );
}

export default GradientBackgroundGrainy