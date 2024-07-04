import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { fileList } from './file-list'
import FileSelector from '@/components/FileSelector'

const Player: FrameContent = ({ params }) => {
  if (!(params.join('/') in fileList))
    return (
      <div className={styles.error}>
        再生中の動画なし
        <FileSelector />
      </div>
    )

  return (
    <Video
      src={fileList[params.join('/') as keyof typeof fileList]}
      controls
      className={styles.video}
      autoPlay
    />
  )
}

export default Player
