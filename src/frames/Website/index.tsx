import { FrameContent } from '@/frame-manager/Provider'
import * as styles from './index.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ContentCard from './components/ContentCard'
import Timeline from './components/Timeline'
import { contentCardData } from './util'

const Website: FrameContent = () => {
  return (
    <div className={styles.frame}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.timelineContainer}>
          <Timeline />
        </div>
        <div className={styles.contentCardContainer}>
          {contentCardData.map((data, index) => (
            <div className={styles.contentCard}>
              <ContentCard key={index} data={data} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Website
