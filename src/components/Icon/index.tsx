import * as styles from './index.css'
import folder from './folder.png'
import ordinaryFile from './ordinaryFile.png'
import browser from './browser.png'
import drawer from './drawer.png'
import finder from './finder.png'
import player from './player.png'
import pdf from './pdf.png'
import trashBox from './trashBox.png'
import photo from './photo.png'
import editor from './editor.png'

const icons = {
  folder,
  ordinaryFile,
  browser,
  drawer,
  finder,
  player,
  pdf,
  trashBox,
  photo,
  editor,
}

const drawerFileList = {
  '展示会/FUN!tasista! 2024.2/ポスター.ai': '/file-contents/ai/funtasista.png',
  '展示会/FUN!tasista! 2024.2/配布カード.ai':
    '/file-contents/ai/funtasista-card.png',
  '展示会/のび 2023.7/ポスター.ai': '/file-contents/ai/nobi.png',
  '展示会/のび 2023.7/会場案内.ai': '/file-contents/ai/nobi-kaijo.png',
  '授業/情報デザインⅠ/MIKKE MIHARA to MIRAI/印刷用.ai':
    '/file-contents/ai/mikkemihara.png',
  '授業/情報デザインⅠ/SHIKIRI/印刷用.ai': '/file-contents/ai/shikiri.png',
  '授業/情報デザインⅠ/産業道路の裏側で/印刷用.ai':
    '/file-contents/ai/sangyoroad.png',
  '授業/情報デザインⅠ/ベンチ、なぜここに？/印刷用.ai':
    '/file-contents/ai/bench.png',
  '授業/情報デザインⅡ/DELI REPI/紹介ポスター.ai':
    '/file-contents/ai/delirepi.png',
  '授業/情報デザインⅡ/LatteLink/紹介ポスター.ai':
    '/file-contents/ai/lattelink.png',
  '授業/情報デザインⅡ/Motion Wiz/紹介ポスター.ai':
    '/file-contents/ai/motionwiz.png',
  '授業/情報デザインⅡ/Perfect Presentation/紹介ポスター.ai':
    '/file-contents/ai/perfectpresentation.png',
  '授業/情報デザインⅡ/Rapid Recorder/紹介ポスター.ai':
    '/file-contents/ai/rapidrecorder.png',
  '授業/情報デザインⅡ/Visifolio/紹介ポスター.ai':
    '/file-contents/ai/visifolio.png',
  '授業/情報デザインⅡ/どこかのチケット/紹介ポスター.ai':
    '/file-contents/ai/dokoticket.png',
  '授業/情報デザインⅡ/風土FOOD/紹介ポスター.ai': '/file-contents/ai/food.png',
  '授業/情報表現基礎Ⅲ/5to1/紹介ポスター.ai':
    '/file-contents/ai/5to1-introduction.png',
  '授業/情報表現基礎Ⅲ/5to1/架空大会ポスター.ai':
    '/file-contents/ai/5to1-poster.png',
  '授業/情報表現基礎Ⅲ/Byte/紹介ポスター.ai':
    '/file-contents/ai/byte-introduction.png',
  '授業/情報表現基礎Ⅲ/Byte/架空大会ポスター.ai':
    '/file-contents/ai/byte-poster.png',
  '授業/情報表現基礎Ⅲ/チエカバナナ/紹介ポスター.ai':
    '/file-contents/ai/chiekabanana-introduction.png',
  '授業/情報表現基礎Ⅲ/チエカバナナ/架空大会ポスター.ai':
    '/file-contents/ai/chiekabanana-poster.png',
  '授業/情報表現基礎Ⅲ/DATU/紹介ポスター.ai':
    '/file-contents/ai/datu-introduction.png',
  '授業/情報表現基礎Ⅲ/DATU/架空大会ポスター.ai':
    '/file-contents/ai/datu-poster.png',
  '授業/情報表現基礎Ⅲ/ゴーストれ！/紹介ポスター.ai':
    '/file-contents/ai/ghostre-introduction.png',
  '授業/情報表現基礎Ⅲ/ゴーストれ！/架空大会ポスター.ai':
    '/file-contents/ai/ghostre-poster.png',
  '授業/情報表現基礎Ⅲ/INTERSTELLAR/紹介ポスター.ai':
    '/file-contents/ai/interstellar-introduction.png',
  '授業/情報表現基礎Ⅲ/INTERSTELLAR/架空大会ポスター.ai':
    '/file-contents/ai/interstellar-poster.png',
  '授業/情報表現基礎Ⅲ/ぽりりずむ/架空大会ポスター.ai':
    '/file-contents/ai/polyrhythm-poster.png',
  '授業/情報表現基礎Ⅲ/SAMURAI SHADOWS/紹介ポスター.ai':
    '/file-contents/ai/samuraishadows-introduction.png',
  '授業/情報表現基礎Ⅲ/SAMURAI SHADOWS/架空大会ポスター.ai':
    '/file-contents/ai/samuraishadows-poster.png',
  '授業/情報表現基礎Ⅲ/ツミ！/紹介ポスター.ai':
    '/file-contents/ai/tsumi-introduction.png',
  '授業/情報表現基礎Ⅲ/ツミ！/架空大会ポスター.ai':
    '/file-contents/ai/tsumi-poster.png',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介ポスター.ai':
    '/file-contents/ai/wordhunter-introduction.png',
  '授業/情報表現基礎Ⅲ/WORD HUNTER/架空大会ポスター.ai':
    '/file-contents/ai/wordhunter-poster.png',
  'バイト 作業用.ai': '/file-contents/ai/hakodate.png',
}

type IconProps = {
  icon: keyof typeof icons | keyof typeof drawerFileList | string
  size?: number
  alt?: string
}

const Icon = ({ icon, size = 16, alt = '' }: IconProps) => {
  return (
    <img
      src={
        icon in icons
          ? icons[icon as keyof typeof icons]
          : icon in drawerFileList
          ? drawerFileList[icon as keyof typeof drawerFileList]
          : icon
      }
      style={{
        width: size,
      }}
      className={styles.icon}
      {...{ alt }}
    />
  )
}

export default Icon
