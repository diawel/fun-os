import { useFrame } from '@/frame-manager/Provider/frame-context'

type TransitionProps = {
  children: React.ReactNode
  params: string[]
}

const Transition = ({ children, params }: TransitionProps) => {
  const { transition } = useFrame()
  return <button onClick={() => transition(params)}>{children}</button>
}

export default Transition
