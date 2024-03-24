import { variables } from '@frontend/styles/variables.css';
import { responsiveStyle } from '@frontend/utils/style.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  margin: '0 auto',
  marginTop: '1rem',
  paddingTop: variables.spacing.xxl,
  paddingBottom: variables.spacing.xxl,
  paddingRight: variables.spacing.md,
  paddingLeft: variables.spacing.md,
  backgroundColor: variables.color.page,
});

export const container = style({
  margin: '0 auto',
  display: 'grid',
  rowGap: variables.spacing.lg,
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
  color: variables.color.foregroundNeutral,
});

export const copy = style({
  gridColumn: '1 / -1',
  paddingTop: variables.spacing.lg,
  borderTop: `1px solid ${variables.color.border}`,
});
