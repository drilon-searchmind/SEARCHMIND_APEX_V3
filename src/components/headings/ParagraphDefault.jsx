import React from 'react'

const ParagraphDefault = ({ children, textColor = "white", textSize = "lg", marginTop = "mt-5", textPosition = "left" }) => {
    return (
        <p className={`${marginTop} text-${textColor} text-${textSize} text-${textPosition}`}>{children}</p>
    )
}

export default ParagraphDefault
