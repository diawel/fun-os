import { style } from '@vanilla-extract/css'

export const timeline = style({
  position: 'relative',
})

export const timelineArrow = style({
  width: '62px',
  display: 'block',
})

export const tagStart = style({
  position: 'absolute',
  top: '0',
})

export const tagMiddle = style({
  position: 'absolute',
  top: '50%', //WIP
})

export const tagEnd = style({
  position: 'absolute',
  top: '100%',
})
