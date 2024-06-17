import { style, styleVariants, globalStyle } from '@vanilla-extract/css'

const frameBase = style({
  position: 'absolute',
  overflow: 'hidden',
  borderRadius: 20,
})

export const frame = styleVariants({
  active: [
    frameBase,
    {
      boxShadow: '0 16px 32px rgb(0 0 0 / 30%)',
    },
  ],
  inactive: [
    frameBase,
    {
      boxShadow: '0 12px 24px rgb(0 0 0 / 10%)',
    },
  ],
})

export const frameContent = style({
  selectors: {
    [`${frame.inactive} &`]: {
      pointerEvents: 'none',
    },
  },
})

export const navigation = style({
  backgroundColor: '#ddd',
  boxShadow:
    'inset -4px -4px 10px rgb(0 0 0 / 10%), inset 6px 6px 10px rgb(255 255 255 / 70%), 0 4px 24px rgb(0 0 0 / 20%)',
  height: 36,
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
})

export const closeButton = style({
  backgroundColor: '#df3232',
  width: 16,
  aspectRatio: '1',
  borderRadius: '50%',
  border: 'none',
  boxShadow: 'inset 0 0 3px rgb(255 255 255 / 50%), 0 1px 1px rgb(0 0 0 / 25%)',
  cursor: 'pointer',
})

globalStyle(`body:has(${navigation}[data-is-dragged="true"])`, {
  userSelect: 'none',
})
