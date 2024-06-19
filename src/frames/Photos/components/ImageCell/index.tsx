import * as styles from './index.css'

const ImageCell = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <p className={styles.universityName}>公立はこだて未来大学</p>
        <p className={styles.courseName}>情報デザインコース</p>
        <p className={styles.courseDescription}>
          このウェブサイトでは、情報デザインコースでの学びについて紹介しています。
        </p>
      </div>
    </div>
  )
}

export default ImageCell
