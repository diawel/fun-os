export const fileList = {
  // '展示会/FUN!tasista! 2024.2/作品紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/funtasista/playlist.m3u8',
  '授業/情報表現基礎Ⅲ/5to1/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/5to1.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) => new URL(`./thumbnails/5to1/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ルール説明',
        time: 1.58,
      },
      {
        label: '心理戦について',
        time: 60.07,
      },
      {
        label: '障害について',
        time: 59.8,
      },
      {
        label: '3ターン目について',
        time: 87.95,
      },
      {
        label: 'エンディング',
        time: 111.75,
      },
    ],
    se: [],
    bgm: [[0.0, 124.26]],
  },
  '授業/情報表現基礎Ⅲ/Byte/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/Byte.mp4',
    thumbnails: [...Array(5)].map(
      (_, i) => new URL(`./thumbnails/byte/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ルール説明',
        time: 9.82,
      },
      {
        label: 'ディスクについて',
        time: 44.75,
      },
      {
        label: 'ゲームスタート',
        time: 59.59,
      },
      {
        label: 'エンディング',
        time: 88.72,
      },
    ],
    se: [],
    bgm: [
      [0.0, 8.92],
      [9.97, 64.45],
      [65.91, 99.96],
    ],
  },
  '授業/情報表現基礎Ⅲ/チエカバナナ/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/chiekabanana.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) =>
        new URL(`./thumbnails/chiekabanana/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: '世界観',
        time: 10.21,
      },
      {
        label: '使用するもの',
        time: 31.45,
      },
      {
        label: 'ルール説明',
        time: 41.5,
      },
      {
        label: '進化の仕方',
        time: 119.1,
      },
      {
        label: 'エンディング',
        time: 127.25,
      },
    ],
    se: [
      [9.29, 9.58],
      [57.99, 58.29],
      [80.53, 81.09],
      [86.21, 86.96],
    ],
    bgm: [
      [0.0, 5.33],
      [10.22, 133.33],
    ],
  },
  '授業/情報表現基礎Ⅲ/DATU/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/DATU.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) => new URL(`./thumbnails/datu/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ゲーム概要',
        time: 4.59,
      },
      {
        label: 'タイルについて',
        time: 32.12,
      },
      {
        label: '役職について',
        time: 59.8,
      },
      {
        label: '妨害について',
        time: 79.72,
      },
      {
        label: '実際のプレイ動画',
        time: 101.64,
      },
    ],
    se: [],
    bgm: [[0.0, 122.93]],
  },
  '授業/情報表現基礎Ⅲ/ゴーストれ！/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/ghostre.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) => new URL(`./thumbnails/ghostre/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ルール',
        time: 8.71,
      },
      {
        label: '人間チームの役割',
        time: 27.65,
      },
      {
        label: 'お化けチームの役割',
        time: 45.46,
      },
      {
        label: 'ゲームの遊び方',
        time: 57.86,
      },
      {
        label: 'エンディング',
        time: 116.88,
      },
    ],
    se: [
      [9.29, 9.58],
      [57.99, 58.29],
      [80.53, 81.09],
      [86.21, 86.96],
    ],
    bgm: [[0.0, 120.0]],
  },
  '授業/情報表現基礎Ⅲ/INTERSTELLAR/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/INTERSTELLAR.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) =>
        new URL(`./thumbnails/interstellar/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ルール',
        time: 8.71,
      },
      {
        label: '人間チームの役割',
        time: 27.65,
      },
      {
        label: 'お化けチームの役割',
        time: 45.46,
      },
      {
        label: 'ゲームの遊び方',
        time: 57.86,
      },
      {
        label: 'エンディング',
        time: 116.88,
      },
    ],
    se: [
      [9.29, 9.58],
      [57.99, 58.29],
      [80.53, 81.09],
      [86.21, 86.96],
    ],
    bgm: [[0.0, 120.0]],
  },
  '授業/情報表現基礎Ⅲ/ぽりりずむ/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/polyrhythm.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) =>
        new URL(`./thumbnails/polyrhythm/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ゲームの概要',
        time: 2.76,
      },
      {
        label: '準備するもの',
        time: 12.85,
      },
      {
        label: 'ルール説明',
        time: 43.05,
      },
      {
        label: 'ポイントについて',
        time: 80.3,
      },
      {
        label: 'エンディング',
        time: 94.26,
      },
    ],
    se: [
      [1.47, 2.83],
      [78.9, 79.45],
    ],
    bgm: [
      [0.0, 124.26],
      [46.93, 59.02],
      [59.6, 74.91],
      [74.13, 79.94],
      [80.17, 94.61],
    ],
  },
  '授業/情報表現基礎Ⅲ/SAMURAI SHADOWS/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/SAMURAI-SHADOWS.mp4',
    thumbnails: [...Array(6)].map(
      (_, i) =>
        new URL(`./thumbnails/samuraishadows/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ルール説明',
        time: 14.85,
      },
      {
        label: '忍者の情報',
        time: 44.75,
      },
      {
        label: 'キャラクターの紹介',
        time: 59.59,
      },
      {
        label: '勝利条件',
        time: 95.95,
      },
      {
        label: 'エンディング',
        time: 110.96,
      },
    ],
    se: [],
    bgm: [[0.0, 120.73]],
  },
  '授業/情報表現基礎Ⅲ/ツミ！/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/tsumi.mp4',
    thumbnails: [...Array(7)].map(
      (_, i) => new URL(`./thumbnails/tsumi/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ゲーム概要',
        time: 8.35,
      },
      {
        label: 'ルール説明',
        time: 17.4,
      },
      {
        label: 'ルール説明(ツミカード)',
        time: 29.8,
      },
      {
        label: 'ルール説明(ルールカード)',
        time: 57.93,
      },
      {
        label: '注意事項',
        time: 76.25,
      },
      {
        label: 'エンディング',
        time: 108.65,
      },
    ],
    se: [
      [0.0, 2.92],
      [59.91, 60.96],
      [69.45, 69.6],
    ],
    bgm: [[9.15, 108.54]],
  },
  '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/WORD-HUNTER.mp4',
    thumbnails: [...Array(5)].map(
      (_, i) =>
        new URL(`./thumbnails/wordhunter/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0.0,
      },
      {
        label: 'ワードの洞窟',
        time: 5.09,
      },
      {
        label: 'モンスターの正体',
        time: 19.45,
      },
      {
        label: 'モンスターの呪い',
        time: 33.38,
      },
      {
        label: '勝利するコツ',
        time: 49.22,
      },
    ],
    se: [
      [0.0, 2.92],
      [59.91, 60.96],
      [69.45, 69.6],
    ],
    bgm: [[0.0, 59.52]],
  },
}
