import * as styles from './index.css'
import Button from '../Button'
import React from 'react'
import { ContentCardDataProps } from '../../util'
import { useFrame } from '@/frame-manager/Provider/frame-context'

interface ContentCardProps {
  data: ContentCardDataProps
}

const ContentCard: React.FC<ContentCardProps> = ({ data }) => {
  const { open } = useFrame()

  return (
    <div className={styles.contentCard}>
      <div className={styles.content}>
        <p className={styles.subjectName}>{data.subjectName}</p>
        <p className={styles.subjectTheme}>{data.subjectTheme}</p>
        <p className={styles.subjectDescription}>
          {data.subjectDescription
            .split('\n')
            .map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
        <div className={styles.buttonContainer}>
          {data.buttonLabel.map((label: string, index: number) => (
            <Button
              key={index}
              onClick={() => {
                if (data.buttonAction[index].frame === '') {
                  alert('このボタンはまだ実装されていません')
                  return
                }
                open(
                  data.buttonAction[index].frame,
                  data.buttonAction[index].params
                )
                console.log(data.buttonAction[index].frame)
                console.log(data.buttonAction[index].params)
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <img className={styles.image} src={data.imagePath} alt="" />
    </div>
  )
}

export default ContentCard
