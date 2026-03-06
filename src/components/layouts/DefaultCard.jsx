import React from 'react'

const DefaultCard = ({ children, backgroundOpacity = "100", backgroundColor = "white", cardType = "white" }) => {
    return (
        <div
            id='DefaultCard'
            className={`
                md:py-20 md:px-10
                py-10 px-5
                easing-class-1 w-full max-w-md rounded-4xl shadow-lg backdrop-filter backdrop-blur-lg 
                ${cardType === "beige" ? "bg-[var(--brand-light)]" : "bg-white"}`}>
            {children}
        </div>
    )
}

export default DefaultCard