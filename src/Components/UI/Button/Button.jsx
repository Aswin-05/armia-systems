import React from 'react'
import './Button.css'

const Button = ({
  btnText,
  className = '',
  onClick,
  type = 'button',
}) => {


  return (
    <button
      className={`${className} default-btn`}
      onClick={onClick}
      type={type}
    >
      {btnText}
    </button>
  )
}

export default Button