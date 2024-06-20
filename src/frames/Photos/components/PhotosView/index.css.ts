import { style } from '@vanilla-extract/css'

export const photos = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '25px 12px 0 12px',
})

export const image = style({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  cursor: 'pointer',
})

export const modal = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
})

export const modalContent = style({
  position: 'relative',
})

export const modalImage = style({
  maxWidth: '90%',
  maxHeight: '90%',
})

export const button = style({
  position: 'absolute',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '2em',
  cursor: 'pointer',
})

export const closeButton = style({
  top: '10px',
  right: '20px',
})

export const prevButton = style({
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
})

export const nextButton = style({
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
})
