import { BREAKPOINTS, Breakpoint } from './style';

const getBreakpointOrSize = (breakpoint: Breakpoint | number) => {
  if (typeof breakpoint === 'string') {
    return BREAKPOINTS[breakpoint];
  }
  return breakpoint;
};
export default getBreakpointOrSize;
