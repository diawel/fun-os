import { useFrame } from '@/frame-manager/Provider/frame-context'

type OpenProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  frame: string
  params?: string[]
}

const Open = ({ children, frame, params = [], ...args }: OpenProps) => {
  const { open } = useFrame()
  return (
    <button onClick={() => open(frame, params)} {...args}>
      {children}
    </button>
  )
}

export default Open
