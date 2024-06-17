import * as styles from './index.css'
import folder from './folder.png'
import ordinaryFile from './ordinaryFile.png'

const icons = {
  folder: folder,
  ordinaryFile: ordinaryFile,
}

type IconProps = {
  icon: keyof typeof icons
  size?: number
  alt?: string
}

const Icon = ({ icon, size = 16, alt = '' }: IconProps) => {
  return (
    <img
      src={icons[icon]}
      style={{
        width: size,
      }}
      className={styles.icon}
      {...{ alt }}
    />
  )
}

export default Icon
