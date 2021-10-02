/* eslint-disable no-nested-ternary */
import Link, { LinkProps } from 'next/link';
import React, { PropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

export const LargeTitle = styled.h1`
  font-size: 8rem;
  line-height: 1;
`;

export const TextGradientStyles = css`
  background-image: linear-gradient(
    90deg,
    var(--color-primary-accent) 0%,
    var(--color-secondary-accent) 90%
  );
  background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	box-decoration-break: slice;
	-webkit-box-decoration-break: clone;
`;

export const TextGradient = styled.span`
${TextGradientStyles}`;

export const Heavy = styled.span`
  font-weight: bold;
`;

export const Accent = styled.span`
  color: var(--color-primary-accent);
`;

export const Monospace = styled.span`
	font-family: SFMono-Regular, Consolas, Roboto Mono, Menlo, Monaco, Liberation Mono,
		Lucida FoobarWrapper, monospace;
`;

export const RemoveBulletsFromList = styled.div`
  & ul {
    list-style: none;
    padding-left: 30px;
  }
  & ul li {
    padding: 5px;
  }
`;

export const PaddingListItems = styled.div`
  & ul li {
    padding: 5px;
  }
`;

export const MDXText = styled.div`
  margin: 0;
  padding: 15px 0;
`;

export const Datestamp = styled.p`
  color: var(--color-primary-accent);
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
  padding: 5px 0;
  margin: 0.5rem 0;
`;

export const MDXTitle = styled.h1<{color?: string}>`
  font-size: 2rem;
  color: ${({ color }) => (color || 'red')};
`;

export const Paragraph = styled.p<{paddingTop?: boolean | number}>`
  margin: 0;
  padding: 10px 0;
  padding-top: ${({ paddingTop }) => (paddingTop ? (typeof paddingTop === 'number' ? `${paddingTop}px` : '150px') : null)
};
`;

export const SmallText = styled.p`
  font-size: 14px;
  margin: 0;
  padding-bottom: 10px;
`;

export const BlogPostTitle = styled.h1`
  font-size: clamp(4rem, 15vw, 6rem);
  line-height: 1.1;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 15px;
`;

export const BlogPostReviewTitle = styled.h2<{ isHovered: boolean }>`
  margin: 0;
  font-size: 2rem;
  ${({ isHovered }) => isHovered && TextGradientStyles}
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--color-primary-accent);
  border-bottom: 2px solid transparent;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    border-bottom: 2px solid var(--color-primary-accent);
    text-decoration: none;
  }
`;

export const ExternalLink = styled(StyledLink).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;

export const StyledAccentTextLink = styled(StyledLink)`
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkTo = ({
  children,
  href,
  as,
  replace,
  style = {},
  ...props
}: PropsWithoutRef<LinkProps & React.HTMLProps<HTMLAnchorElement>>) => {
  return (
    <Link {...{ href, as, replace }} passHref>
      <StyledLink {...{ style, ...props }}>{children}</StyledLink>
    </Link>
  );
};

export const Title = styled.h1<{ resetLineHeight?: boolean; size?: number }>`
  padding: 20px 0;
  font-size: ${({ size }) => (size ? `${size}rem` : '3rem')}
  ${({ resetLineHeight }) => resetLineHeight && css`
    line-height: 1;
  `
}
`;
