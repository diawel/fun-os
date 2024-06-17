import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 720,
  height: 400,
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
})

export const sidebar = style({
  padding: 16,
  borderRight: '1px solid #ccc',
})
