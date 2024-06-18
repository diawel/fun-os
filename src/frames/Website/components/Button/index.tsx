import React from 'react'
import * as styles from './index.css'

type ButtonProps = {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default Button
