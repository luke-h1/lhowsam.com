import { MDXRemote } from 'next-mdx-remote';

interface Props {
  compiledSource: string;
}

const ContentRenderer = ({ compiledSource }: Props) => {
  return (
    <MDXRemote
      compiledSource={compiledSource}
      scope={undefined}
      frontmatter={undefined}
    />
  );
};
export default ContentRenderer;
