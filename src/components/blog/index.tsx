/* eslint-disable no-mixed-spaces-and-tabs */
import useHover from '@src/hooks/useHover';
import {
  AnchorUnstyled,
  ButtonUnstyled,
  Card,
  IconContainer,
  ReadMorePrompt,
} from '@src/styles/blog';
import {
  BlogPostPreviewTitle,
  Datestamp,
  SmallText,
} from '@src/styles/typography';
import { Post } from '@src/types/post';

import Link from 'next/link';
import React, { RefObject } from 'react';
import { FaArrowRight, FaLongArrowAltUp, FaTwitter } from 'react-icons/fa';

interface ShareLinkProps {
  title: string;
  slug: string;
}

export const ShareLinks = ({ title, slug }: ShareLinkProps) => {
  const tweetShareURL = `https://twitter.com/intent/tweet?text=Check out: ${title}&url=https://lhowsam.com/blog/${slug}%0D%0A&via=_LukeH_1999`;

  return (
    <IconContainer
      href={tweetShareURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter aria-label="Share on Twitter" />
      <span>Share via Twitter</span>
    </IconContainer>
  );
};

export const ScrollToTop = ({
  topRef,
}: {
  topRef: RefObject<HTMLDivElement>;
}) => {
  const scrollToTop = () => {
    if (topRef) topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ButtonUnstyled onClick={scrollToTop}>
      <FaLongArrowAltUp style={{ fontSize: '20px' }} />
      Back to the top
    </ButtonUnstyled>
  );
};

interface Props {
  post: Post;
}

export const BlogPostPreview = ({ post }: Props) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <article data-testid={`blog-post-${post.title}`}>
      <Link href={`/blog/${post.slug}`} scroll={false} passHref>
        <AnchorUnstyled href={`/blog/${post.slug}`}>
          <Card ref={hoverRef}>
            <BlogPostPreviewTitle {...{ isHovered }}>
              {post.title}
            </BlogPostPreviewTitle>
            <Datestamp>{post.date}</Datestamp>
            <SmallText>{post.intro}</SmallText>
            <ReadMorePrompt {...{ isHovered }}>
              Read more{' '}
              {isHovered && <FaArrowRight style={{ fontSize: '12px' }} />}
            </ReadMorePrompt>
          </Card>
        </AnchorUnstyled>
      </Link>
    </article>
  );
};
