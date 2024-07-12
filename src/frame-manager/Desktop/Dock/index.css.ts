import { style } from '@vanilla-extract/css'

export const dock = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',

  backgroundColor: 'rgba(255, 255, 255, 0.10)',
  boxShadow:
    '0px 7px 53.8px 0px rgba(0, 0, 0, 0.12), 15px 7px 26.7px 0px rgba(255, 255, 255, 0.54) inset',
  backdropFilter: 'blur(12.850000381469727px)',
  borderRadius: '25px',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  padding: '0 30px',
  marginBottom: '17px',
})

export const icon = style({
  padding: '17px 7px',
})
