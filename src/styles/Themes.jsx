/* eslint-disable */

import { blue, light, dark, neutral } from './Colors';
import { primaryFont } from './typography';


export const lightTheme = { 
  primaryBackgroundColor: light[100],
  primaryColor: dark[100],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  textColorOnPrimary: neutral[100],
  textColor: dark[100],
  textColorInverted: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
}

export const darkTheme = {
  primaryBackgroundColor: dark[100],
  primaryColor: neutral[100],
  primaryHoverColor: green[100],
  primaryActiveColor: neutral[300],
  textColor: neutral[600],
  textColorInverted: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,

}

