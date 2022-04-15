/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
import post from './post';
import project from './project';
import Tag from './tag';
import techStack from './techStack';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, project, techStack, Tag]),
});
