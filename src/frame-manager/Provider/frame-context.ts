import { createContext, useContext } from 'react'
import { NavigateOptions } from '.'

export const FrameContext = createContext<
  | {
      open: (frame: string, params: string[], options?: NavigateOptions) => void
      transition: (params: string[], options?: NavigateOptions) => void
    }
  | undefined
>(undefined)

export const useFrame = () => {
  const context = useContext(FrameContext)
  if (!context)
    throw new Error('useFrame must be used within a frame-manager/Provider')
  return context
}
