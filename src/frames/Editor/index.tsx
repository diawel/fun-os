import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { fileList } from './file-list'

const Editor: FrameContent = ({ params }) => {
  if (!(params.join('/') in fileList))
    return (
      <div className={styles.frame}>
        <div className={styles.mediapool} />
        <div className={styles.error}>編集中のファイルなし</div>
        <div className={styles.timeline} />
      </div>
    )

  return (
    <div className={styles.frame}>
      <div className={styles.mediapool} />

      <Video
        src={fileList[params.join('/') as keyof typeof fileList]}
        controls
        autoPlay
        className={styles.preview}
      />
      <div className={styles.timeline} />
    </div>
  )
}

export default Editor
