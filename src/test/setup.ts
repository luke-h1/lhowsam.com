import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

if (!HTMLElement.prototype.scrollIntoView) {
  HTMLElement.prototype.scrollIntoView = vi.fn();
}

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class MockResizeObserver implements ResizeObserver {
    // eslint-disable-next-line class-methods-use-this
    observe(): void {}

    // eslint-disable-next-line class-methods-use-this
    unobserve(): void {}

    // eslint-disable-next-line class-methods-use-this
    disconnect(): void {}
  };
}
