import createLocalStorageMock from '../src/test/createLocalStorageMock';
import mockDate from '../src/test/mockDate';

const originalError = console.error;

const domElementWarning = /Warning: React does not*/;
const forwardRefWarning = /Warning: Function components*/;
const trueForNonBoolProp = /Warning: React does not recognize the*/;

beforeAll(() => {
  console.error = (...args) => {
    if (
      domElementWarning.test(args[0]) ||
      forwardRefWarning.test(args[0]) ||
      trueForNonBoolProp.test(args[0])
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

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
