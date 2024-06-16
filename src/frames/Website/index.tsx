import { FrameContent } from '@/frame-manager/Provider'
import * as styles from './index.css'

import Header from './components/Header'
import Footer from './components/Footer'
import ContentCard from './components/ContentCard'

const Website: FrameContent = () => {
  return (
    <div className={styles.frame}>
      <Header />
      <ContentCard />
      <Footer />
    </div>
  )
}

export default Website
