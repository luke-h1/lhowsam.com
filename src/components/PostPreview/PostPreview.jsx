/* eslint-disable */
import React from 'react'
import {
  PostArticle,
  PostWrap,
  PostImage,
  PostParagraph,
  PostLink
} from './PostPreviewElements';
import ReadLink from '../utils/ReadLink/ReadLink';
import { Link } from 'gatsby';
const PostPreview = ({ post }) => (
  <>
    <PostArticle>
      <PostWrap>
      <PostLink to={post.slug}>
        <PostImage
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </PostLink>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <PostParagraph>{post.excerpt}</PostParagraph>
      <ReadLink to={post.slug}>Read this post </ReadLink>
      </PostWrap>
    </PostArticle>
  </>
)

export default PostPreview
