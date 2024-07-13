import { responsiveStyle } from '@frontend/styles/style.css';
import { variables } from '@frontend/styles/variables.css';
import { slate } from '@radix-ui/colors';
import { style } from '@vanilla-extract/css';

/* 
background: rgb(2,0,36);
background: -moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(62,182,108,1) 35%, rgba(0,212,255,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(62,182,108,1) 35%, rgba(0,212,255,1) 100%);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(62,182,108,1) 35%, rgba(0,212,255,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
*/

export const root = style({
  position: 'relative',
  display: 'grid',
  marginBottom: variables.spacing.xl,
  borderRadius: variables.radius.lg,
  overflow: 'hidden',
  ...responsiveStyle({
    sm: {
      aspectRatio: variables.aspectRatio['4/3'],
    },
    md: {
      aspectRatio: variables.aspectRatio['16/9'],
    },
  }),
  ':focus': {
    outline: 'transparent',
  },
  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: variables.color.outline,
  },
});

export const image = style({
  gridArea: '1/1',
  objectFit: 'cover',
});

export const overlay = style({
  position: 'relative',
  gridArea: '1/1',
  backgroundImage:
    'linear-gradient(to right top, rgba(0, 0, 0 .95), rgba(0, 0, 0, .25))',
  opacity: 0.9,
  transition: 'opacity ease-in-out 0.2s',
  selectors: {
    [`${root}:hover &`]: {
      opacity: 1,
    },
  },
});

export const content = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gridArea: '1/1',
  ...responsiveStyle({
    sm: {
      padding: variables.spacing.md,
    },
    md: {
      padding: variables.spacing.xl,
    },
  }),
});

export const heading = style({
  color: '#fff',
  '::before': {
    content: '',
    marginBottom: variables.spacing.sm,
    display: 'block',
    width: '1.2rem',
    height: '1.2rem',
    backgroundColor: variables.color.highlight,
    borderRadius: variables.radius.full,
  },
});

export const description = style({
  color: slate.slate7,
});
