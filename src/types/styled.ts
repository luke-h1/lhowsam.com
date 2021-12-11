import 'styled-components';

export type GlobalThemeObject = {
  theme?: 'light' | 'dark';
  getCSSVarValue: (variable: string) => string | undefined;
  changeThemeVariant: (type: GlobalThemeObject['theme']) => void;
};

export type ThemeObjectInitial = Pick<GlobalThemeObject, 'theme'>;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends GlobalThemeObject {}
}
