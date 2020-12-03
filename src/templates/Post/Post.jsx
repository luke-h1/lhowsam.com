/* eslint-disable */
import React from 'react';
import ReadLink from '../../components/utils/ReadLink/ReadLink';
import {
PostArticle,
PostWrap,
PostLink,
PostImage,
PostIntro
} from './PostElements';

const Post = ({ post}) => (
  <>
    <PostArticle>
      <PostWrap>
        <PostLink to={post.slug}>
          <PostImage fluid={post.image.sharp.fluid} alt={post.title} />
        </PostLink>
        <h3>
          <PostLink to={post.slug}>{post.title}</PostLink>
        </h3>
      <PostIntro>{post.excerpt}</PostIntro>
      <ReadLink to={post.slug}>Read This Post</ReadLink>
      </PostWrap>
    </PostArticle>
  </>
);
export default Post;