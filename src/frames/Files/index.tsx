import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'

const Files: FrameContent = ({ params }) => {
  const { transition } = useFrame()

  const currentDirectory = findDirectory(directoryTree, params)
  return (
    <div className={styles.frame}>
      <div></div>
      <div>
        <div>
          <h2>{currentDirectory?.name}</h2>
        </div>
        <div>
          {currentDirectory?.children.map((child) => (
            <div key={child.name}>
              {'action' in child ? (
                <button
                  onClick={() => {
                    console.log(child.action.open.frame)
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
