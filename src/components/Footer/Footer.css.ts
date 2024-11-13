import { variables } from '@frontend/styles/variables.css';
import { responsiveStyle } from '@frontend/utils/style.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  marginTop: 'auto',
  // width: '100%',
  paddingTop: variables.spacing.xxl,
  paddingBottom: variables.spacing.xxl,
  paddingRight: variables.spacing.md,
  paddingLeft: variables.spacing.md,
  backgroundColor: variables.color.page,
});

export const container = style({
  maxWidth: variables.contentWidth.container,
  margin: '0 auto',
  display: 'grid',
  rowGap: variables.spacing.lg,
  padding: variables.spacing.lg,
  ...responsiveStyle({
    sm: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    md: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  }),
});

export const links = style({
  display: 'grid',
  rowGap: variables.spacing.sm,
  ...responsiveStyle({
    sm: {
      marginTop: variables.spacing.sm,
    },
  }),
});

globalStyle(`${links} li`, {
  color: variables.color.foregroundNeutral,
});

export const note = style({
  gridColumn: '1 / -1',
  paddingTop: variables.spacing.lg,
});

export const copy = style({
  gridColumn: '1 / -1',
  paddingTop: variables.spacing.lg,
  borderTop: `1px solid ${variables.color.border}`,
});
