import Frame from '@/frame-manager/Frame'
import { useEffect, useState } from 'react'
import { FrameContext } from './frame-context'

type FrameProps = {
  params: string[]
}
export type FrameContent = React.FC<FrameProps>
export type ParamValidator = (params: string[]) => string[]

type FrameNode = {
  frame: string
  params: string[]
  key: number
  position: { x: number; y: number }
}
type Frames = {
  [key: string]: {
    frame: FrameContent
    validator?: ParamValidator
    backgroundColor?: string
  }
}

export type NavigateOptions = {
  replace?: boolean
}

let keySeed = Date.now()

const isParamsEqual = (a: string[], b: string[]) =>
  a.length === b.length && a.every((param, index) => param === b[index])

const findSameFrameIndex = (frameStack: FrameNode[], target: FrameNode) =>
  frameStack.findIndex(
    (frame) =>
      frame.frame === target.frame && isParamsEqual(frame.params, target.params)
  )

const generateFrameNode = (
  frames: Frames,
  { frame, params, key, position }: FrameNode
) => {
  const { validator } = frames[frame]
  return {
    frame,
    params: validator ? validator(params) : params,
    key,
    position,
  }
}

const slug = location.pathname.split('/').slice(1).map(decodeURIComponent)
const getInitialFrameStack = (frames: Frames) => {
  if (history.state?.frameStack) return history.state.frameStack
  console.log(slug)
  const frame = slug.length && slug[0] ? slug[0] : 'website'
  if (!frames[frame]) {
    window.history.replaceState({ frameStack: [] }, '', '/')
    return []
  }
  const frameNode = generateFrameNode(frames, {
    frame,
    params: slug.slice(1),
    key: keySeed++,
    position: { x: 0.05, y: 0.05 },
  })
  window.history.replaceState(
    { frameStack: [frameNode] },
    '',
    `/${frame}/${frameNode.params.join('/')}`
  )
  return [frameNode]
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
        `/${frame}/${params
          .map((param) => encodeURIComponent(param))
          .join('/')}`
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
      position: frameStack.length
        ? {
            x:
              ((frameStack[frameStack.length - 1].position.x - 0.03) % 0.9) +
              0.05,
            y:
              ((frameStack[frameStack.length - 1].position.y - 0.03) % 0.9) +
              0.05,
          }
        : { x: 0.05, y: 0.05 },
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

  const focus = (index: number) => {
    navigate([
      ...frameStack.slice(0, index),
      ...frameStack.slice(index + 1),
      frameStack[index],
    ])
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
      {frameStack
        .map((frameNode, index) => ({ ...frameNode, nodeIndex: index }))
        .sort((a, b) => a.key - b.key)
        .map(({ frame, params, key, position, nodeIndex }) => {
          const { frame: Component } = frames[frame]
          const isActive = nodeIndex === frameStack.length - 1
          return (
            <Frame
              key={key}
              state={isActive ? 'active' : 'inactive'}
              onFocus={() => (isActive ? {} : focus(nodeIndex))}
              onClose={() => close(nodeIndex)}
              onMove={(position) => {
                const modifiedFrameStack = [...frameStack]
                modifiedFrameStack[nodeIndex].position = position
                navigate(modifiedFrameStack, { replace: true })
              }}
              priority={nodeIndex}
              {...{ position }}
            >
              <Component key={key} {...{ params }} />
            </Frame>
          )
        })}
    </FrameContext.Provider>
  )
}

export default Provider
