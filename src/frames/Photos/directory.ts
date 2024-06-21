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
  name: '',
  children: [
    {
      name: '全ての写真',
      children: [],
    },
    {
      name: 'アルバム',
      children: [],
    },
    {
      name: '仮想生物',
      children: [
        {
          name: '1',
          children: [],
        },
        {
          name: '2',
          children: [],
        },
        {
          name: '3',
          children: [],
        },
      ],
    },
    {
      name: '「のび」',
      children: [],
    },
    {
      name: 'FUN!tasista!',
      children: [],
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
