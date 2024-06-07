import { useFrame } from '@/frame-manager/Provider/frame-context'

type TransitionProps = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  params: string[]
}

const Transition = ({ children, params, ...args }: TransitionProps) => {
  const { transition } = useFrame()
  return (
    <button onClick={() => transition(params)} {...args}>
      {children}
    </button>
  )
}

export default Transition
