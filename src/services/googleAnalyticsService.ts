import ReactGA from 'react-ga4';

let initialised = process.env.NEXT_PUBLIC_URL === 'https://lhowsam.com';
let gaTrackingId = '';

export const googleAnalyticsCookies = ['_ga', '_gid', '_gat'] as const;

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export function initGoogleAnalytics(trackingId: string) {
  if (!initialised && trackingId) {
    ReactGA.initialize(trackingId);
    ReactGA.set({ anonymizeIp: true });
    gaTrackingId = trackingId;
    initialised = true;

    // eslint-disable-next-line no-console
    console.log('GA initialized');
  }
}

export function enableGoogleAnalytics() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window[`ga-disable-${gaTrackingId}`] = false;
}
export function disableGoogleAnalytics() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window[`ga-disable-${gaTrackingId}`] = true;
}

export function logPageView() {
  if (initialised) {
    ReactGA.event({
      action: 'page_view',
      category: 'page_view',
      label: window.location.pathname,
    });
  }
}
export function logEvent({ category, action, label, value }: AnalyticsEvent) {
  if (initialised) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
}

export function logException(description: string, fatal = false) {
  if (initialised) {
    ReactGA.set({
      hitType: 'exception',
      exDescription: description,
      exFatal: fatal,
    });
  }
}

export function logOutboundLink(label: string, url: string, newTab?: boolean) {
  function openLink() {
    if (newTab) {
      window.open(url, '_blank');
    }
    document.location.href = url;
  }

  if (!initialised) {
    openLink();
    return;
  }

  function hitCallback() {
    openLink();
  }

  ReactGA.event(
    {
      action: 'outbound_link',
      category: 'outbound_link',
      label,
    },
    hitCallback(),
  );
}
