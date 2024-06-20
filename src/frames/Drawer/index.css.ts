import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 1000,
  height: 600,
  display: 'grid',
  gridTemplateColumns: '3fr 1fr',
  backgroundColor: '#575C66',
  color: '#fff',
  padding: 10,
  gap: 10,
})

export const sidebar = style({
  padding: 16,
  borderRadius: 15,
  backgroundColor: '#303540',
})

export const field = style({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#303540',
})

export const artboard = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '80%',
  maxWidth: '80%',
  translate: '-50%, -50%',
  cursor: 'pointer',

  ':hover': {
    outline: '2px solid #32FFFF',
  },
})

export const navigationBox = style({
  display: 'flex',
  gap: 6,
  position: 'absolute',
  bottom: 10,
  right: 10,
})

export const navigationButton = style({
  paddingInline: 8,
  paddingBlock: 4,
  borderRadius: 5,
  backgroundColor: '#575C66',
  color: '#fff',
  cursor: 'pointer',
  border: 'none',
  fontSize: 12,
  fontWeight: 'bold',
})

export const inputLine = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  marginTop: 10,
})

export const inputBox = style({
  display: 'flex',
  gap: 4,
  fontSize: 14,
  alignItems: 'center',
})

export const input = style({
  backgroundColor: '#575C66',
  color: '#fff',
  border: 'none',
  borderBottom: '1px solid #fff',
  padding: 2,
  fontSize: 12,
  width: 60,

  ':focus': {
    outline: 'none',
  },

  ':disabled': {
    opacity: 0.5,
  },
})
