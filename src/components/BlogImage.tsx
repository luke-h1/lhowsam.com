import classNames from 'classnames';
import Image from 'next/image';
import styles from './blogimage.module.scss';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ src, alt, className }: BlogImageProps) => {
  return (
    <span className={classNames(styles.wrapper, className)}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={250}
        layout="responsive"
        priority
      />
    </span>
  );
};
export default BlogImage;
