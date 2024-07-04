import * as styles from './index.css'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import Dock from './Dock'
import Icon from '@/components/Icon'
import EntityButton from '@/components/EntityButton'

const Desktop = () => {
  const { open } = useFrame()

  return (
    <div className={styles.desktop}>
      <div className={styles.folderPosition}>
        <div className={styles.folderLabelColor}>
          <EntityButton
            icon={<Icon icon="folder" size={72} />}
            label="授業"
            onOpen={() => {
              open('files', ['授業'])
            }}
          />
          <EntityButton
            icon={<Icon icon="folder" size={72} />}
            label="展示会"
            onOpen={() => {
              open('files', ['展示会'])
            }}
          />
        </div>
      </div>
      <div className={styles.dockContainer}>
        <Dock />
      </div>
    </div>
  )
}
export default Desktop
