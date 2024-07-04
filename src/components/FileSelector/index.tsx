import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'

type FileSelectorProps = {
  dark?: boolean
}

const FileSelector = ({ dark }: FileSelectorProps) => {
  const { open } = useFrame()
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: dark ? '#fff' : '#303540',
        color: dark ? '#303540' : '#fff',
      }}
      onClick={() => {
        open('files', [])
      }}
    >
      ファイルを探す
    </button>
  )
}

export default FileSelector
