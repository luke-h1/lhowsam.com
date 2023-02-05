import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { responsiveStyle } from '@frontend/utils/style';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
  margin: '0 auto',
  marginTop: '1rem',
  paddingTop: typography.spacing.xxl,
  paddingBottom: typography.spacing.xxl,
  paddingRight: typography.spacing.md,
  paddingLeft: typography.spacing.md,
  backgroundColor: theme.color.page,
});

export const container = style({
  margin: '0 auto',
  display: 'grid',
  rowGap: typography.spacing.lg,
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
  rowGap: typography.spacing.sm,
  color: theme.color.foregroundNeutral,
});

export const copy = style({
  gridColumn: '1 / -1',
  paddingTop: typography.spacing.lg,
  borderTop: `1px solid ${theme.color.border}`,
});
