import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';

const color = createGlobalThemeContract({
  appBg: 'color-app-bg',
  bg: 'color-bg',
  bgSticky: 'color-bg-sticky',
  menuLabel: 'color-menu-label',
  highlight: 'color-highlight',
  highlightHover: 'color-highlight-hover',
  highlightActiveBorder: 'color-highlight-active-border',
  tabBg: 'color-tab-bg',
  tabText: 'color-tab-text',
  linkContainerBg: 'color-link-container-bg',
  linkContainerGrayBg: 'color-link-container-gray-bg',
  linkContainerBorder: 'color-link-container-border',
  linkContainerBgHover: 'color-link-container-bg-hover',
  linkContainerBorderHover: 'color-link-container-border-hover',
  tabBorder: 'color-tab-border',
  overlayDarkness: 'color-overlay-darkness',
  modalBg: 'color-modal-bg',
  imageBg: 'color-image-bg',
  highlightInModal: 'color-highlight-in-modal',
  highlightInModalStroke: 'color-highlight-in-modal-stroke',
});

createGlobalTheme(':root.light', color, {
  appBg: 'rgb(248, 248, 248)',
  bg: '#fff',
  bgSticky: 'rgba(255, 255, 255, 0.746)',
  menuLabel: 'rgba(0, 0, 0, 0.825)',
  highlight: 'rgba(255, 255, 255, 0.95)',
  highlightHover: 'rgba(0, 0, 0, 0.04)',
  highlightActiveBorder: 'rgba(0, 0, 0, 0.064)',
  tabBg: 'rgba(0, 0, 0, 0.04)',
  tabText: 'rgba(0, 0, 0, 0.32)',
  linkContainerBg: 'rgb(255, 255, 255)',
  linkContainerGrayBg: 'rgb(251, 251, 251)',
  linkContainerBorder: 'rgb(245, 245, 245)',
  linkContainerBgHover: 'rgb(243, 243, 243)',
  linkContainerBorderHover: 'rgb(230, 230, 230)',
  tabBorder: 'rgb(240, 240, 240)',
  overlayDarkness: 'rgba(0 0 0 / 0.3)',
  modalBg: 'rgb(255, 255, 255)',
  imageBg: '#f9fafb',
  highlightInModal: 'rgba(0, 0, 0, 0.05)',
  highlightInModalStroke: 'rgba(0, 0, 0, 0.03)',
});

createGlobalTheme(':root.dark', color, {
  appBg: 'rgb(32, 32, 32)',
  bg: 'rgb(16, 16, 16)',
  bgSticky: 'rgba(16, 16, 16, 0.746)',

  menuLabel: 'rgba(255, 255, 255, 0.8)',
  highlight: 'rgba(255, 255, 255, 0.1)',
  highlightHover: 'rgba(255, 255, 255, 0.05)',
  highlightActiveBorder: 'rgba(255, 255, 255, 0.04)',
  tabBg: 'rgba(255, 255, 255, 0.06)',
  tabText: 'rgba(255, 255, 255, 0.372)',

  linkContainerBg: 'rgb(21, 21, 21)',
  linkContainerGrayBg: 'rgb(25, 25, 25)',
  linkContainerBorder: 'rgb(26, 26, 26)',
  linkContainerBgHover: 'rgb(42, 42, 42)',
  linkContainerBorderHover: 'rgb(45, 45, 45)',
  tabBorder: 'rgb(44, 44, 44)',
  overlayDarkness: 'rgba(0, 0, 0, 0.75)',
  modalBg: 'rgb(32, 32, 32)',
  imageBg: '#191919',
  highlightInModal: 'rgba(255, 255, 255, 0.11)',
  highlightInModalStroke: 'rgba(255, 255, 255, 0.08)',
});

const globals = createGlobalTheme(':root', {
  font: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    mono: "'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  fontSize: {
    sm: '12.3px',
    md: '13.5px',
    lg: '14.7px',
  },
  fontWeight: {
    normal: '400',
    bold: '575',
  },
  spacing: {
    none: '0',
    xs: '0.25rem',
    sm: '.5rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
    xxxxl: '4rem',
    auto: 'auto',
  },
  radius: {
    sm: '2px',
    md: '6px',
    lg: '10px',
    full: '9999px',
  },
});
export const variables = { ...globals, color };
