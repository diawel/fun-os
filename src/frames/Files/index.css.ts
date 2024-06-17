import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 720,
  height: 400,
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  backgroundColor: '#fff9e2',
  color: '#303540',
})

export const sidebar = style({
  padding: 16,
  backgroundColor: '#fff',
})

export const navbar = style({
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  height: 40,
})

export const currentDirectory = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
})

export const returnButton = style({
  background: 'none',
  height: '100%',
  padding: '0 8px',
  border: 'none',
  selectors: {
    '&[disabled]': {
      opacity: 0.3,
    },
  },
})
