import { frameContent, navigation } from '@/frame-manager/Frame/index.css'
import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 540,
  height: 650,
  border: 'none',
  marginBottom: -8,

  selectors: {
    [`${navigation}[data-is-dragged="true"] + ${frameContent} > &`]: {
      pointerEvents: 'none',
    },
  },
})

export const empty = style({
  width: 540,
  height: 650,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 8,
})
