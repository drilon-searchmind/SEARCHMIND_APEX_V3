import React from 'react'

const AbstractBackground1 = ({ children, backgroundUrl = '/abstracts/16359095_v904-nunny-012.jpg' }) => {
    return (
        <section id='AbstractBackground1' className="relative w-full h-full min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url('${backgroundUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Overlay with brand-primary color */}
            <div
                id='AbstractBackground1Overlay'
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                style={{
                    background: "rgba(33, 59, 52, 0.85)",
                    // background: "linear-gradient(0deg, rgba(33,59,52,0.95) 0%, rgba(33,59,52,0.6) 100%)"
                }}
            />
            <div className="relative z-20 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </section>
    )
}

export default AbstractBackground1