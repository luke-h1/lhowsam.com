import NextImage from 'next/image';
import styles from './Image.module.scss';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt, width, height }: Props) => {
  return (
    <figure className={styles.wrapper}>
      <NextImage
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
      {alt && <figcaption className={styles.caption}>{alt}</figcaption>}
    </figure>
  );
};

export default Image;
