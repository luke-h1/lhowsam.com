import clsx from 'clsx';
import type { ImageProps as NextImageProps } from 'next/legacy/image';
import NextImage from 'next/legacy/image';
import * as styles from './Image.css';

const Image = (
  props: NextImageProps & {
    rounded?: boolean;
    bordered?: boolean;
  },
) => {
  const { alt, rounded = false, bordered = false } = props;
  return (
    <div
      className={clsx(styles.root, {
        [styles.rounded]: rounded,
        [styles.bordered]: bordered,
      })}
    >
      <NextImage {...props} alt={alt} />
    </div>
  );
};

export { Image };
