import classNames from 'classnames';
import Image from 'next/image';
import styles from './BlogImage.module.scss';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className }: BlogImageProps) => {
  return (
    <span
      className={classNames(styles.wrapper, className)}
      data-testid="blog-image"
    >
      <Image
        src={src}
        blurDataURL={src}
        placeholder="blur"
        alt={alt}
        width={500}
        height={230}
        layout="responsive"
        quality={70}
      />
    </span>
  );
};
export default BlogImage;