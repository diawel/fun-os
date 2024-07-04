import { style } from '@vanilla-extract/css'

export const button = style({
  padding: 6,
  border: 'none',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexDirection: 'column',
  gap: 8,
  fontWeight: 'bold',
  fontSize: 12,
})
