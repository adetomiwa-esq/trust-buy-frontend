import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
    children: React.ReactNode
    to?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
}

function Button({children, to, onClick, type="button", className=""}: ButtonProps) {
    const baseClasses = 'bg-white text-black hover:bg-black hover:text-white px-4 py-2 rounded transition'

    if(to){
        return <Link to={to} className={`${baseClasses} ${className}`}>
            {children}
        </Link>
    }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>{children}</button>
  )
}

export default Button