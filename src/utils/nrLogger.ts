import { isServer } from '@frontend/hooks/isServer';
import { Dictionary } from '@frontend/types/util';

type ActionNames = 'log' | 'error' | 'warn' | 'trackData';

interface Logger {
  log: (payload: Dictionary<string>, actionName?: ActionNames) => void;
}

export const nrLogger: Logger = {
  log: (payload, actionName = 'log') => {
    if (!isServer) {
      if (window && window.newrelic) {
        window.newrelic.addPageAction(`lhowsam_${actionName}`, payload);
      }
    }
  },
};
