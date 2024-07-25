import Icon from '@/components/Icon'

type File = {
  name: string
  icon?: Omit<React.ComponentProps<typeof Icon>, 'size'>
  action: {
    open: {
      frame: string
      params: string[] | 'path'
    }
  }
}

type Directory = {
  name: string
  icon?: Omit<React.ComponentProps<typeof Icon>, 'size'>
  children: (File | Directory)[]
}

export const directoryTree: Directory = {
  name: 'デスクトップ',
  children: [
    {
      name: '授業',
      children: [
        {
          name: '情報デザインⅠ',
          children: [
            {
              name: 'MIKKE MIHARA to MIRAI',
              icon: {
                icon: 'path',
              },
              children: [
                {
                  name: '印刷用.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: 'フィールドノート.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'SHIKIRI',
              children: [
                {
                  name: '印刷用.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: 'フィールドノート.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: '産業道路の裏側で',
              children: [
                {
                  name: '印刷用.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: 'フィールドノート.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'ベンチ、なぜここに？',
              children: [
                {
                  name: '印刷用.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: 'フィールドノート.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          name: '情報表現基礎Ⅲ',
          children: [
            {
              name: 'ツミ！',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'WORD HUNTER',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'DATU',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'SAMURAI SHADOWS',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'INTERSTELLAR',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'ゴーストれ！',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'Byte',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'チエカバナナ',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'ぽりりずむ',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: '5to1',
              children: [
                {
                  name: '紹介動画.mp4',
                  icon: {
                    icon: 'editor',
                  },
                  action: {
                    open: {
                      frame: 'editor',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '架空大会ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          name: '情報デザインⅡ',
          children: [
            {
              name: 'DELI REPI',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'LatteLink',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'Motion Wiz',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'Perfect Presentation',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'Rapid Recorder',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'Visifolio',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: 'どこかのチケット',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
            {
              name: '風土FOOD',
              children: [
                {
                  name: '紹介ポスター.ai',
                  icon: {
                    icon: 'path',
                  },
                  action: {
                    open: {
                      frame: 'drawer',
                      params: 'path',
                    },
                  },
                },
                {
                  name: '紹介スライド.pdf',
                  icon: {
                    icon: 'pdf',
                  },
                  action: {
                    open: {
                      frame: 'pdf',
                      params: 'path',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '展示会',
      children: [
        {
          name: 'のび 2023.7',
          children: [
            {
              name: '会場案内.ai',
              icon: {
                icon: 'path',
              },
              action: {
                open: {
                  frame: 'drawer',
                  params: 'path',
                },
              },
            },
            {
              name: 'ポスター.ai',
              icon: {
                icon: 'path',
              },
              action: {
                open: {
                  frame: 'drawer',
                  params: 'path',
                },
              },
            },
          ],
        },
        {
          name: 'FUN!tasista! 2024.2',
          children: [
            {
              name: '作品紹介動画.mp4',
              icon: {
                icon: 'editor',
              },
              action: {
                open: {
                  frame: 'editor',
                  params: 'path',
                },
              },
            },
            {
              name: 'ポスター.ai',
              icon: {
                icon: 'path',
              },
              action: {
                open: {
                  frame: 'drawer',
                  params: 'path',
                },
              },
            },
            {
              name: '配布カード.ai',
              icon: {
                icon: 'path',
              },
              action: {
                open: {
                  frame: 'drawer',
                  params: 'path',
                },
              },
            },
            {
              name: 'Webサイト.webloc',
              icon: {
                icon: 'browser',
              },
              action: {
                open: {
                  frame: 'browser',
                  params: ['https://fundesign.jp/miraiten2024w/'],
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'バイト 作業用.ai',
      icon: {
        icon: 'path',
      },
      action: {
        open: {
          frame: 'drawer',
          params: 'path',
        },
      },
    },
    {
      name: '発表スライド.pdf',
      icon: {
        icon: 'pdf',
      },
      action: {
        open: {
          frame: 'browser',
          params: [
            'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5dIPcpS7VhdjN9KM8GARmG%2FHI%E6%BC%94%E7%BF%92-team03%3Fpage-id%3D1081%3A2%26node-id%3D1083-3%26viewport%3D344%2C570%2C0.35%26t%3DIj1qWezvOn3ENXg8-1%26scaling%3Dcontain%26content-scaling%3Dfixed',
          ],
        },
      },
    },
  ],
}

export const findDirectory = (
  directory: Directory,
  path: string[]
): Directory | undefined => {
  if (path.length === 0) return directory
  const [name, ...rest] = path
  const child = directory.children.find((child) => child.name === name)
  if (!child) return
  if ('action' in child) return
  return findDirectory(child, rest)
}
