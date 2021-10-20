/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
import blog from './blog';
import project from './project';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([blog, project]),
});
