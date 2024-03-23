import { visit } from 'unist-util-visit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const remarkCodeTitle = () => (tree: any) => {
  return visit(tree, 'code', node => {
    const nodeLang = node.lang || '';

    if (!nodeLang.includes(':')) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const language = nodeLang.slice(0, nodeLang.search(':'));
    const title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
    // eslint-disable-next-line no-param-reassign
    const data = node.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});

    // eslint-disable-next-line no-param-reassign
    node.lang = language;

    data['data-title'] = title;
    props['data-title'] = title;
  });
};
export default remarkCodeTitle;
