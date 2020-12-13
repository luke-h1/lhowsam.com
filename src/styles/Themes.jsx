/* eslint-disable */

import { blue, light, dark, neutral, green, yellow } from './Colors';
import { primaryFont, titleFont } from './typography';

export const lightTheme = { 
  primaryBackgroundColor: light[100],
  primaryColor: dark[100],
  darkTextColor: dark[100],
  primaryHoverColor: blue[100],
  primaryActiveColor: neutral[100],
  textColorOnPrimary: neutral[100],
  textColor: dark[100],
  textColorInverted: neutral[400],
  textOnDisabled: neutral[300],
  primaryNavColor: light[100],
  primaryFooterColor: light[100],
  PrimaryFooterBorder: light[100],
  primaryNavColor: light[100],
  primaryTitleColor: dark[100],
  primaryHoverColorYellow: yellow[100], 
  borderBottom: neutral[400],
  primaryFont,
}

export const darkTheme = {
  primaryBackgroundColor: dark[100],
  primaryColor: neutral[100],
  darkTextColor: dark[100],
  primaryHoverColor: blue[100],
  primaryActiveColor: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[400],
  textOnDisabled: neutral[300],
  primaryNavColor: dark[100],
  primaryFooterColor: dark[100],
  PrimaryFooterBorder: dark[100],
  primaryTitleColor: neutral[100],
  borderBottom: neutral[500],
  primaryFont,

}

