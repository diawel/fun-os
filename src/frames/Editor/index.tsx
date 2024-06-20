import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'
import { fileList } from './file-list'
import EntityButton from '@/components/EntityButton'
import { useRef, useState } from 'react'

const Editor: FrameContent = ({ params }) => {
  const previewRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)

  if (!(params.join('/') in fileList))
    return (
      <div className={styles.frame}>
        <div className={styles.mediapool} />
        <div className={styles.error}>編集中のファイルなし</div>
        <div className={styles.timeline} />
      </div>
    )

  const file = fileList[params.join('/') as keyof typeof fileList]
  console.log(file)
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
        </div>
      </div>
    </div>
  )
}

export default Editor
