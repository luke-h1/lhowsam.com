import createLocalStorageMock from '../src/test/createLocalStorageMock';
import mockDate from '../src/test/mockDate';

beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn();

  window.scroll = jest.fn();
  window.scrollTo = jest.fn();

  window.navigator.clipboard = {
    writeText: jest.fn(),
  };

  URL.createObjectURL = jest.fn();
});

beforeEach(() => {
  // eslint-disable-next-line no-underscore-dangle
  window.localStorage = createLocalStorageMock();

  window.matchMedia = jest.fn(() => {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
      matches: true,
    };
  });

  delete window.ResizeObserver;

  window.ResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.location.hash = '';

  // Cleanup any fake timers that have been set, or
  // these will leak out to other test cases.
  if (jest.isMockFunction(setTimeout) || setTimeout.clock) {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  }

  mockDate.reset();
});
