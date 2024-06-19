import React, { useState } from 'react'
import * as styles from './index.css'

interface PhotosViewProps {
  imagePathList: string[]
}

const PhotosView = ({ imagePathList }: PhotosViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % imagePathList.length)
  }

  const showPreviousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + imagePathList.length) % imagePathList.length
    )
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className={styles.photos}>
      {imagePathList.map((imagePath, index) => (
        <img
          key={index}
          className={styles.image}
          src={imagePath}
          alt=""
          onClick={() => openModal(index)}
        />
      ))}

      {isModalOpen && (
        <div className={styles.modal} onClick={handleBackgroundClick}>
          <div className={styles.modalContent}>
            <button
              className={`${styles.button} ${styles.closeButton}`}
              onClick={closeModal}
            >
              ×
            </button>
            <button
              className={`${styles.button} ${styles.prevButton}`}
              onClick={showPreviousImage}
            >
              ←
            </button>
            <img
              className={styles.modalImage}
              src={imagePathList[currentIndex]}
              alt=""
            />
            <button
              className={`${styles.button} ${styles.nextButton}`}
              onClick={showNextImage}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotosView
