import cn from 'classnames';
import Image from 'next/legacy/image';
import s from './BlogImage.module.scss';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const BlogImage = ({ alt, src, className }: Props) => {
  return (
    <span className={cn(s.wrapper, className)}>
      <Image
        src={src}
        alt={alt}
        width={2024}
        height={1012}
        layout="responsive"
        blurDataURL={src}
        placeholder="blur"
      />
    </span>
  );
};
export default BlogImage;
