import * as styles from './index.css'
import React from 'react'
import { virtalCreatureList, nobiList, funtasistaList } from './utils'
import ImageCell from '../ImageCell'

const Album = () => {
  return (
    <div>
      <div className={styles.albumContainer}>
        <h2>{virtalCreatureList.title}</h2>
        <h4>{virtalCreatureList.dateRange}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {virtalCreatureList.imagePathList.map((image, index) => (
            <ImageCell key={index} src={image} />
          ))}
        </div>
        <h4>44</h4>
      </div>
      <div className={styles.nobiContainer}>
        <h2>{nobiList.title}</h2>
        <h4>{nobiList.dateRange}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {nobiList.imagePathList.map((image, index) => (
            <ImageCell key={index} src={image} />
          ))}
        </div>
        <h4>42</h4>
      </div>
      <div className={styles.funtasistaContainer}>
        <h2>{funtasistaList.title}</h2>
        <h4>{funtasistaList.dateRange}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {funtasistaList.imagePathList.map((image, index) => (
            <ImageCell key={index} src={image} />
          ))}
        </div>
      </div>
      <h4>112</h4>
    </div>
  )
}

export default Album
