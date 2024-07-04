import { useState } from 'react'
import * as styles from './index.css'

type EntityButtonProps = {
  icon: React.ReactNode
  label?: React.ReactNode
  onOpen: () => void
  dark?: boolean
}

const EntityButton = ({ icon, label, onOpen, dark }: EntityButtonProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const hundleClick = () => {
    if (isSelected) {
      onOpen()
    } else {
      setIsSelected(true)
    }
  }

  return (
    <button
      className={styles.button}
      onClick={hundleClick}
      onBlur={() => setIsSelected(false)}
      style={{
        backgroundColor: isSelected
          ? dark
            ? 'rgb(255 255 255 / 20%)'
            : 'rgb(0 0 0 / 10%)'
          : 'transparent',
      }}
    >
      {icon}
      {label}
    </button>
  )
}

export default EntityButton
