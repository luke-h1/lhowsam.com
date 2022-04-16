// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator';
import post from './post';
import project from './project';
import Tag from './tag';
import techStack from './techStack';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, project, techStack, Tag]),
});
