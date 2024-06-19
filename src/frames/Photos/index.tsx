import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'
import returnButton from './returnButton.svg'

import AllImages from './components/AllImages'
import Album from './components/Album'
import VirtualCreature from './components/VirtualCreature'
import Nobi from './components/Nobi'
import Funtasista from './components/Funtasista'

import Icon from '@/components/Icon'
import EntityButton from '@/components/EntityButton'

const Photos: FrameContent = ({ params }) => {
  const { transition } = useFrame()

  const currentDirectory = findDirectory(directoryTree, params)
  return (
    <div className={styles.frame}>
      <div className={styles.sidebar}>
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
          <h2 className={styles.currentDirectory}>
            <button
              className={styles.returnButton}
              onClick={() => transition(params.slice(0, -1))}
              disabled={params.length === 0}
            >
              <img src={returnButton} alt="return" />
            </button>
            {currentDirectory?.name}
          </h2>
        </div>
        {currentDirectory?.name === '全ての写真' && <AllImages />}
        {currentDirectory?.name === 'アルバム' && <Album />}
        {currentDirectory?.name === '仮想生物' && <VirtualCreature />}
        {currentDirectory?.name === '「のび」' && <Nobi />}
        {currentDirectory?.name === 'FUN!tasista!' && <Funtasista />}
      </div>
    </div>
  )
}

export default Photos
