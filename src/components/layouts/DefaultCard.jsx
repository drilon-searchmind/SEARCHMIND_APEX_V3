import React from 'react'

const DefaultCard = ({ children, backgroundOpacity = "100", backgroundColor = "white", cardType = "white" }) => {
    return (
        <div
            id='DefaultCard'
            className={`
                easing-class-1 w-full max-w-md py-20 px-10 rounded-4xl shadow-lg backdrop-filter backdrop-blur-lg 
                ${cardType === "beige" ? "bg-[var(--brand-light)]" : "bg-white"}`}>
            {children}
        </div>
    )
}

export default DefaultCard