import { style } from '@vanilla-extract/css'

export const video = style({
  width: 720,
  aspectRatio: '16 / 9',
  marginBottom: -8,
})

export const error = style({
  width: 720,
  aspectRatio: '16 / 9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 8,
})
