import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'
import returnButton from './returnButton.svg'
import Icon from '@/components/Icon'
import EntityButton from '@/components/EntityButton'

const Files: FrameContent = ({ params }) => {
  const { transition, open } = useFrame()

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
              <Icon
                {...(child.icon
                  ? child.icon.icon === 'path'
                    ? { ...child.icon, icon: [...params, child.name].join('/') }
                    : child.icon
                  : {
                      icon: 'folder',
                    })}
                size={18}
              />
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
        <div className={styles.entityList}>
          {currentDirectory?.children.map((child) => (
            <div key={child.name}>
              {'action' in child ? (
                <EntityButton
                  icon={
                    <Icon
                      {...(child.icon
                        ? child.icon.icon === 'path'
                          ? {
                              ...child.icon,
                              icon: [...params, child.name].join('/'),
                            }
                          : child.icon
                        : {
                            icon: 'ordinaryFile',
                          })}
                      size={72}
                    />
                  }
                  label={child.name}
                  onOpen={() => {
                    open(
                      child.action.open.frame,
                      child.action.open.params === 'path'
                        ? [...params, child.name]
                        : child.action.open.params
                    )
                  }}
                />
              ) : (
                <EntityButton
                  icon={<Icon icon="folder" size={72} />}
                  label={child.name}
                  onOpen={() => {
                    transition([...params, child.name])
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Files
