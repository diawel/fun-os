import VirtualCreatureImage1 from './../../assets/albumImage/VirtualCreature/image_1.png'
import VirtualCreatureImage2 from './../../assets/albumImage/VirtualCreature/image_2.png'
import VirtualCreatureImage3 from './../../assets/albumImage/VirtualCreature/image_3.png'
import VirtualCreatureImage4 from './../../assets/albumImage/VirtualCreature/image_4.png'
import VirtualCreatureImage5 from './../../assets/albumImage/VirtualCreature/image_5.png'
import NobiImage1 from './../../assets/albumImage/Nobi/image_1.png'
import NobiImage2 from './../../assets/albumImage/Nobi/image_2.png'
import NobiImage3 from './../../assets/albumImage/Nobi/image_3.png'
import NobiImage4 from './../../assets/albumImage/Nobi/image_4.png'
import NobiImage5 from './../../assets/albumImage/Nobi/image_5.png'
import Funtasista from '../../assets/albumImage/Funtasista/image_1.png'
import Funtasista2 from '../../assets/albumImage/Funtasista/image_2.png'
import Funtasista3 from '../../assets/albumImage/Funtasista/image_3.png'
import Funtasista4 from '../../assets/albumImage/Funtasista/image_4.png'
import Funtasista5 from '../../assets/albumImage/Funtasista/image_5.png'
import Funtasista6 from '../../assets/albumImage/Funtasista/image_6.png'

export interface ImageDataProps {
  title: string
  dateRange: string
  imagePathList: string[]
}

export const virtalCreatureList: ImageDataProps = {
  title: '仮想生物',
  dateRange: '2023年4月13日〜5月29日',
  imagePathList: [
    VirtualCreatureImage1,
    VirtualCreatureImage2,
    VirtualCreatureImage3,
    VirtualCreatureImage4,
    VirtualCreatureImage5,
  ],
}

export const nobiList: ImageDataProps = {
  title: 'はこだて未来展 2023 夏「のび」',
  dateRange: '2023年7月24日〜7月26日',
  imagePathList: [NobiImage1, NobiImage2, NobiImage3, NobiImage4, NobiImage5],
}

export const funtasistaList: ImageDataProps = {
  title: 'はこだて未来展 2023 冬 FUN!tasista!',
  dateRange: '2023年2月1日〜2月2日',
  imagePathList: [
    Funtasista,
    Funtasista2,
    Funtasista3,
    Funtasista4,
    Funtasista5,
    Funtasista6,
  ],
}
