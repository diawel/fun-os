import * as styles from './index.css'

type FrameProps = {
  children: React.ReactNode
  state: 'active' | 'inactive'
  position: { x: number; y: number }
  onFocus: () => void
  onClose: () => void
}

const Frame = ({ children, state, position, onFocus, onClose }: FrameProps) => {
  return (
    <div
      style={{
        left: `${position.x * 100}%`,
        top: `${position.y * 100}%`,
      }}
      className={styles.frame[state]}
      onClick={onFocus}
    >
      <div>
        <button
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
        >
          close
        </button>
      </div>
      <div className={styles.frameContent}>{children}</div>
    </div>
  )
}

export default Frame
