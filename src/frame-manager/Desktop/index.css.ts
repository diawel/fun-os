import { style } from '@vanilla-extract/css'

export const desktop = style({})

export const folders = style({
  color: 'white',
  fontWeight: 'bold',
  display: 'grid',
  gap: 16,
  justifyContent: 'flex-end',
  padding: '40px 80px 0 0',
})

export const iconWrapper = style({
  filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.2))',
})

export const textWrapper = style({
  filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.4))',
})
