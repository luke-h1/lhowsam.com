/* eslint-disable */

import { blue, light, dark } from './Colors';
import { primaryFont } from './typography';

export const lightTheme = {
  backgroundColor: light[100],
  hoverColor: blue[200],
  FooterBorder: light[200],
  textColor: dark[100],
  blogColor: light[100],
  whiteTextColor: light[100],
  darkBlueBorder: blue[300],
  primaryFont,
};

export const darkTheme = {
  backgroundColor: dark[100],
  hoverColor: blue[200],
  textColor: light[100],
  blogColor: light[100],
  darkBlueBorder: blue[300],
  whiteTextColor: light[100],
  lightBackgroundColor: light[100],
  primaryFont,
};
