import { style } from '@vanilla-extract/css'

export const header = style({
  backgroundColor: '#E46BA5',
  width: '100%',
  color: '#FFF',
  // fontFamily: '"Heisei Maru Gothic Std"',
  height: '160px',
  borderRadius: '0 0 24px 24px',
})

export const headerContent = style({
  padding: '30px 0 0 43px',
})

export const universityName = style({
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: 'normal',
})

export const courseName = style({
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: 'normal',

  padding: '3px 0 14px 0',
})

export const courseDescription = style({
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
})
