import { variables } from '@frontend/styles/variables.css';
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
          marginTop: variables.spacing.lg,
          marginBottom: variables.spacing.lg,
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
        textDecorationThickness: '2px',
        textUnderlineOffset: '3px',
        ':hover': {
          textDecorationThickness: '3px',
        },
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
        marginBottom: variables.spacing.lg,
        lineHeight: '1.75',
        fontSize: variables.fontSize.lg,
      }}
    >
      {props.children}
    </Text>
  ),
  h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <Heading
      {...props}
      fontSize="xxxxl"
      color="foreground"
      style={{
        marginTop: variables.spacing.xxl,
        marginBottom: variables.spacing.xl,
        fontWeight: variables.fontWeight.bold,
      }}
    >
      {children}
    </Heading>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <Heading
      {...props}
      fontSize="xxxl"
      color="foreground"
      style={{
        marginTop: variables.spacing.xxl,
        marginBottom: variables.spacing.lg,
        fontWeight: variables.fontWeight.bold,
      }}
    >
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <Heading
      {...props}
      as="h3"
      fontSize="xxl"
      color="foreground"
      style={{
        marginTop: variables.spacing.xl,
        marginBottom: variables.spacing.lg,
        fontWeight: variables.fontWeight.semiBold,
      }}
    >
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
    <Heading
      {...props}
      as="h4"
      fontSize="xl"
      color="foregroundNeutral"
      style={{
        marginTop: variables.spacing.xl,
        marginBottom: variables.spacing.md,
        fontWeight: variables.fontWeight.semiBold,
      }}
    >
      {children}
    </Heading>
  ),
  h5: ({ children, ...props }: ComponentPropsWithoutRef<'h5'>) => (
    <Heading
      {...props}
      as="h5"
      fontSize="lg"
      color="foregroundNeutral"
      style={{
        marginTop: variables.spacing.lg,
        marginBottom: variables.spacing.md,
        fontWeight: variables.fontWeight.semiBold,
      }}
    >
      {children}
    </Heading>
  ),
  h6: ({ children, ...props }: ComponentPropsWithoutRef<'h6'>) => (
    <Heading
      {...props}
      as="h6"
      fontSize="md"
      color="foregroundNeutral"
      style={{
        marginTop: variables.spacing.lg,
        marginBottom: variables.spacing.md,
        fontWeight: variables.fontWeight.semiBold,
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
      }}
    >
      {children}
    </Heading>
  ),
  // Improved unordered list styling for blog content
  ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      {...props}
      style={{
        listStyleType: 'disc',
        marginBottom: variables.spacing.lg,
        marginLeft: 0,
        paddingLeft: variables.spacing.xl,
        color: variables.color.foregroundNeutral,
        fontSize: variables.fontSize.lg,
        lineHeight: '1.75',
      }}
    >
      {children}
    </ul>
  ),
  // Ordered list styling
  ol: ({ children, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      {...props}
      style={{
        listStyleType: 'decimal',
        marginBottom: variables.spacing.lg,
        marginLeft: 0,
        paddingLeft: variables.spacing.xl,
        color: variables.color.foregroundNeutral,
        fontSize: variables.fontSize.lg,
        lineHeight: '1.75',
      }}
    >
      {children}
    </ol>
  ),
  // Improved list item styling
  li: ({ children, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li
      {...props}
      style={{
        marginBottom: variables.spacing.sm,
        paddingLeft: variables.spacing.xs,
        position: 'relative',
      }}
    >
      {children}
    </li>
  ),
  // Blockquote styling
  blockquote: ({
    children,
    ...props
  }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      {...props}
      style={{
        borderLeft: `4px solid ${variables.color.highlight}`,
        paddingLeft: variables.spacing.lg,
        marginLeft: 0,
        marginRight: 0,
        marginTop: variables.spacing.lg,
        marginBottom: variables.spacing.lg,
        fontStyle: 'italic',
        fontSize: variables.fontSize.lg,
        lineHeight: '1.75',
        color: variables.color.foregroundNeutral,
        backgroundColor: variables.color.surface,
        padding: variables.spacing.lg,
        borderRadius: variables.radii.md,
      }}
    >
      {children}
    </blockquote>
  ),
  // Inline code styling
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code
      {...props}
      style={{
        backgroundColor: variables.color.surface,
        color: variables.color.foreground,
        padding: `${variables.spacing.xxs} ${variables.spacing.xs}`,
        borderRadius: variables.radii.md,
        fontSize: variables.fontSize.sm,
        fontFamily: variables.font.mono,
        border: `1px solid ${variables.color.borderFaint}`,
      }}
    >
      {children}
    </code>
  ),
  // Pre/code block styling (enhanced)
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      {...props}
      style={{
        marginTop: variables.spacing.lg,
        marginBottom: variables.spacing.lg,
        borderRadius: variables.radii.lg,
        border: `1px solid ${variables.color.borderFaint}`,
        overflow: 'auto',
        fontSize: variables.fontSize.sm,
      }}
    >
      {children}
    </pre>
  ),
  // Horizontal rule
  hr: ({ ...props }: ComponentPropsWithoutRef<'hr'>) => (
    <hr
      {...props}
      style={{
        border: 'none',
        height: '1px',
        backgroundColor: variables.color.border,
        marginTop: variables.spacing.xxl,
        marginBottom: variables.spacing.xxl,
      }}
    />
  ),
  // Strong/bold text
  strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
    <strong
      {...props}
      style={{
        fontWeight: variables.fontWeight.bold,
        color: variables.color.foreground,
      }}
    >
      {children}
    </strong>
  ),
  // Emphasis/italic text
  em: ({ children, ...props }: ComponentPropsWithoutRef<'em'>) => (
    <em
      {...props}
      style={{
        fontStyle: 'italic',
        color: variables.color.foreground,
      }}
    >
      {children}
    </em>
  ),
};

export default MDXComponents;
