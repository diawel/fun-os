import Image1 from './assets/contentCardImage/image_1.png'
import Image2 from './assets/contentCardImage/image_2.png'
import Image3 from './assets/contentCardImage/image_3.png'
import Image4 from './assets/contentCardImage/image_4.png'
import Image5 from './assets/contentCardImage/image_5.png'
import Image6 from './assets/contentCardImage/image_6.png'

export interface ContentCardDataProps {
  subjectName: string
  subjectTheme: string
  subjectDescription: string
  imagePath: string
  buttonLabel: string[]

  buttonAction: { frame: string; params: string[] }[]
}

export const contentCardData: ContentCardDataProps[] = [
  {
    subjectName: '情報表現基礎Ⅱ',
    subjectTheme: '未来大周辺に棲む デジタル仮想生物',
    subjectDescription:
      'この授業では、未来大やその周辺の歴史を調べ、企画した仮想生物を、電子制御で実体化していきます。\nレーザーカッターや3Dプリンターが気軽に使えるのも、未来大の魅力です。',
    imagePath: Image1,
    buttonLabel: ['成果物を見る'],
    buttonAction: [{ frame: 'photos', params: ['仮想生物'] }],
  },
  {
    subjectName: '情報デザインⅠ',
    subjectTheme: '地域から「デザイン」を見つける',
    subjectDescription:
      '2年前期には、大学近くの住宅街を歩きながら、デザインの手がかりを見つける課題に取り組みます。\n普段何気なく見ている景色から、新たな着想を得る方法を実践します。',
    imagePath: Image2,
    buttonLabel: ['作業データを見る'],
    buttonAction: [{ frame: 'files', params: ['授業', '情報デザインⅠ'] }],
  },
  {
    subjectName: '展示会',
    subjectTheme: 'はこだて未来展 夏',
    subjectDescription:
      '2年前期の終わりには、学生が主体となって、これまでの成果物の展示会を行います。\n外部の方に作品にご覧いただくための会場作りを経験します。',
    imagePath: Image3,
    buttonLabel: ['展示した作品を見る', '作業データを見る'],
    buttonAction: [
      { frame: 'photos', params: ['「のび」'] },
      { frame: 'files', params: ['展示会', 'のび 2023.7'] },
    ],
  },
  {
    subjectName: '情報表現基礎Ⅲ',
    subjectTheme: '新しい遊びの提案',
    subjectDescription:
      '2年後期には、KJ法を使い、遊びのアイデアを可視化し新しい遊びを発案します。\nKJ法を使ったアイデアの論理的な整理を行い、全体像を俯瞰して物事を考える方法を実践します。',
    imagePath: Image4,
    buttonLabel: ['成果物を見る'],
    buttonAction: [{ frame: 'files', params: ['授業', '情報表現基礎Ⅲ'] }],
  },
  {
    subjectName: '情報デザインⅡ',
    subjectTheme: 'クラウドファンディング',
    subjectDescription:
      'この授業では、分析結果を元にして、発案したアイデアを支援者にご覧いただくためのwebサイトを作ります。\nFigmaを使い、見る側の視点での構成や配置などを考えます。',
    imagePath: Image5,
    buttonLabel: ['作業データを見る'],
    buttonAction: [{ frame: 'files', params: ['授業', '情報デザインⅡ'] }],
  },
  {
    subjectName: '展示会',
    subjectTheme: 'はこだて未来展  冬',
    subjectDescription:
      '2年後期の終わりでは、学生が主体となって、後期成果物の展示会を行います。\n外部の方に作品をご覧いただくための会場作りを経験します。',
    imagePath: Image6,
    buttonLabel: ['展示会の様子を見る', '作業データを見る'],
    buttonAction: [
      { frame: 'photos', params: ['FUN!tasista!'] },
      { frame: 'files', params: ['展示会', 'FUN!tasista! 2024.2'] },
    ],
  },
]
