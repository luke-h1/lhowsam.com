/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading } from '../Heading';
import { Image, ImageProps } from '../Image';
import Link from '../Link';
import { List } from '../List';
import Text from '../Text';

const MDXComponents = {
  Image: (props: ImageProps & { rounded?: boolean; bordered?: boolean }) => {
    const { rounded = true, alt } = props;
    return (
      <Image
        {...props}
        alt={alt}
        style={{
          borderRadius: rounded ? 10 : undefined,
        }}
      />
    );
  },
  a: (props: any) => (
    <Link
      {...props}
      variant="highlight"
      css={{
        textDecoration: 'underline',
      }}
    />
  ),
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
      fontSize="xxxl"
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
      fontSize="xl"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
      }}
    />
  ),
  ul: (props: any) => (
    <List
      {...props}
      style={{
        listStyleType: 'disc',
        marginBottom: '0.75rem',
        marginLeft: '1.25rem',
        color: 'var(--color-foreground-neutral)',
      }}
    />
  ),
};

export default MDXComponents;
