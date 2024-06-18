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
      <div>
        <div>
          <Timeline />
        </div>
        {contentCardData.map((data, index) => (
          <ContentCard key={index} data={data} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Website
