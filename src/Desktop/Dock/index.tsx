import * as styles from './index.css'
import Icon from '@/components/Icon'
import Open from '@/frame-manager/Open'

const Dock = () => {
  return (
    <div className={styles.dock}>
      <Open frame="files">
        <div className={styles.icon}>
          <Icon icon="finder" size={72} />
        </div>
      </Open>
      <Open frame="drawer">
        <div className={styles.icon}>
          <Icon icon="drawer" size={72} />
        </div>
      </Open>
      <Open frame="website">
        <div className={styles.icon}>
          <Icon icon="browzer" size={72} />
        </div>
      </Open>
      <Open frame="photos">
        <div className={styles.icon}>
          <Icon icon="photo" size={72} />
        </div>
      </Open>
      <Open frame="editor">
        <div className={styles.icon}>
          <Icon icon="editor" size={72} />
        </div>
      </Open>
      <Open frame="player">
        <div className={styles.icon}>
          <Icon icon="player" size={72} />
        </div>
      </Open>
      <Open frame="editor">
        <div className={styles.icon}>
          <Icon icon="preview" size={72} />
        </div>
      </Open>
      <Open frame="trash">
        <div className={styles.icon}>
          <Icon icon="trashBox" size={72} />
        </div>
      </Open>
    </div>
  )
}
export default Dock
