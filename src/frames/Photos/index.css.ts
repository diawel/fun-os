import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 791,
  height: 599,
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  color: '#303540',
})

export const sidebar = style({
  padding: 16,
  backgroundColor: '#F5F3E4',
})

export const sidebarButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  border: 'none',
  background: 'none',
  fontSize: 14,
  padding: '4px 8px',
  cursor: 'pointer',
  borderRadius: 4,
  fontWeight: 'bold',
  color: 'inherit',
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
  gap: 4,
})

export const returnButton = style({
  background: 'none',
  height: '100%',
  padding: '0 8px',
  border: 'none',
  cursor: 'pointer',
  selectors: {
    '&[disabled]': {
      opacity: 0.3,
      cursor: 'default',
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
  fontWeight: 'bold',
  fontSize: 14,
})
