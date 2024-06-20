import { style } from '@vanilla-extract/css'

export const frame = style({
  width: 1000,
  height: 600,
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  gridTemplateRows: '2fr 1fr',
  backgroundColor: '#575C66',
  color: '#fff',
  padding: 10,
  gap: 10,
})

export const error = style({
  borderRadius: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#303540',
})

export const preview = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
})

export const mediapool = style({
  padding: 16,
  borderRadius: 15,
  backgroundColor: '#303540',
})

export const timeline = style({
  overflow: 'auto',
  borderRadius: 15,
  backgroundColor: '#303540',
  gridColumn: '1 / 3',
})

export const timelineInner = style({
  minWidth: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
})

export const timelineLine = style({
  height: 16,
  width: '100%',
})

export const timelineMediaLine = style({
  height: 54,
  width: '100%',
})
