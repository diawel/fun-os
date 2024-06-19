import * as styles from './index.css'
import React from 'react'
import { virtalCreatureList, nobiList, funtasistaList } from './utils'
import ImageCell from '../ImageCell'
import { useFrame } from '@/frame-manager/Provider/frame-context'

const Album = () => {
  const { transition } = useFrame()

  return (
    <div>
      <div
        className={styles.virtualCreatureContainer}
        onClick={() => transition(['仮想生物'])}
      >
        <h2>{virtalCreatureList.title}</h2>
        <h4>{virtalCreatureList.dateRange}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {virtalCreatureList.imagePathList.map((image, index) => (
            <ImageCell key={index} src={image} />
          ))}
        </div>
        <h4>44</h4>
      </div>
      <div
        className={styles.nobiContainer}
        onClick={() => transition(['「のび」'])}
      >
        <h2>{nobiList.title}</h2>
        <h4>{nobiList.dateRange}</h4>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {nobiList.imagePathList.map((image, index) => (
            <ImageCell key={index} src={image} />
          ))}
        </div>
        <h4>42</h4>
      </div>
      <div
        className={styles.funtasistaContainer}
        onClick={() => transition(['FUN!tasista!'])}
      >
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
