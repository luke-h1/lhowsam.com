import logger from '@frontend/utils/logger';
import { produce, Immutable } from 'immer';
import {
  Dispatch,
  Reducer,
  ReducerWithoutAction,
  useCallback,
  useReducer,
} from 'react';

/* 
  This hook is a wrapper around the useReducer hook that logs the previous state, action, and next state to the console. 
  usage:
  const [state, dispatch] = useLoggedImmerReducer('reducerName', reducer, value);
*/
export default function useLoggedReducer<S, A>(
  name: string,
  reducer: Reducer<S, A>,
  initialState: S,
  initializer: ReducerWithoutAction<S>,
): [S, Dispatch<A>] {
  const cachedReducer = useCallback(
    (state: S, action: A) => {
      logger.debugGroup(`${name} reducer:`);
      logger.debug(
        '%cPrevious State:',
        'color: #9E9E9E; font-weight: 700;',
        state,
      );

      logger.debug('%cAction:', 'color: #00A7F7; font-weight: 700;', action);

      const nextState = reducer(state, action);

      logger.debug(
        '%cNext State:',
        'color: #47B04B; font-weight: 700;',
        nextState,
      );

      logger.debugGroupEnd();

      return nextState;
    },
    [name, reducer],
  );

  return useReducer(
    cachedReducer,
    initialState,
    initializer as ReducerWithoutAction<S>,
  );
}

export function useLoggedImmerReducer<S, A>(
  name: string,
  reducer: Reducer<S, A>,
  initialState: S,
  initializer?: ReducerWithoutAction<S>,
): [S & Immutable<S>, Dispatch<A>] {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cachedReducer = useCallback(produce(reducer), [reducer]);

  return useLoggedReducer(
    name,
    cachedReducer as never,
    initialState,
    initializer as ReducerWithoutAction<S>,
  ) as [S & Immutable<S>, Dispatch<A>];
}
