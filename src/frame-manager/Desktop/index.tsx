import * as styles from './index.css'
import { useFrame } from '@/frame-manager/Provider/frame-context'
import Dock from './Dock'
import Icon from '@/components/Icon'
import EntityButton from '@/components/EntityButton'

const Desktop = () => {
  const { open } = useFrame()

  return (
    <div className={styles.desktop}>
      <div className={styles.folders}>
        <EntityButton
          icon={
            <div className={styles.iconWrapper}>
              <Icon icon="folder" size={72} />
            </div>
          }
          label={<div className={styles.textWrapper}>授業</div>}
          onOpen={() => {
            open('files', ['授業'])
          }}
        />
        <EntityButton
          icon={
            <div className={styles.iconWrapper}>
              <Icon icon="folder" size={72} />
            </div>
          }
          label={<div className={styles.textWrapper}>展示会</div>}
          onOpen={() => {
            open('files', ['展示会'])
          }}
        />
        <EntityButton
          icon={
            <div className={styles.iconWrapper}>
              <Icon icon="バイト 作業用.ai" size={72} />
            </div>
          }
          label={<div className={styles.textWrapper}>バイト 作業用.ai</div>}
          onOpen={() => {
            open('drawer', ['バイト 作業用.ai'])
          }}
        />
      </div>
      <Dock />
    </div>
  )
}
export default Desktop
