import * as styles from './index.css'

interface ImageCellProps {
  src: string
  isFirstIndex: boolean
  isLastIndex: boolean
}

const ImageCell = ({ src, isFirstIndex, isLastIndex }: ImageCellProps) => {
  return (
    <img
      className={
        styles.cell +
        (isFirstIndex ? ` ${styles.roudedLeftCorners}` : '') +
        (isLastIndex ? ` ${styles.roudedRightCorners}` : '')
      }
      src={src}
      alt=""
    />
  )
}

export default ImageCell
