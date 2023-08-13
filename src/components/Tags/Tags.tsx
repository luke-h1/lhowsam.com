import { Tag } from '@frontend/types/sanity';
import Link from 'next/link';
import s from './Tags.module.scss';

interface Props {
  tags: Tag[];
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
          <li key={tag._id}>
            <Link href={`/${type}/tags/${tag.slug.current}`}>
              {`#${tag.title}`}
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default Tags;
