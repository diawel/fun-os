import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 700,
  height: 400,
  justifyContent: 'center',
  gap: 10,
  overflow: 'auto',
  maxHeight: '100vh',
  backgroundColor: '#FFEDDC',
})

export const mainContainer = style({
  display: 'flex',
  paddingLeft: '43px',
  paddingTop: '46px',
  paddingBottom: '31px',
})

export const timelineContainer = style({

})

export const contentCardContainer = style({
  paddingLeft: '23px',
})

export const contentCard = style({
  paddingBottom: '48px',
})
