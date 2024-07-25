import Introduction from './Introduction'
import { fileList } from './file-list'
import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'

const Browser: FrameContent = ({ params }) => {
  const path = params.join('/')
  if (path === 'introduction') return <Introduction />

  const src = path in fileList ? fileList[path as keyof typeof fileList] : path
  return <iframe className={ src.includes('figma.com') ? styles.slide : styles.frame} key={src} {...{ src }} allowFullScreen />
}

export default Browser
