import { Heading as HeadingVariant } from '@frontend/types/mdx';
import classNames from 'classnames';
import slugify from 'slugify';
import styles from './Heading.module.scss';

interface Props {
  slug: string;
  as: HeadingVariant;
  url: string;
}

const Heading = ({ as: Element, slug, url }: Props) => {
  const id = slugify(slug, { lower: true });

  return (
    <Element id={id} className={classNames(styles.heading, styles[Element])}>
      <a id={id} href={`${url}/#${id}`} aria-hidden="true" tabIndex={-1}>
        <span />
      </a>
      {slug}
    </Element>
  );
};

export default Heading;
