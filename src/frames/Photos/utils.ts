import VirtualCreatureImage1 from './assets/albumImage/VirtualCreature/image_1.png'
import VirtualCreatureImage2 from './assets/albumImage/VirtualCreature/image_2.png'
import VirtualCreatureImage3 from './assets/albumImage/VirtualCreature/image_3.png'
import VirtualCreatureImage4 from './assets/albumImage/VirtualCreature/image_4.png'
import VirtualCreatureImage5 from './assets/albumImage/VirtualCreature/image_5.png'
import NobiImage1 from './assets/albumImage/Nobi/image_1.png'
import NobiImage2 from './assets/albumImage/Nobi/image_2.png'
import NobiImage3 from './assets/albumImage/Nobi/image_3.png'
import NobiImage4 from './assets/albumImage/Nobi/image_4.png'
import NobiImage5 from './assets/albumImage/Nobi/image_5.png'
import Funtasista1 from './assets/albumImage/Funtasista/image_1.png'
import Funtasista2 from './assets/albumImage/Funtasista/image_2.png'
import Funtasista3 from './assets/albumImage/Funtasista/image_3.png'
import Funtasista4 from './assets/albumImage/Funtasista/image_4.png'
import Funtasista5 from './assets/albumImage/Funtasista/image_5.png'
import Funtasista6 from './assets/albumImage/Funtasista/image_6.png'

import VirtualCreaturePhoto1 from './assets/PhotoImage/VirtualCreature/Image_1.png'
import VirtualCreaturePhoto2 from './assets/PhotoImage/VirtualCreature/Image_2.png'
import VirtualCreaturePhoto3 from './assets/PhotoImage/VirtualCreature/Image_3.png'
import VirtualCreaturePhoto4 from './assets/PhotoImage/VirtualCreature/Image_4.png'
import VirtualCreaturePhoto5 from './assets/PhotoImage/VirtualCreature/Image_5.png'
import VirtualCreaturePhoto6 from './assets/PhotoImage/VirtualCreature/Image_6.png'
import VirtualCreaturePhoto7 from './assets/PhotoImage/VirtualCreature/Image_7.png'
import VirtualCreaturePhoto8 from './assets/PhotoImage/VirtualCreature/Image_8.png'
import VirtualCreaturePhoto9 from './assets/PhotoImage/VirtualCreature/Image_9.png'
import VirtualCreaturePhoto10 from './assets/PhotoImage/VirtualCreature/Image_10.png'
import VirtualCreaturePhoto11 from './assets/PhotoImage/VirtualCreature/Image_11.png'
import VirtualCreaturePhoto12 from './assets/PhotoImage/VirtualCreature/Image_12.png'
import VirtualCreaturePhoto13 from './assets/PhotoImage/VirtualCreature/Image_13.png'
import VirtualCreaturePhoto14 from './assets/PhotoImage/VirtualCreature/Image_14.png'
import VirtualCreaturePhoto15 from './assets/PhotoImage/VirtualCreature/Image_15.png'
import VirtualCreaturePhoto16 from './assets/PhotoImage/VirtualCreature/Image_16.png'
import VirtualCreaturePhoto17 from './assets/PhotoImage/VirtualCreature/Image_17.png'
import VirtualCreaturePhoto18 from './assets/PhotoImage/VirtualCreature/Image_18.png'
import VirtualCreaturePhoto19 from './assets/PhotoImage/VirtualCreature/Image_19.png'
import VirtualCreaturePhoto20 from './assets/PhotoImage/VirtualCreature/Image_20.png'
import VirtualCreaturePhoto21 from './assets/PhotoImage/VirtualCreature/Image_21.png'
import VirtualCreaturePhoto22 from './assets/PhotoImage/VirtualCreature/Image_22.png'
import VirtualCreaturePhoto23 from './assets/PhotoImage/VirtualCreature/Image_23.png'
import VirtualCreaturePhoto24 from './assets/PhotoImage/VirtualCreature/Image_24.png'
import VirtualCreaturePhoto25 from './assets/PhotoImage/VirtualCreature/Image_25.png'
import VirtualCreaturePhoto26 from './assets/PhotoImage/VirtualCreature/Image_26.png'
import VirtualCreaturePhoto27 from './assets/PhotoImage/VirtualCreature/Image_27.png'
import VirtualCreaturePhoto28 from './assets/PhotoImage/VirtualCreature/Image_28.png'
import VirtualCreaturePhoto29 from './assets/PhotoImage/VirtualCreature/Image_29.png'
import VirtualCreaturePhoto30 from './assets/PhotoImage/VirtualCreature/Image_30.png'
import VirtualCreaturePhoto31 from './assets/PhotoImage/VirtualCreature/Image_31.png'
import VirtualCreaturePhoto32 from './assets/PhotoImage/VirtualCreature/Image_32.png'
import VirtualCreaturePhoto33 from './assets/PhotoImage/VirtualCreature/Image_33.png'
import VirtualCreaturePhoto34 from './assets/PhotoImage/VirtualCreature/Image_34.png'
import VirtualCreaturePhoto35 from './assets/PhotoImage/VirtualCreature/Image_35.png'
import VirtualCreaturePhoto36 from './assets/PhotoImage/VirtualCreature/Image_36.png'
import VirtualCreaturePhoto37 from './assets/PhotoImage/VirtualCreature/Image_37.png'
import VirtualCreaturePhoto38 from './assets/PhotoImage/VirtualCreature/Image_38.png'
import VirtualCreaturePhoto39 from './assets/PhotoImage/VirtualCreature/Image_39.png'
import VirtualCreaturePhoto40 from './assets/PhotoImage/VirtualCreature/Image_40.png'
import VirtualCreaturePhoto41 from './assets/PhotoImage/VirtualCreature/Image_41.png'
import VirtualCreaturePhoto42 from './assets/PhotoImage/VirtualCreature/Image_42.png'
import VirtualCreaturePhoto43 from './assets/PhotoImage/VirtualCreature/Image_43.png'

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
    Funtasista1,
    Funtasista2,
    Funtasista3,
    Funtasista4,
    Funtasista5,
    Funtasista6,
  ],
}

