import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'

const Player: FrameContent = ({ params }) => {
  return <Video src={params[0]} controls className={styles.video} autoPlay />
}

export default Player
