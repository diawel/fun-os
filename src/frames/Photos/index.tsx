import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'
import Album from './components/Album'
import PhotosView from './components/PhotosView'
import { virtalCreatureList, nobiList, funtasistaList } from './utils'

// import { virtualCreaturePhotoList, NobiPhotoList } from './utils'
import { virtualCreaturePhotoList, funtasistaPhotoList } from './utils'

const Photos: FrameContent = ({ params }) => {
  const { transition } = useFrame()

  const currentDirectory = findDirectory(directoryTree, params)

  return (
    <div className={styles.frame}>
      <div className={styles.sidebar}>
        <p className={styles.title}>写真</p>
        {directoryTree.children
          .filter((child) => 'children' in child)
          .map((child) => (
            <button
              key={child.name}
              className={styles.sidebarButton}
              onClick={
                child.name !== params[0]
                  ? () => transition([child.name])
                  : undefined
              }
              style={{
                backgroundColor:
                  child.name === params[0] ? 'rgb(0 0 0 / 10%)' : 'transparent',
              }}
            >
              {child.name}
            </button>
          ))}
      </div>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <h2 className={styles.currentDirectory}>{currentDirectory?.name}</h2>
        </div>
        {currentDirectory?.name === '全ての写真' && (
          <PhotosView
            imagePathList={virtalCreatureList.imagePathList.concat(
              nobiList.imagePathList,
              funtasistaList.imagePathList
            )}
          />
        )}
        {currentDirectory?.name === 'アルバム' && <Album />}
        {currentDirectory?.name === '仮想生物' && (
          <PhotosView imagePathList={virtualCreaturePhotoList} />
        )}
        {/* {currentDirectory?.name === '「のび」' && (
          <PhotosView imagePathList={NobiPhotoList} />
        )} */}
        {currentDirectory?.name === 'FUN!tasista!' && (
          <PhotosView imagePathList={funtasistaPhotoList} />
        )}
      </div>
    </div>
  )
}

export default Photos
