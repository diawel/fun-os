import * as styles from './index.css'
import Tag from './../Tag'
import timelineArrow from './timeline_arrow.png'

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      <img className={styles.timelineArrow} src={timelineArrow} alt="" />
      <div className={styles.tagStart}>
        <Tag>2年前期</Tag>
      </div>
      <div className={styles.tagMiddle}>
        <Tag>2年後期</Tag>
      </div>
      <div className={styles.tagEnd}>
        <Tag>3年前期</Tag>
      </div>
    </div>
  )
}

export default Timeline
