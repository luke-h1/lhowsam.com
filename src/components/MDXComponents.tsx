/* eslint-disable @typescript-eslint/no-explicit-any */
import slugify from '@sindresorhus/slugify';
import type { ImageProps } from 'next/legacy/image';
import Image from 'next/legacy/image';
import Heading from './Heading/Heading';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import Link from './Link/Link';
import Text from './Text/Text';
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed';

const Components = {
  ImageCarousel,
  Image: (props: ImageProps & { rounded?: boolean }) => {
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
  YoutubeEmbed,
  a: (props: any) => <Link {...props} variant="highlight" />,
  p: (props: any) => <Text {...props} />,
  h2: (props: any) => (
    <Heading {...props} fontSize="xl" id={slugify(props.children)} />
  ),
  h3: (props: any) => (
    <Heading {...props} as="h3" fontSize="lg" id={slugify(props.children)} />
  ),
};
export default Components;
