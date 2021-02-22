/* eslint-disable */
import { Theme } from '@emotion/react';
import { light, dark, blue, green, neutral } from './Colors';
import { PrimaryFont } from './Fonts';

export const theme: Theme = {
  colors: {
    primaryBackgroundColor: light[100],
    backgroundColor: '#fff',
    secondaryBackgroundColor: light[300],
    primaryColor: dark[100],
    darkTitleColor: light[100],
    BlueBackgroundColor: blue[100],
    textColor: dark[100],
    lightTextColor: light[100],
    textOnDisabled: light[200],
    PrimaryHoverColor: blue[300],
    PrimaryFont,
  },
};
