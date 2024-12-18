import React from 'react'
import * as styles from './index.css'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
