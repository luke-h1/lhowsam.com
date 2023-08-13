import Link from 'next/link';
import s from './Tags.module.scss';

interface Props {
  tags: {
    __typename?: 'Tag';
    id: string;
    title: string;
    slug: string;
  }[];
  type?: 'projects' | 'blog';
}

const Tags = ({ tags, type = 'blog' }: Props) => {
  if (!tags.length) {
    return null;
  }
  return (
    <ul className={s.tags}>
      {tags &&
        tags.map(tag => (
          <li key={tag.id}>
            <Link href={`/${type}/tags/${tag.slug}`}>{`#${tag.title}`}</Link>
          </li>
        ))}
    </ul>
  );
};
export default Tags;
