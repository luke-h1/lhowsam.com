import { useStatsigClient } from '@statsig/react-bindings';
import { useEffect } from 'react';

type TrackedElement = HTMLElement & {
  dataset: DOMStringMap & {
    analyticsEvent?: string;
    analyticsLabel?: string;
    analyticsSurface?: string;
    analyticsHref?: string;
    analyticsType?: string;
  };
};

export default function StatsigClickTracker() {
  const { logEvent } = useStatsigClient();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<TrackedElement>(
        '[data-analytics-event]',
      );

      if (!trackedElement?.dataset.analyticsEvent) {
        return;
      }

      const metadata: Record<string, string> = {
        type:
          trackedElement.dataset.analyticsType ??
          trackedElement.tagName.toLowerCase(),
      };

      const label = trackedElement.dataset.analyticsLabel;
      const surface = trackedElement.dataset.analyticsSurface;
      const href =
        trackedElement.dataset.analyticsHref ??
        trackedElement.getAttribute('href') ??
        null;

      if (label) {
        metadata.label = label;
      }

      if (surface) {
        metadata.surface = surface;
      }

      if (href) {
        metadata.href = href;
      }

      logEvent(trackedElement.dataset.analyticsEvent, undefined, metadata);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [logEvent]);

  return null;
}
