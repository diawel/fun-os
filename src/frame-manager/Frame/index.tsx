import { useEffect, useState } from 'react'
import * as styles from './index.css'

type FrameProps = {
  children: React.ReactNode
  state: 'active' | 'inactive'
  position: { x: number; y: number }
  onFocus: () => void
  onClose: () => void
  onMove: (position: { x: number; y: number }) => void
  backgroundColor?: string
}

const Frame = ({
  children,
  state,
  position,
  onFocus,
  onClose,
  onMove,
  backgroundColor = '#fff',
}: FrameProps) => {
  const [dragState, setDragState] = useState<
    | {
        startPosition: {
          x: number
          y: number
        }
        initialPosition: {
          x: number
          y: number
        }
      }
    | false
  >(false)

  useEffect(() => {
    if (!dragState) return
    const hundleMouseMove = (event: MouseEvent) => {
      const { startPosition, initialPosition } = dragState
      onMove({
        x:
          initialPosition.x +
          (Math.max(Math.min(event.clientX, window.innerWidth), 0) -
            startPosition.x) /
            window.innerWidth,
        y:
          initialPosition.y +
          (Math.max(Math.min(event.clientY, window.innerHeight), 0) -
            startPosition.y) /
            window.innerHeight,
      })
      onFocus()
    }

    const handleMouseLeave = () => {
      setDragState(false)
    }

    window.addEventListener('mousemove', hundleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseup', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', hundleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseup', handleMouseLeave)
    }
  }, [dragState, onFocus, onMove])

  return (
    <div
      style={{
        left: `${position.x * 100}%`,
        top: `${position.y * 100}%`,
        backgroundColor,
      }}
      className={styles.frame[state]}
      onClick={onFocus}
    >
      <div
        className={styles.navigation}
        onMouseDown={(event) => {
          event.stopPropagation()
          setDragState({
            startPosition: { x: event.clientX, y: event.clientY },
            initialPosition: position,
          })
        }}
        data-is-dragged={Boolean(dragState)}
      >
        <button
          className={styles.closeButton}
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
          onMouseDown={(event) => event.stopPropagation()}
        ></button>
      </div>
      <div className={styles.frameContent}>{children}</div>
    </div>
  )
}

export default Frame
