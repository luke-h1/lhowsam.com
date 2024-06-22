import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const homeColumn = style({
  padding: '0rem 1rem 3rem',
  maxWidth: '1280px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  '@media': {
    '(max-width: 700px)': {
      padding: '0rem 0.5rem',
    },
  },
});

export const homeGreetingTile = style({
  marginTop: '1.5rem',
  marginBottom: '1rem',
  // marginLeft: 'clamp(-12px, calc((100vw - 350px) * -0.009), 0px)',
  fontSize: '64px',
  fontWeight: '390', // TODO: replace me with variable
  color: variables.color.text,
  transition: 'color 0.2s ease',
  lineHeight: 1.1,
  flexShrink: 0,

  '@media': {
    '(max-width: 700px)': {
      marginTop: '3rem',
      marginBottom: '1rem',
      fontSize: '42px',
      fontWeight: 420, // TODO: replace me with variable
    },
  },
});

export const tinyText = style({
  fontSize: '16px',
  color: variables.color.tabText,
  fontWeight: 380,
  letterSpacing: '0.15px',
  opacity: '0.9',
  paddingBottom: '8rem',

  '@media': {
    '(max-width: 900px)': {
      display: 'none',
    },
  },
});

export const reset = style({
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'color 0.1s ease',
  ':hover': {
    color: variables.color.linkContainerGrayBg,
  },
});

export const introContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  marginTop: '0px',
  marginBottom: '0px',

  '@media': {
    '(max-width: 1380px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
    },
    '(max-width: 1080px)': {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
    },
    '(max-width: 900px)': {
      display: 'none',
    },
  },
});

export const homeUpdatesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr) / repeat(4, 1fr)',
  columnGap: '0.75rem',
  rowGap: '0.75rem',
  paddingLeft: '0rem',
  justifyItems: 'stretch',
  alignItems: 'stretch',
  overflow: 'hidden',
  gridAutoRows: 0,
  '@media': {
    '(max-width: 1280px)': {
      gridTemplate: 'repeat(1, 1fr) / repeat(3, 1fr)',
    },
    '(max-width: 960px)': {
      gridTemplate: 'repeat(2, 1fr) / repeat(2, 1fr)',
    },
    '(max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const homeStoreGrid = style({
  display: 'grid',
  gridTemplate: 'repeat(1, 1fr) / repeat(4, 1fr)',
  columnGap: '0.75rem',
  rowGap: '0.75rem',
  paddingLeft: '0rem',
  justifyItems: 'stretch',
  alignItems: 'stretch',
  overflow: 'hidden',
  gridAutoRows: 0,
  marginTop: '0px',

  '@media': {
    '(max-width: 1280px)': {
      gridTemplate: 'repeat(1, 1fr) / repeat(3, 1fr)',
    },
    '(max-width: 960px)': {
      gridTemplate: 'repeat(2, 1fr) / repeat(2, 1fr)',
    },
  },
});

export const homeReadingGrid = style({
  display: 'grid',
  gridTemplate: 'repeat(2, 1fr) / repeat(4, 1fr)',
  columnGap: '0.75rem',
  rowGap: '0.75rem',
  paddingLeft: '0rem',
  justifyItems: 'stretch',
  alignItems: 'stretch',
  gridAutoRows: 0,
  overflow: 'hidden',

  '@media': {
    '(max-width: 1280px)': {
      gridTemplate: 'repeat(2, 1fr) / repeat(3, 1fr)',
    },
    '(max-width: 960px)': {
      gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
    },
    '(max-width: 700px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const homeGoodsGrid = style({
  display: 'grid',
  gridTemplate: 'repeat(1, 1fr) / repeat(5, 1fr)',
  columnGap: '0.5rem',
  rowGap: '0.5rem',
  paddingLeft: '0rem',
  justifyItems: 'stretch',
  overflow: 'hidden',
  gridAutoRows: 0,
  alignItems: 'start',
  '@media': {
    '(max-width: 1280px)': {
      gridTemplate: 'repeat(1, 1fr) / repeat(4, 1fr)',
    },
    '(max-width: 960px)': {
      gridTemplate: 'repeat(1, 1fr) / repeat(3, 1fr)',
    },
    '(max-width: 700px)': {
      gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
    },
  },
});

export const homeSectionContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '3rem',
});

export const homeSectionTitle = style({
  fontSize: '1.25rem',
  lineHeight: '170%',
  fontWeight: 550,
  color: variables.color.gray,
  transition: 'color 0.25s ease',
});

export const homeLinkButton = style({
  fontSize: variables.fontSize.lg,
  color: variables.color.gray,
  transition: 'background-color 0.075s ease-in, color 0.075s ease-in',

  ':hover': {
    color: variables.color.linkContainerGrayBg,
  },
});
