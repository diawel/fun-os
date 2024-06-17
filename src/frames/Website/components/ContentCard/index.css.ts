import { style } from '@vanilla-extract/css'

export const contentCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '513px',
  borderRadius: '25px',
  background: '#EFEFEF',
  boxShadow:
    '15px 7px 26.7px 0px rgba(255, 255, 255, 0.54)  inset, 0px 7px 53.8px 0px rgba(0, 0, 0, 0.12)',
})

export const content = style({
  width: '336px',

  padding: '23px 0 0 28px',
})

export const subjectName = style({
  color: '#E46BA5',
  // fontFamily: '"Heisei Maru Gothic Std"',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: 'normal',
})

export const subjectTheme = style({
  color: '#E46BA5',
  // fontFamily: '"Heisei Maru Gothic Std"',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: 'normal',
  whiteSpace: 'nowrap',

  padding: '0 0 8px 0',
})

export const subjectDescription = style({
  width: '336px',
  color: '#E46BA5',
  // fontFamily: '"Heisei Maru Gothic Std"',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
})

export const image = style({
  height: '233px',
  flexShrink: 0,
  borderRadius: '0 25px 25px 0',
})

// ボタンの配置に対してのスタイル
export const buttonContainer = style({
  paddingTop: '17px',
})
