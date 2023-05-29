import { theme } from '@frontend/styles/theme.css';
import { typography } from '@frontend/styles/typography.css';
import { style } from '@vanilla-extract/css';

export const root = style({
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',
});

export const heading = style({
  padding: typography.spacing.sm,
  fontSize: typography.fontSize.sm,
  color: theme.color.foregroundNeutral,
  textTransform: 'uppercase',
});

export const cell = style({
  padding: typography.spacing.sm,
  borderTop: '1px solid',
  borderColor: theme.color.border,
});
