/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: string): void => {
  window.gtag('config', process.env.GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const search = (value: string): void => {
  window.gtag('event', 'search', {
    search_term: value,
  });
};
