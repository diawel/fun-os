import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'

const Counter: FrameContent = ({ params }) => {
  const { transition } = useFrame()

  return (
    <div className={styles.frame}>
      <p>{params[0]}</p>
      <button onClick={() => transition([String(Number(params[0]) + 1)])}>
        +1
      </button>
    </div>
  )
}

export default Counter
