import React from 'react'

/**
 *  A reusable Button component to show a button and handle click-events
 * 
 * @param {Object} onClick the function to call onClick
 * 
 * @example <Button onClick={() => {console.log('Button clicked')}}>Click me!</Button>
 */
const Button = ({onClick, children}) => {
    return (

    <button className="button" onClick={onClick}>
        {children}
    </button>
    )
}

export default Button