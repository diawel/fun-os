import { FrameContent } from '@/frame-manager/Provider'
import * as styles from './index.css'
import { fileList } from './file-list'
import { useEffect, useRef, useState } from 'react'
import FileSelector from '@/components/FileSelector'

const Drawer: FrameContent = ({ params }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)
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
  const fieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dragState) return
    const hundleMouseMove = (event: MouseEvent) => {
      const { startPosition, initialPosition } = dragState
      const fieldRect = fieldRef.current?.getBoundingClientRect()
      if (!fieldRect) return
      setPosition({
        x:
          initialPosition.x +
          (Math.max(Math.min(event.clientX, fieldRect.right), fieldRect.left) -
            startPosition.x),
        y:
          initialPosition.y +
          (Math.max(Math.min(event.clientY, fieldRect.bottom), fieldRect.top) -
            startPosition.y),
      })
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
  }, [dragState])

  if (!(params.join('/') in fileList))
    return (
      <div className={styles.frame}>
        <div className={styles.field}>
          編集中のファイルなし
          <FileSelector dark />
        </div>
        <div className={styles.sidebar}></div>
      </div>
    )

  return (
    <div className={styles.frame}>
      <div className={styles.field} ref={fieldRef}>
        <img
          className={styles.artboard}
          src={fileList[params.join('/') as keyof typeof fileList]}
          style={{
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale}) rotate(${rotation}deg)`,
          }}
          onMouseDown={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setDragState({
              startPosition: { x: event.clientX, y: event.clientY },
              initialPosition: position,
            })
          }}
        />
        <div className={styles.navigationBox}>
          <button
            className={styles.navigationButton}
            onClick={() => setScale((prev) => prev / 1.1)}
          >
            ー
          </button>
          <button
            className={styles.navigationButton}
            onClick={() => {
              setPosition({ x: 0, y: 0 })
              setScale(1)
            }}
          >
            リセット
          </button>
          <button
            className={styles.navigationButton}
            onClick={() => setScale((prev) => prev * 1.1)}
          >
            ＋
          </button>
        </div>
      </div>
      <div className={styles.sidebar}>
        変形
        <div className={styles.inputLine}>
          <div className={styles.inputBox}>
            X:
            <input
              value={`${position.x}px`}
              className={styles.input}
              disabled
            />
          </div>
          <div className={styles.inputBox}>
            Y:
            <input
              value={`${position.y}px`}
              className={styles.input}
              disabled
            />
          </div>
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputBox}>
            回転:
            <select
              className={styles.input}
              onChange={(event) => {
                setRotation(parseInt(event.target.value))
              }}
            >
              <option>0°</option>
              <option>90°</option>
              <option>180°</option>
              <option>270°</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
