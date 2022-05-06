import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import post from './post';
import project from './project';
import Tag from './tag';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, project, Tag]),
});
