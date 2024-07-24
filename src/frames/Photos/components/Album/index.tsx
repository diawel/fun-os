import * as styles from './index.css'
import { virtalCreatureList, nobiList, funtasistaList } from '../../utils'
import ImageCell from '../ImageCell'
import { useFrame } from '@/frame-manager/Provider/frame-context'

const Album = () => {
  const { transition } = useFrame()

  return (
    <div className={styles.albumContainer}>
      <div
        className={styles.virtualCreatureContainer}
        onClick={() => transition(['仮想生物'])}
      >
        <div className={styles.textContainer}>
          <p className={styles.dateRange}>{virtalCreatureList.dateRange}</p>
          <p className={styles.title}>{virtalCreatureList.title}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {virtalCreatureList.imagePathList.map((image, index) => {
            let isRoundedLeft = false
            let isRoundedRight = false
            if (index === 0) {
              isRoundedLeft = true
            } else if (index === virtalCreatureList.imagePathList.length - 1) {
              isRoundedRight = true
            }
            return (
              <ImageCell
                key={index}
                src={image}
                isFirstIndex={isRoundedLeft}
                isLastIndex={isRoundedRight}
              />
            )
          })}
        </div>
        <h4 className={styles.totalImages}>44</h4>
      </div>
      <div
        className={styles.nobiContainer}
        onClick={() => transition(['「のび」'])}
      >
        <div className={styles.textContainer}>
          <p className={styles.dateRange}>{nobiList.dateRange}</p>
          <p className={styles.title}>{nobiList.title}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {nobiList.imagePathList.map((image, index) => {
            let isRoundedLeft = false
            let isRoundedRight = false
            if (index === 0) {
              isRoundedLeft = true
            } else if (index === nobiList.imagePathList.length - 1) {
              isRoundedRight = true
            }
            return (
              <ImageCell
                key={index}
                src={image}
                isFirstIndex={isRoundedLeft}
                isLastIndex={isRoundedRight}
              />
            )
          })}
        </div>
        <h4 className={styles.totalImages}>42</h4>
      </div>
      <div
        className={styles.funtasistaContainer}
        onClick={() => transition(['FUN!tasista!'])}
      >
        <div className={styles.textContainer}>
          <p className={styles.dateRange}>{funtasistaList.dateRange}</p>
          <p className={styles.title}>{funtasistaList.title}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {funtasistaList.imagePathList.map((image, index) => {
            let isRoundedLeft = false
            let isRoundedRight = false
            if (index === 0) {
              isRoundedLeft = true
            } else if (index === funtasistaList.imagePathList.length - 1) {
              isRoundedRight = true
            }
            return (
              <ImageCell
                key={index}
                src={image}
                isFirstIndex={isRoundedLeft}
                isLastIndex={isRoundedRight}
              />
            )
          })}
        </div>
        <h4 className={styles.totalImages}>112</h4>
      </div>
    </div>
  )
}

export default Album
