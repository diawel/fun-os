import { style, styleVariants } from '@vanilla-extract/css'

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
  display: 'flex',
  flexWrap: 'wrap',
})

export const mediapoolItem = style({
  width: 100,
  aspectRatio: '16 / 9',
  objectFit: 'cover',
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
  width: '100%',
  display: 'flex',
  position: 'relative',
  height: 16,
})

const timelineLabelBase = style({
  position: 'absolute',
  height: 16,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  paddingInline: 4,
  fontSize: 8,
  fontWeight: 'bold',
  color: '#fff',
})

export const timelineLabel = styleVariants({
  chapter: [timelineLabelBase, { backgroundColor: '#E80E69' }],
  se: [timelineLabelBase, { backgroundColor: '#08A258' }],
  bgm: [timelineLabelBase, { backgroundColor: '#0858A2' }],
})

export const timelineMedia = style({
  height: 54,
  backgroundSize: 'auto 100%',
  borderRadius: 5,
})
