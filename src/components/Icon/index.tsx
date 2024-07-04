import * as styles from './index.css'
import folder from './folder.png'
import ordinaryFile from './ordinaryFile.png'
import browzer from './browzer.png'
import drawer from './drawer.png'
import finder from './finder.png'
import player from './player.png'
import preview from './preview.png'
import trashBox from './trashBox.png'
import photo from './photo.png'
import editor from './editor.png'

const icons = {
  folder: folder,
  ordinaryFile: ordinaryFile,
  browzer: browzer,
  drawer: drawer,
  finder: finder,
  player: player,
  preview: preview,
  trashBox: trashBox,
  photo: photo,
  editor: editor,
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
