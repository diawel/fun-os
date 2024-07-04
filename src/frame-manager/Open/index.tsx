import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'

type OpenProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  frame: string
  params?: string[]
}

const Open = ({ children, frame, params = [], ...args }: OpenProps) => {
  const { open } = useFrame()
  return (
    <button
      className={styles.button}
      onClick={() => open(frame, params)}
      {...args}
    >
      {children}
    </button>
  )
}

export default Open
