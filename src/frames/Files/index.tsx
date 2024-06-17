import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'
import returnButton from './returnButton.svg'

const Files: FrameContent = ({ params }) => {
  const { transition, open } = useFrame()

  const currentDirectory = findDirectory(directoryTree, params)
  return (
    <div className={styles.frame}>
      <div className={styles.sidebar}>
        {directoryTree.children
          .filter((child) => 'children' in child)
          .map((child) => (
            <div key={child.name}>
              <button onClick={() => transition([child.name])}>
                {child.name}
              </button>
            </div>
          ))}
      </div>
      <div>
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
        <div>
          {currentDirectory?.children.map((child) => (
            <div key={child.name}>
              {'action' in child ? (
                <button
                  onClick={() => {
                    open(child.action.open.frame, child.action.open.params)
                  }}
                >
                  {child.name}
                </button>
              ) : (
                <button onClick={() => transition([...params, child.name])}>
                  {child.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Files
