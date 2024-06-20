import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { playlist } from './list'

const Player: FrameContent = ({ params }) => {
  if (params.join('/') in playlist)
    return (
      <Video
        src={playlist[params.join('/') as keyof typeof playlist]}
        controls
        className={styles.video}
        autoPlay
      />
    )
  return <div className={styles.error}>再生中の動画なし</div>
}

export default Player
