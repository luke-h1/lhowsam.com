import * as List from '@frontend/components/List';
import Image, { ImageProps } from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import Heading from './Heading';
import Link from './Link';
import Text from './Text';

const MDXComponents = {
  Image: (props: ImageProps & { rounded?: boolean; bordered?: boolean }) => {
    const { rounded = true, alt } = props;
    return (
      <Image
        {...props}
        alt={alt}
        style={{
          borderRadius: rounded ? 10 : undefined,
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    );
  },
  a: ({ children, href, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <Link
      {...props}
      variant="highlight"
      css={{
        textDecoration: 'underline',
      }}
      href={href as string}
    >
      {children}
    </Link>
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <Text
      fontSize="md"
      maxWidth="container"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
        lineHeight: '1.75rem',
      }}
    >
      {props.children}
    </Text>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <Heading
      {...props}
      fontSize="xxxl"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
      }}
    >
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <Heading
      {...props}
      as="h3"
      fontSize="xl"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
      }}
    >
      {children}
    </Heading>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <List.Container
      {...props}
      style={{
        listStyleType: 'disc',
        marginBottom: '0.75rem',
        marginLeft: '1.25rem',
        color: 'var(--color-foreground-neutral)',
      }}
    >
      {children}
    </List.Container>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <List.Item
      {...props}
      style={{
        marginBottom: '0.75rem',
        marginLeft: '1.25rem',
      }}
    >
      {children}
    </List.Item>
  ),
};

export default MDXComponents;
