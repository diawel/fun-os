import React from 'react'
import * as styles from './index.css'

type TagProps = {
  children: React.ReactNode
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>
}

export default Tag
