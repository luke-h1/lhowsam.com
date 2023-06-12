import cn from 'classnames';
import Image from 'next/legacy/image';
import s from './BlogImage.module.scss';

interface Props {
  src: string;
  alt: string;
  className?: string;
  onLoadingComplete?: () => void;
}

const BlogImage = ({ alt, src, className, onLoadingComplete }: Props) => {
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
        onLoadingComplete={onLoadingComplete}
      />
    </span>
  );
};
export default BlogImage;
