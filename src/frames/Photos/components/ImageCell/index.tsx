import * as styles from './index.css'

interface ImageCellProps {
  src: string
  isFirstIndex: boolean
  isLastIndex: boolean
}

const ImageCell = ({ src, isFirstIndex, isLastIndex }: ImageCellProps) => {
  return (
    // firstIndexなら左端を丸める, lastIndexなら右端を丸める
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
