import { variables } from '@frontend/styles/variables.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginTop: variables.spacing.md,
});

export const label = style({
  fontSize: '1rem',
  color: variables.color.foregroundNeutral,
});

export const select = style({
  width: '50%',
  padding: '0.5rem',
  border: `1px solid ${variables.color.border}`,
  color: variables.color.foregroundNeutral,

  borderRadius: '4px',
  fontSize: '1rem',
  appearance: 'none',
  cursor: 'pointer',
  ':focus': {
    outline: 'none',
    borderColor: variables.color.border,
    boxShadow: `0 0 0 3px ${variables.color.borderFaint}`,
  },
});

export const hint = style({
  fontSize: '0.875rem',
  color: variables.color.page,
});
