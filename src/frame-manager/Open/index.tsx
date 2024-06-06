import { useFrame } from '@/frame-manager/Provider/frame-context'

type OpenProps = {
  children: React.ReactNode
  frame: string
  params?: string[]
}

const Open = ({ children, frame, params = [] }: OpenProps) => {
  const { open } = useFrame()
  return <button onClick={() => open(frame, params)}>{children}</button>
}

export default Open
