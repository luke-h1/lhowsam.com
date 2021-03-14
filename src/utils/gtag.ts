export const { GA_TRACKING_ID } = process.env;

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag: any;
  }
}

/* eslint-disable */
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: { action: string, category: string, label: string, value: string }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
