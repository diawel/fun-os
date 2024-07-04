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
  alignContent: 'flex-start',
  overflow: 'auto',
})

export const mediapoolItem = style({
  width: 100,
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  borderRadius: 5,
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
  justifyContent: 'flex-end',
  flexDirection: 'column',
  position: 'relative',
})

export const timelineLine = style({
  width: '100%',
  display: 'flex',
  position: 'relative',
  height: 24,
})

export const timelineChapterLine = style({
  width: '100%',
  display: 'flex',
  position: 'relative',
  height: 78,
})

export const chapterBox = style({
  position: 'absolute',
  height: '100%',
  cursor: 'pointer',
})

const timelineLabelBase = style({
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  paddingInline: 8,
  fontSize: 12,
  fontWeight: 'bold',
  color: '#fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const timelineLabel = styleVariants({
  chapter: [
    timelineLabelBase,
    {
      backgroundColor: '#E80E69',
      width: 'fit-content',
      height: 24,
      maxWidth: '100%',
    },
  ],
  se: [
    timelineLabelBase,
    { backgroundColor: '#08A258', position: 'absolute', height: '100%' },
  ],
  bgm: [
    timelineLabelBase,
    { backgroundColor: '#0858A2', position: 'absolute', height: '100%' },
  ],
})

export const timelineMedia = style({
  height: 54,
  width: '100%',
  backgroundSize: 'auto 100%',
  borderRadius: 5,
})

export const timelineCursor = style({
  position: 'absolute',
  width: 2,
  height: '100%',
  backgroundColor: '#F3280C',
})
