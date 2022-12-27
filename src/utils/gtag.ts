/* eslint-disable @typescript-eslint/no-explicit-any */

export const { GA_TRACKING_ID } = process.env;

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag: any;
  }
}

const gtagService = {
  pageView: (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  },
  event: (
    action: string,
    category?: string,
    label?: string,
    value?: string,
  ) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  },
  search: (value: string) => {
    window.gtag('event', 'search', {
      search_term: value,
    });
  },
};
export default gtagService;
