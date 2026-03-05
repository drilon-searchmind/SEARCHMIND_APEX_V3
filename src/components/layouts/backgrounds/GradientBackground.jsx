import React from 'react'

const GradientBackground = ({ children, backgroundUrl = '/abstracts/codioful-formerly-gradienta-26WixHTutxc-unsplash.jpg' }) => {
    return (
        <section id='GradientBackground'>
            <div
                className="flex items-center justify-center relative min-h-screen overflow-hidden"
                style={{
                    backgroundImage: `url('${backgroundUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* SVG noise filter for graininess */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
                        <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
                        <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="#8C8C8C" opacity="0.55" />
                </svg>
                <div
                    className="absolute inset-0 flex items-center justify-center glassmorphism3"
                />
                <span className='z-100'>
                    {children}
                </span>
            </div>
        </section>
    )
}

export default GradientBackground