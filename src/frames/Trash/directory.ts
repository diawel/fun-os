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
  name: 'ごみ箱',
  children: [
    {
      name: '印刷用.ai',
      action: {
        open: {
          frame: 'drawer',
          params: ['授業', '情報デザインⅠ', 'SHIKIRI', '印刷用.ai'],
        },
      },
    },
    {
      name: 'バイト.ai',
      action: {
        open: {
          frame: 'preview',
          params: ['バイト 作業用.ai'],
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
