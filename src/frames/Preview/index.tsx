import { FrameContent } from '@/frame-manager/Provider'
import * as styles from './index.css'
import { fileList } from './file-list'
import FileSelector from '@/components/FileSelector'

const Preview: FrameContent = ({ params }) => {
  if (!(params.join('/') in fileList))
    return (
      <div className={styles.frame}>
        ファイルなし
        <FileSelector />
      </div>
    )

  return (
    <img
      className={styles.image}
      src={fileList[params.join('/') as keyof typeof fileList]}
    />
  )
}

export default Preview
