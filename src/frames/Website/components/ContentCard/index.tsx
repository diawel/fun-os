import * as styles from './index.css'
import Button from '../Button'

const ContentCard = () => {
  return (
    <div className={styles.contentCard}>
      <div className={styles.content}>
        <p className={styles.subjectName}>情報表現基礎Ⅱ</p>
        <p className={styles.subjectTheme}>未来大周辺に棲む デジタル仮想生物</p>
        <p className={styles.subjectDescription}>
          この授業では、未来大やその周辺の歴史を調べ、企画した仮想生物を、電子制御で実体化していきます。
          <br />
          レーザーカッターや3Dプリンターが気軽に使えるのも、未来大の魅力です。
        </p>
        <div className={styles.buttonContainer}>
          <Button>成果物を見る</Button>
        </div>
      </div>
      <img className={styles.image} src="/src/assets/image.png" alt="" />
    </div>
  )
}

export default ContentCard
