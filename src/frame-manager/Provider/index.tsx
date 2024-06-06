import Frame from '@/frame-manager/Frame'
import { Attributes, useEffect, useState } from 'react'
import { FrameContext } from './frame-context'

type FrameProps = {
  params: string[]
}
export type FrameContent = React.FC<FrameProps>
export type ParamValidator = (params: string[]) => string[]

type FrameNode = {
  frame: string
  params: string[]
  key: Attributes['key']
}
type Frames = {
  [key: string]: {
    frame: FrameContent
    validator?: ParamValidator
  }
}

export type NavigateOptions = {
  replace?: boolean
}

let keySeed = 0

const isParamsEqual = (a: string[], b: string[]) =>
  a.length === b.length && a.every((param, index) => param === b[index])

const findSameFrameIndex = (frameStack: FrameNode[], target: FrameNode) =>
  frameStack.findIndex(
    (frame) =>
      frame.frame === target.frame && isParamsEqual(frame.params, target.params)
  )

const generateFrameNode = (
  frames: Frames,
  { frame, params, key }: FrameNode
) => {
  const { validator } = frames[frame]
  return {
    frame,
    params: validator ? validator(params) : params,
    key,
  }
}

const getInitialFrameStack = (frames: Frames) => {
  const slug = location.pathname.split('/').slice(1)
  if (!slug.length) return []
  const frame = slug[0]
  if (!frames[frame]) {
    window.history.replaceState({ frameStack: [] }, '', '/')
    return []
  }
  return [
    generateFrameNode(frames, { frame, params: slug.slice(1), key: keySeed++ }),
  ]
}

type ProviderProps = {
  children?: React.ReactNode
  frames: Frames
}

const Provider = ({ children, frames }: ProviderProps) => {
  const [frameStack, setFrameStack] = useState<FrameNode[]>(
    getInitialFrameStack(frames)
  )

  const navigate = (frameStack: FrameNode[], options?: NavigateOptions) => {
    if (frameStack.length === 0)
      window.history[options?.replace ? 'replaceState' : 'pushState'](
        { frameStack },
        '',
        '/'
      )
    else if (frameStack !== window.history.state?.frameStack) {
      const { frame, params } = frameStack[frameStack.length - 1]
      window.history[options?.replace ? 'replaceState' : 'pushState'](
        { frameStack },
        '',
        `/${frame}/${params.join('/')}`
      )
    }
    setFrameStack(frameStack)
  }

  const open = (frame: string, params: string[], options?: NavigateOptions) => {
    if (!frames[frame]) throw new Error(`Frame ${frame} not found`)
    const { validator } = frames[frame]
    const currentFrame = generateFrameNode(frames, {
      frame,
      params: validator ? validator(params) : params,
      key: keySeed++,
    })
    const sameFrameIndex = findSameFrameIndex(frameStack, currentFrame)

    if (sameFrameIndex === -1)
      navigate([...frameStack, { ...currentFrame }], options)
    else if (sameFrameIndex < frameStack.length - 1)
      navigate(
        [
          ...frameStack.slice(0, sameFrameIndex),
          ...frameStack.slice(sameFrameIndex + 1),
          frameStack[sameFrameIndex],
        ],
        options
      )
  }

  const transition = (params: string[], options?: NavigateOptions) => {
    const currentFrame = frameStack[frameStack.length - 1]
    const { validator } = frames[currentFrame.frame]
    navigate(
      [
        ...frameStack.slice(0, frameStack.length - 1),
        generateFrameNode(frames, {
          ...currentFrame,
          params: validator ? validator(params) : params,
        }),
      ],
      options
    )
  }

  const close = (index: number) => {
    navigate([...frameStack.slice(0, index), ...frameStack.slice(index + 1)])
  }

  useEffect(() => {
    const onPopState = ({ state }: PopStateEvent) => {
      if (!state) return
      setFrameStack(state.frameStack)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <FrameContext.Provider value={{ open, transition }}>
      {children}
      {frameStack.map(({ frame, params, key }, index) => {
        const { frame: Component } = frames[frame]

        return (
          <Frame
            key={key}
            state={index === frameStack.length - 1 ? 'active' : 'inactive'}
            position={{ x: Number(key) * 0.02, y: Number(key) * 0.02 }}
            onFocus={() => open(frame, params)}
            onClose={() => close(index)}
          >
            <Component key={key} {...{ params }} />
          </Frame>
        )
      })}
    </FrameContext.Provider>
  )
}

export default Provider
