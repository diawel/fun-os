import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { playlist } from './list'

const Player: FrameContent = ({ params }) => {
  return (
    <Video
      src={playlist[params.join('/') as keyof typeof playlist]}
      controls
      className={styles.video}
      autoPlay
    />
  )
}

export default Player
