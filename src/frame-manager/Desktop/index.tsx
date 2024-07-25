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
        <EntityButton
          icon={
            <div className={styles.iconWrapper}>
              <Icon icon="pdf" size={72} />
            </div>
          }
          label={<div className={styles.textWrapper}>発表スライド.pdf</div>}
          onOpen={() => {
            open('browser', [
              'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5dIPcpS7VhdjN9KM8GARmG%2FHI%E6%BC%94%E7%BF%92-team03%3Fpage-id%3D1081%3A2%26node-id%3D1083-3%26viewport%3D344%2C570%2C0.35%26t%3DIj1qWezvOn3ENXg8-1%26scaling%3Dcontain%26content-scaling%3Dfixed',
            ])
          }}
        />
      </div>
      <Dock />
    </div>
  )
}
export default Desktop
