import Image from 'next/image';
import styles from './image.module.scss';

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;
}

const CustomImage = ({
  src,
  width,
  height,
  alt,
  caption,
  layout = 'intrinsic',
}: Props) => {
  return (
    <figure className={styles.wrapper}>
      <div>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout={layout}
        />
        {caption && (
          <figcaption className={styles.caption}>{caption}</figcaption>
        )}
      </div>
    </figure>
  );
};
export default CustomImage;
