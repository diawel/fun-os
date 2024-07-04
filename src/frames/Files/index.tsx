import { FrameContent } from '@/frame-manager/Provider'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import * as styles from './index.css'
import { directoryTree, findDirectory } from './directory'
import returnButton from './returnButton.svg'
import Icon from '@/components/Icon'
import EntityButton from '@/components/EntityButton'

const test = [
  '授業/情報表現基礎Ⅲ/ぽりりずむ/架空大会ポスター.ai',
  '授業/情報表現基礎Ⅲ/ぽりりずむ/紹介動画.mp4',
  '授業/情報表現基礎Ⅲ/チエカバナナ/紹介動画.mp4',
  '授業/情報表現基礎Ⅲ/チエカバナナ/紹介ポスター.ai',
  '授業/情報表現基礎Ⅲ/チエカバナナ/架空大会ポスター.ai',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介動画.mp4',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介ポスター.ai',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/架空大会ポスター.ai',
  '授業/情報表現基礎Ⅲ/DATU/紹介動画.mp4',
  '授業/情報表現基礎Ⅲ/DATU/紹介ポスター.ai',
  '授業/情報表現基礎Ⅲ/DATU/架空大会ポスター.ai',
  '授業/情報表現基礎Ⅲ/Byte/紹介動画.mp4',
  '授業/情報表現基礎Ⅲ/Byte/紹介ポスター.ai',
  '授業/情報表現基礎Ⅲ/Byte/架空大会ポスター.ai',
  '授業/情報デザインⅡ/DELI REPI/紹介動画.mp4',
  '授業/情報デザインⅡ/DELI REPI/紹介ポスター.ai',
  '授業/情報デザインⅡ/風土FOOD/紹介ポスター.ai',
  '授業/情報デザインⅡ/Visifolio/紹介ポスター.ai',
  '授業/情報デザインⅡ/LatteLink/紹介ポスター.ai',
  '授業/情報デザインⅠ/ベンチ、なぜここに？.ai',
  '授業/情報デザインⅠ/MIKKE MIHARA to MIRAI/印刷用.ai',
]

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
                      // {...(child.icon
                      //   ? child.icon.icon === 'path'
                      //     ? {
                      //         ...child.icon,
                      //         icon: [...params, child.name].join('/'),
                      //       }
                      //     : child.icon
                      //   : {
                      //       icon: 'ordinaryFile',
                      //     })}
                      {...(() => {
                        if (child.icon) {
                          if (child.icon.icon === 'path') {
                            return {
                              ...child.icon,
                              icon: [...params, child.name].join('/'),
                            }
                          }
                          if (
                            child.icon.icon === 'editor' ||
                            child.icon.icon === 'drawer'
                          ) {
                            if (
                              (window.localStorage.getItem('TEST') === 'A' &&
                                !test.includes(
                                  [...params, child.name].join('/')
                                )) ||
                              (window.localStorage.getItem('TEST') === 'B' &&
                                test.includes(
                                  [...params, child.name].join('/')
                                ))
                            ) {
                              return {
                                ...child.icon,
                                icon:
                                  child.icon.icon === 'editor'
                                    ? 'player'
                                    : 'preview',
                              }
                            }
                          }
                          return child.icon
                        }
                        return {
                          icon: 'ordinaryFile',
                        }
                      })()}
                      size={72}
                    />
                  }
                  label={child.name}
                  onOpen={() => {
                    if (
                      child.action.open.frame === 'editor' ||
                      child.action.open.frame === 'drawer'
                    ) {
                      if (
                        (window.localStorage.getItem('TEST') === 'A' &&
                          !test.includes([...params, child.name].join('/'))) ||
                        (window.localStorage.getItem('TEST') === 'B' &&
                          test.includes([...params, child.name].join('/')))
                      ) {
                        open(
                          child.action.open.frame === 'editor'
                            ? 'player'
                            : 'preview',
                          child.action.open.params === 'path'
                            ? [...params, child.name]
                            : child.action.open.params
                        )
                        return
                      }
                    }
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
