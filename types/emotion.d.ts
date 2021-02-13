import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryBackgroundColor;
      backgroundColor: string;
      secondaryBackgroundColor: string;
      primaryColor: string;
      darkTitleColor: string;
      BlueBackgroundColor: string;
      textColor: string;
      lightTextColor: string;
      textOnDisabled: string;
      PrimaryHoverColor: string;
      PrimaryFont: string;
    };
  }
}
