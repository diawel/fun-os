import FileSelector from '@/components/FileSelector'
import { fileList } from './file-list'
import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'

const Pdf: FrameContent = ({ params }) => {
  if (params.length === 0)
    return (
      <div className={styles.empty}>
        PDFファイルを選択してください
        <FileSelector />
      </div>
    )

  const src = fileList[params.join('/') as keyof typeof fileList]
  return <iframe className={styles.frame} key={src} {...{ src }} />
}

export default Pdf
