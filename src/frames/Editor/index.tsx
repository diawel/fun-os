import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { fileList } from './file-list'
import EntityButton from '@/components/EntityButton'
import { useEffect, useRef, useState } from 'react'
import FileSelector from '@/components/FileSelector'

const Editor: FrameContent = ({ params }) => {
  const previewRef = useRef<HTMLVideoElement>(null)
  const timelineCursorRef = useRef<HTMLDivElement>(null)
  const [duration, setDuration] = useState(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const preview = previewRef.current
    if (!preview || !timelineCursorRef.current) return
    const handleTimeUpdate = () => {
      if (!preview || !timelineCursorRef.current) return
      timelineCursorRef.current.style.left =
        (preview.currentTime / duration) * 100 + '%'
      animationFrameRef.current = window.requestAnimationFrame(handleTimeUpdate)
    }
    handleTimeUpdate()

    return () => {
      if (animationFrameRef.current)
        window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [duration])

  if (!(params.join('/') in fileList))
    return (
      <div className={styles.frame}>
        <div className={styles.mediapool} />
        <div className={styles.error}>
          編集中のファイルなし
          <FileSelector dark />
        </div>
        <div className={styles.timeline} />
      </div>
    )

  const file = fileList[params.join('/') as keyof typeof fileList]
  return (
    <div className={styles.frame}>
      <div className={styles.mediapool}>
        {file.chapter.map((chapter, index) => (
          <EntityButton
            key={chapter.time}
            icon={
              <img
                src={file.thumbnails[index]}
                className={styles.mediapoolItem}
              />
            }
            onOpen={() => {
              if (!previewRef.current) return
              previewRef.current.currentTime = chapter.time
            }}
            dark
          />
        ))}
      </div>
      <Video
        src={file.src}
        controls
        className={styles.preview}
        onLoadedData={() => setDuration(previewRef.current?.duration ?? 0)}
        ref={previewRef}
      />
      <div className={styles.timeline}>
        <div
          className={styles.timelineInner}
          style={{
            width: duration * 10 + 'px',
          }}
        >
          <div className={styles.timelineChapterLine}>
            {file.chapter.map((chapter, index) => (
              <div
                key={chapter.time}
                className={styles.chapterBox}
                style={{
                  left: (chapter.time / duration) * 100 + '%',
                  width:
                    (((index < file.chapter.length - 1
                      ? file.chapter[index + 1].time
                      : duration) -
                      chapter.time) /
                      duration) *
                      100 +
                    '%',
                }}
                onClick={() => {
                  if (!previewRef.current) return
                  previewRef.current.currentTime = chapter.time
                }}
              >
                <div className={styles.timelineLabel.chapter}>
                  {chapter.label}
                </div>
                <div
                  style={{ backgroundImage: `url(${file.thumbnails[index]}` }}
                  className={styles.timelineMedia}
                />
              </div>
            ))}
          </div>
          <div className={styles.timelineLine} />
          <div className={styles.timelineLine}>
            {file.se.map((se) => (
              <div
                key={se[0]}
                className={styles.timelineLabel.se}
                style={{
                  left: (se[0] / duration) * 100 + '%',
                  width: ((se[1] - se[0]) / duration) * 100 + '%',
                }}
              />
            ))}
          </div>
          <div className={styles.timelineLine}>
            {file.bgm.map((bgm) => (
              <div
                key={bgm[0]}
                className={styles.timelineLabel.bgm}
                style={{
                  left: (bgm[0] / duration) * 100 + '%',
                  width: ((bgm[1] - bgm[0]) / duration) * 100 + '%',
                }}
              />
            ))}
          </div>
          <div className={styles.timelineCursor} ref={timelineCursorRef} />
        </div>
      </div>
    </div>
  )
}

export default Editor
