import { frameContent, navigation } from '@/frame-manager/Frame/index.css'
import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 1080,
  height: 600,
  border: 'none',
  marginBottom: -8,

  selectors: {
    [`${navigation}[data-is-dragged="true"] + ${frameContent} > &`]: {
      pointerEvents: 'none',
    },
  },
})

export const slide = style({
  width: '60vw',
  height: '60vh',
  border: 'none',
})
