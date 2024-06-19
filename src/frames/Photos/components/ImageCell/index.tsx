import * as styles from './index.css'

interface ImageCellProps {
  src: string
}

const ImageCell = ({ src }: ImageCellProps) => {
  return (
    <div>
      <img className={styles.cell} src={src} alt="" />
    </div>
  )
}

export default ImageCell
