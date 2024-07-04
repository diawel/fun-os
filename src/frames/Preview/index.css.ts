import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 400,
  height: 400,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = style({
  maxHeight: '80vh',
  maxWidth: '80vh',
  marginBottom: -8,
})