export const virtualCreaturePhotoList: string[] = [
  VirtualCreaturePhoto1,
  VirtualCreaturePhoto2,
  VirtualCreaturePhoto3,
  VirtualCreaturePhoto4,
  VirtualCreaturePhoto5,
  VirtualCreaturePhoto6,
  VirtualCreaturePhoto7,
  VirtualCreaturePhoto8,
  VirtualCreaturePhoto9,
  VirtualCreaturePhoto10,
  VirtualCreaturePhoto11,
  VirtualCreaturePhoto12,
  VirtualCreaturePhoto13,
  VirtualCreaturePhoto14,
  VirtualCreaturePhoto15,
  VirtualCreaturePhoto16,
  VirtualCreaturePhoto17,
  VirtualCreaturePhoto18,
  VirtualCreaturePhoto19,
  VirtualCreaturePhoto20,
  VirtualCreaturePhoto21,
  VirtualCreaturePhoto22,
  VirtualCreaturePhoto23,
  VirtualCreaturePhoto24,
  VirtualCreaturePhoto25,
  VirtualCreaturePhoto26,
  VirtualCreaturePhoto27,
  VirtualCreaturePhoto28,
  VirtualCreaturePhoto29,
  VirtualCreaturePhoto30,
  VirtualCreaturePhoto31,
  VirtualCreaturePhoto32,
  VirtualCreaturePhoto33,
  VirtualCreaturePhoto34,
  VirtualCreaturePhoto35,
  VirtualCreaturePhoto36,
  VirtualCreaturePhoto37,
  VirtualCreaturePhoto38,
  VirtualCreaturePhoto39,
  VirtualCreaturePhoto40,
  VirtualCreaturePhoto41,
  VirtualCreaturePhoto42,
  VirtualCreaturePhoto43,
]
