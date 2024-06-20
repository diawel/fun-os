import Hls from 'hls.js'
import React, { forwardRef, useEffect, useRef } from 'react'

type VideoProps = Omit<React.ComponentProps<'video'>, 'children'>

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, ...args }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
      if (typeof ref === 'function') {
        ref(videoRef.current)
      } else if (ref) {
        ref.current = videoRef.current
      }
    }, [ref])

    useEffect(() => {
      if (videoRef.current && src?.endsWith('.m3u8')) {
        const hls = new Hls()
        hls.loadSource(src)
        hls.attachMedia(videoRef.current)
      }
    }, [src])

    return <video ref={videoRef} src={src} {...args} />
  }
)

export default Video
