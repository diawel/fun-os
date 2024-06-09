import { style, styleVariants, globalStyle } from '@vanilla-extract/css'

const frameBase = style({
  position: 'absolute',
  backgroundColor: '#fff',
  border: '1px solid #000',
})

export const frame = styleVariants({
  active: [
    frameBase,
    {
      boxShadow: '0 0 0 2px #000',
    },
  ],
  inactive: [frameBase],
})

export const frameContent = style({
  selectors: {
    [`${frame.inactive} &`]: {
      pointerEvents: 'none',
    },
  },
})

export const navigation = style({})

globalStyle(`body:has(${navigation}[data-is-dragged="true"])`, {
  userSelect: 'none',
})
