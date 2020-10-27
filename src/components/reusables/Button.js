import React from "react";

/**
 *  A reusable Button component to show a button and handle click-events
 *
 * @param {Object} onClick the function to call onClick
 *
 * @example <Button onClick={() => {console.log('Button clicked')}}>Click me!</Button>
 */
const Button = ({ onClick, className, children }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default Button;
