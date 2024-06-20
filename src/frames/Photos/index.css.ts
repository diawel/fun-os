import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 791,
  height: 599,
  display: 'grid',
  gridTemplateColumns: '1fr 4fr',
  color: '#303540',
})

export const sidebar = style({
  padding: 20,
  backgroundColor: '#F5F3E4',
  width: 166,
})

export const title = style({
  fontSize: '12px',
  padding: '15px 0 40px 0',
  fontWeight: 'bold',
})

export const sidebarButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  border: 'none',
  background: 'none',
  fontSize: 12,
  padding: '4px 8px',
  cursor: 'pointer',
  borderRadius: 4,
  fontWeight: 'bold',
  color: 'inherit',
})

export const main = style({
  overflowY: 'auto',
  scrollbarWidth: 'none',
})

export const navbar = style({
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '18px 0 10px 0',
  height: 40,
  position: 'sticky',
  top: 0,
})

export const currentDirectory = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: 20,
  paddingLeft: 23,
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
