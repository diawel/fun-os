import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'

const Website: FrameContent = ({ params }) => {
  const { transition } = useFrame()

  return (
    <div className={styles.frame}>
      なんかのwebiste
    </div>
  )
}

export default Website
