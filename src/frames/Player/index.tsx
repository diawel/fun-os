import * as styles from './index.css'
import { FrameContent } from '@/frame-manager/Provider'
import Video from '@/components/Video'

const fileList = {
  '展示会/FUN!tasista! 2024.2/作品紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/funtasista/playlist.m3u8',
  '授業/情報表現基礎Ⅲ/5to1/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/5to1.mp4',
  '授業/情報表現基礎Ⅲ/Byte/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/Byte.mp4',
  '授業/情報表現基礎Ⅲ/チエカバナナ/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/chiekabanana.mp4',
  '授業/情報表現基礎Ⅲ/DATU/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/DATU.mp4',
  '授業/情報表現基礎Ⅲ/ゴーストれ！/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/ghostre.mp4',
  '授業/情報表現基礎Ⅲ/INTERSTELLAR/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/INTERSTELLAR.mp4',
  '授業/情報表現基礎Ⅲ/ぽりりずむ/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/polyrhythm.mp4',
  '授業/情報表現基礎Ⅲ/SAMURAI SHADOWS/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/SAMURAI-SHADOWS.mp4',
  '授業/情報表現基礎Ⅲ/ツミ！/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/tsumi.mp4',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介動画.mp4':
    'https://fundesign-os.g.kuroco-img.app/files/user/videos/WORD-HUNTER.mp4',
}

const Player: FrameContent = ({ params }) => {
  if (!(params.join('/') in fileList))
    return <div className={styles.error}>再生中の動画なし</div>

  return (
    <Video
      src={fileList[params.join('/') as keyof typeof fileList]}
      controls
      className={styles.video}
      autoPlay
    />
  )
}

export default Player
