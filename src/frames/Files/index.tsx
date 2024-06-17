import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'

const Files: FrameContent = ({ params }) => {
  const { transition, open } = useFrame()

  const currentDirectory = findDirectory(directoryTree, params)
  return (
    <div className={styles.frame}>
      <div className={styles.sidebar}>
        {directoryTree.children.map((child) => (
          <div key={child.name}>
            <button onClick={() => transition([child.name])}>
              {child.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h2>
            {params.length > 0 && (
              <button onClick={() => transition(params.slice(0, -1))}>
                {'＜'}
              </button>
            )}
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
