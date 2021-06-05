/* eslint-disable */
// @ts-ignore
import { cacheExchange, Resolver, Cache } from '@urql/exchange-graphcache';
import {
  dedupExchange,
  Exchange,
  fetchExchange,
  stringifyVariables,
} from 'urql';
import { pipe, tap } from 'wonka';
import Router from 'next/router';

import { isServer } from './isServer';

const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        if (error?.message.includes('Not Authenticated')) {
          Router.replace('/login');
        }
      })
    );
  };

// const cursorPagination = (): Resolver => {
//   return (_parent, fieldArgs, cache, info) => {
//     const { parentKey: entityKey, fieldName } = info;
//     const allFields = cache.inspectFields(entityKey);
//     const fieldInfos = allFields.filter((info) => info.fieldName === fieldName);
//     const size = fieldInfos.length;
//     if (size === 0) {
//       return undefined;
//     }
//     const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
//     const inTheCache = cache.resolve(
//       cache.resolve(entityKey, fieldKey) as string,
//       'todos',
//     );
//     info.partial = !inTheCache;
//     let hasMore = true;
//     const results: string[] = [];
//     fieldInfos.forEach((fi) => {
//       const key = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string;
//       const data = cache.resolve(key, 'todos') as string[];
//       const _hasMore = cache.resolve(key, 'hasMore');
//       if (!_hasMore) {
//         hasMore = _hasMore as boolean;
//       }
//       results.push(...data);
//     });
//     return {
//       __typename: 'PaginatedTodos',
//       hasMore,
//       todos: results,
//     };
//   };
// };

// function invalidateAllTodos(cache: Cache) {
//   const allFields = cache.inspectFields('Query');
//   const fieldInfos = allFields.filter((info) => info.fieldName === 'todos');
//   fieldInfos.forEach((fi) => {
//     cache.invalidate('Query', 'todos', fi.arguments || {});
//   });
// }

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  let cookie = '';
  if (isServer()) {
    cookie = ctx?.req?.headers?.cookie;
  }
  return {
    url: process.env.NEXT_PUBLIC_API_URL as string,
    fetchOptions: {
      credentials: 'include' as const,
      headers: cookie ? { cookie } : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          PaginatedTodos: () => null,
        },
        // resolvers: {
        //   Query: {
        //     todos: cursorPagination(),
        //   },
        // },
        updates: {
          //   Mutation: {
          //     deleteTodo: (_result, args, cache) => {
          //       cache.invalidate({
          //         __typename: 'Todo',
          //         id: (args as DeleteTodoMutationVariables).id,
          //       });
          //     },
          //     createTodo: (_result, args, cache) => {
          //       invalidateAllTodos(cache);
          //     },
          //     login: (_result, args, cache) => {
          //       CustomUpdateQuery<LoginMutation, MeQuery>(
          //         cache,
          //         { query: MeDocument },
          //         _result,
          //         (result, query) => {
          //           if (result.login.errors) {
          //             return query;
          //           }
          //           return {
          //             me: result.login.user,
          //           };
          //         },
          //       );
          //       invalidateAllTodos(cache);
          //     },
          //     register: (_result, args, cache) => {
          //       CustomUpdateQuery<RegisterMutation, MeQuery>(
          //         cache,
          //         { query: MeDocument },
          //         _result,
          //         (result, query) => {
          //           if (result.register.errors) {
          //             return query;
          //           }
          //           return {
          //             me: result.register.user,
          //           };
          //         },
          //       );
          //     },
          //     logout: (_result, args, cache) => {
          //       CustomUpdateQuery<LogoutMutation, MeQuery>(
          //         cache,
          //         { query: MeDocument },
          //         _result,
          //         () => ({ me: null }),
          //       );
          //     },
          //   },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};
