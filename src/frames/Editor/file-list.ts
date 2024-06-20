export const fileList = {
  // '展示会/FUN!tasista! 2024.2/作品紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/funtasista/playlist.m3u8',
  // '授業/情報表現基礎Ⅲ/5to1/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/5to1.mp4',
  // '授業/情報表現基礎Ⅲ/Byte/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/Byte.mp4',
  // '授業/情報表現基礎Ⅲ/チエカバナナ/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/chiekabanana.mp4',
  // '授業/情報表現基礎Ⅲ/DATU/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/DATU.mp4',
  // '授業/情報表現基礎Ⅲ/ゴーストれ！/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/ghostre.mp4',
  // '授業/情報表現基礎Ⅲ/INTERSTELLAR/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/INTERSTELLAR.mp4',
  // '授業/情報表現基礎Ⅲ/ぽりりずむ/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/polyrhythm.mp4',
  // '授業/情報表現基礎Ⅲ/SAMURAI SHADOWS/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/SAMURAI-SHADOWS.mp4',
  '授業/情報表現基礎Ⅲ/ツミ！/紹介動画.mp4': {
    src: 'https://fundesign-os.g.kuroco-img.app/files/user/videos/tsumi.mp4',
    thumbnails: [...Array(7)].map(
      (_, i) => new URL(`./thumbnails/tsumi/${i}.png`, import.meta.url).href
    ),
    chapter: [
      {
        label: 'タイトル',
        time: 0,
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
  // '授業/情報表現基礎Ⅲ/WORD HUNTER/紹介動画.mp4':
  //   'https://fundesign-os.g.kuroco-img.app/files/user/videos/WORD-HUNTER.mp4',
}
