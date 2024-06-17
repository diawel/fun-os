import Icon from '@/components/Icon'

type File = {
  name: string
  icon?: Omit<React.ComponentProps<typeof Icon>, 'size'>
  action: {
    open: {
      frame: string
      params: string[]
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
          children: [],
        },
        {
          name: '情報表現基礎Ⅲ',
          children: [
            {
              name: 'ツミ！',
              children: [],
            },
            {
              name: 'WORD HUNTER',
              children: [],
            },
            {
              name: 'DATU',
              children: [],
            },
            {
              name: 'SAMURAI SHADOWS',
              children: [],
            },
            {
              name: 'INTERSTELLAR',
              children: [],
            },
            {
              name: 'ゴーストれ！',
              children: [],
            },
            {
              name: 'Byte',
              children: [],
            },
            {
              name: 'チエカバナナ',
              children: [],
            },
            {
              name: 'ぽりりずむ',
              children: [],
            },
            {
              name: '5to1',
              children: [],
            },
          ],
        },
        {
          name: '情報デザインⅡ',
          children: [],
        },
      ],
    },
    {
      name: '展示会',
      children: [
        {
          name: 'のび 2023.7',
          children: [],
        },
        {
          name: 'FUN!tasista! 2024.2',
          children: [],
        },
      ],
    },
    {
      name: 'バイト 作業用.ai',
      action: {
        open: {
          frame: 'counter',
          params: [],
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
