import classNames from 'classnames';
import NextImage from 'next/image';
import { ComponentProps, useState } from 'react';
import * as styles from './Image.css';

type Props = ComponentProps<typeof NextImage>;

const Image = ({ width, alt, height, src, ...props }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <NextImage
      {...props}
      width={width}
      height={height}
      alt={alt}
      src={src}
      className={classNames(
        loading ? styles.ImageLoading : styles.ImageLoaded,
        styles.ImageTransition,
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
export default Image;
