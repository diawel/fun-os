import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 500,
  height: 300,
  maxWidth: '30vw',
  maxHeight: '30vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
})
