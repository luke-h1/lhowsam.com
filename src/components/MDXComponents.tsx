/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageProps } from 'next/legacy/image';
import Heading from './Heading/Heading';
import { Image } from './Image/Image';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Link from './Link/Link';
import Text from './Text/Text';

const MDXComponents = {
  ImageCarousel,
  Image: (props: ImageProps & { rounded?: boolean; bordered?: boolean }) => {
    const { rounded = true } = props;
    return (
      <Image
        {...props}
        // eslint-disable-next-line react/destructuring-assignment
        alt={props.alt}
        style={{
          borderRadius: rounded ? 10 : undefined,
        }}
      />
    );
  },
  a: (props: any) => <Link {...props} variant="highlight" />,
  p: (props: any) => (
    <Text
      {...props}
      fontSize="md"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
        lineHeight: '1.75rem',
      }}
    />
  ),
  h2: (props: any) => (
    <Heading
      {...props}
      fontSize="xl"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
      }}
    />
  ),
  h3: (props: any) => (
    <Heading
      {...props}
      as="h3"
      fontSize="lg"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
      }}
    />
  ),
  ul: (props: any) => (
    <ul
      {...props}
      style={{
        marginBottom: '0.75rem',
        color: 'var(--color-foreground-neutral)',
      }}
    />
  ),
};
export default MDXComponents;
