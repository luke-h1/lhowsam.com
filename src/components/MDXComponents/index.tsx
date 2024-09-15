import { ComponentPropsWithoutRef } from 'react';
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
      {...props}
      fontSize="md"
      color="foregroundNeutral"
      style={{
        marginBottom: '1.25rem',
        lineHeight: '1.75rem',
      }}
    />
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
    <List
      {...props}
      style={{
        listStyleType: 'disc',
        marginBottom: '0.75rem',
        marginLeft: '1.25rem',
        color: 'var(--color-foreground-neutral)',
      }}
      color="foregroundNeutral"
    >
      {children}
    </List>
  ),
};

export default MDXComponents;
