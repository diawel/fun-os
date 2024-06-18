import { style } from '@vanilla-extract/css'

export const timeline = style({
  position: 'relative',
})

export const timelineArrow = style({
  height: '1650px',
  display: 'block',
  paddingLeft: '10px',
})

export const tagStart = style({
  position: 'absolute',
  top: '0',
})

export const tagMiddle = style({
  position: 'absolute',
  top: '34%',
})

export const tagEnd = style({
  position: 'absolute',
  top: '100%',
})
