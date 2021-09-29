// Button component
import { ButtonDefault } from 'components/Button/button.style'
import React, { ButtonHTMLAttributes } from 'react'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonDefault {...props}>{props.children}</ButtonDefault>
}

export default Button
