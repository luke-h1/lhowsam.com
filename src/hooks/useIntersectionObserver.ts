import { useEffect, useState, useRef } from 'react';

type IntersectionObserverOptions = Pick<
  IntersectionObserverInit,
  'rootMargin' | 'threshold'
>;

type ObserverCallback = (entry: IntersectionObserverEntry) => void;

type Observer = {
  key: string;
  intersectionObserver: IntersectionObserver;
  elementToCallback: Map<Element, ObserverCallback>;
};

const observe = (() => {
  const observers = new Map<string, Observer>();

  const createObserver = (options: IntersectionObserverOptions) => {
    const key = JSON.stringify(options);
    if (observers.has(key)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return observers.get(key)!;
    }

    const elementToCallback = new Map<Element, ObserverCallback>();
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const callback = elementToCallback.get(entry.target);
        if (callback) {
          callback(entry);
        }
      });
    });

    const observer = {
      key,
      intersectionObserver,
      elementToCallback,
    } as Observer;

    observers.set(key, observer);

    return observer;
  };

  return <T extends Element>(
    el: T,
    callback: ObserverCallback,
    options: IntersectionObserverOptions,
  ) => {
    const { key, intersectionObserver, elementToCallback } =
      createObserver(options);
    elementToCallback.set(el, callback);
    intersectionObserver.observe(el);

    const unobserve = () => {
      intersectionObserver.unobserve(el);
      elementToCallback.delete(el);

      if (elementToCallback.size === 0) {
        intersectionObserver.disconnect();
        observers.delete(key);
      }
    };

    return unobserve;
  };
})();

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  options: IntersectionObserverOptions,
) => {
  const unobserve = useRef<Map<T, () => void>>(new Map());

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const cleanup = () => {
    unobserve.current.forEach(callback => callback());
    unobserve.current.clear();
  };

  const oberserveElement = (el: T | null) => {
    if (!el) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    if (unobserve.current.has(el)) {
      unobserve.current.get(el)?.();
    }
    unobserve.current.set(el, observe(el, setEntry, options));
  };

  useEffect(() => {
    const map = unobserve.current;

    return () => {
      map.forEach(callback => callback());
      map.clear();
    };
  }, []);

  if (typeof window === 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return { entry: null, oberserveElement: () => {}, cleanup: () => {} };
  }
  return { entry, oberserveElement, cleanup };
};
