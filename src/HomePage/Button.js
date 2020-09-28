import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn-p', 'btn-out']

const SIZE = ['btn-m', 'btn-l']

export const Button = ({
    children, type, buttonStyle, buttonSize, 
    }) =>{
    const checkButtonStyle =  STYLES.includes(buttonStyle)? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZE.includes(buttonSize)? buttonSize : SIZE[0];
    
    return (
        <Link to="/" className="btn-mobile">
            <button 
            className={`${checkButtonStyle} ${checkButtonSize} btn`}
            type={type}>
            {children}
            </button>
        </Link>
    )
}