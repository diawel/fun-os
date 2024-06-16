import * as styles from './index.css'

const Header = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.universityName}>公立はこだて未来大学</p>
        <p className={styles.courseName}>情報アーキテクチャ学科情報デザインコース</p>
        <p className={styles.universityAddress}>
          〒041-8655 北海道函館市亀田中野町116番地2
        </p>
      </div>
    </div>
  )
}

export default Header
