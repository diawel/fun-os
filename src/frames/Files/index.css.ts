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

export const main = style({
  overflowY: 'auto',
})

export const navbar = style({
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  height: 40,
  position: 'sticky',
  top: 0,
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

export const entityList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 100px)',
  gap: 16,
  padding: 16,
  overflowY: 'auto',
  justifyItems: 'center',
})
