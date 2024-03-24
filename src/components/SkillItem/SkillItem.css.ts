import { variables } from '@frontend/styles/variables.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const skillIcon = style({
  marginRight: variables.spacing.lg,
});

export const skillText = style({
  alignItems: 'left',
  fontSize: '13px',
  textAlign: 'left',
  marginLeft: '5px',
});

export const bg = style({
  padding: '5px',
});

globalStyle(`${bg} > svg`, {
  marginRight: '5px',
  marginLeft: '5px',
});

export const flex = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  alignItems: 'left',
});
